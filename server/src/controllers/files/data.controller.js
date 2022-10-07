const fetch = require('node-fetch')
const { ApiError, CsvToJson } = require('../../utils')

const ApiProviderConfig = {
  headers: { authorization: 'Bearer aSuperSecretKey' }
}

const getList = async (_req, res, next) => {
  try {
    const response = await fetch(
      'https://echo-serv.tbxnet.com/v1/secret/files',
      ApiProviderConfig
    )
    if (response.ok) {
      const data = await response.json()

      res.json(data)
    } else {
      throw new ApiError(response.status, response.statusText)
    }
  } catch (error) {
    next(error)
  }
}

const getData = async (req, res, next) => {
  const fileNameParam = req.query.fileName
  const queryByFileName = !!fileNameParam

  try {
    if (queryByFileName) {
      const response = await fetch(
        `https://echo-serv.tbxnet.com/v1/secret/file/${fileNameParam}`,
        ApiProviderConfig
      )

      if (response.ok) {
        const text = await response.text()

        const lines = CsvToJson(text)

        return res.json({
          name: fileNameParam,
          lines
        })
      } else throw new ApiError(response.status, response.statusText)
    }

    const response = await fetch(
      'https://echo-serv.tbxnet.com/v1/secret/files',
      ApiProviderConfig
    )
    if (response.ok) {
      const data = await response.json()
      const files = []

      if (data.files && data.files.length > 0) {
        const promises = data.files.map((file) =>
          fetch(
            `https://echo-serv.tbxnet.com/v1/secret/file/${file}`,
            ApiProviderConfig
          )
        )

        await Promise.all(promises)

        for await (const response of promises) {
          if (response.ok) {
            const text = await response.text()

            const filePathNameArray = new URL(response.url).pathname.split('/')
            const fileName = filePathNameArray[filePathNameArray.length - 1]

            const lines = CsvToJson(text)

            if (lines.length > 0) {
              files.push({
                name: fileName,
                lines
              })
            }
          }
        }

        res.json(files)
      } else throw new ApiError(400, 'There are no files available')
    } else throw new ApiError(response.status, response.statusText)
  } catch (error) {
    next(error)
  }
}

module.exports = { getData, getList }
