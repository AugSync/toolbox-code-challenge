// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.log({ err })
  const { statusCode, message } = err

  const response = {
    code: statusCode ?? 500,
    message
  }

  res.status(response.code).json(response)
}

module.exports = {
  errorHandler
}
