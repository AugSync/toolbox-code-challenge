const CsvToJson = (csv) => {
  const lines = csv.split('\n')

  const result = []

  const headers = lines[0].split(',')

  lines.forEach((line, lineIndex) => {
    if (lineIndex > 0) {
      const obj = {}
      const currentLine = line.split(',')

      if (currentLine.length === 4) {
        currentLine.forEach((currentLine, index) => {
          obj[headers[index]] = currentLine
        })

        result.push(obj)
      }
    }
  })

  return result
}

module.exports = CsvToJson
