const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')

chai.should()
chai.use(chaiHttp)

describe('Files', () => {
  /*
   * Test the /GET route
   */
  describe('/GET files data', () => {
    it('it should GET all files data with correct format: /files/data', (done) => {
      chai
        .request(server)
        .get('/files/data')
        .end((_err, res) => {
          res.should.have.status(200)
          res.should.have.header(
            'content-type',
            'application/json; charset=utf-8'
          )
          res.body.should.be.a('array')
          res.body.length.should.be.above(0)

          res.body.forEach((file) => {
            file.should.have.property('name')
            file.should.have.property('lines')

            file.name.should.be.a('string')
            file.lines.should.be.a('array')
            file.lines.length.should.be.above(0)

            file.lines.forEach((line) => {
              line.should.be.an('object')
              line.should.has.any.keys('file', 'text', 'number', 'hex')

              Object.values(line).forEach((value) =>
                value.should.be.a('string')
              )
            })
          })

          done()
        })
    })

    it('it should GET file data by fileName param: /files/data?fileName=test2.csv', (done) => {
      chai
        .request(server)
        .get('/files/data?fileName=test2.csv')
        .end((_err, res) => {
          res.should.have.status(200)
          res.should.have.header(
            'content-type',
            'application/json; charset=utf-8'
          )
          res.body.should.be.a('object')
          res.body.should.have.property('name')
          res.body.should.have.property('lines')

          res.body.name.should.be.a('string')
          res.body.lines.should.be.a('array')
          res.body.lines.length.should.be.above(0)

          res.body.lines.forEach((line) => {
            line.should.be.an('object')
            line.should.has.any.keys('file', 'text', 'number', 'hex')

            Object.values(line).forEach((value) => value.should.be.a('string'))
          })

          done()
        })
    })

    it('it should GET file list: /files/list', (done) => {
      chai
        .request(server)
        .get('/files/list')
        .end((_err, res) => {
          res.should.have.status(200)
          res.should.have.header(
            'content-type',
            'application/json; charset=utf-8'
          )
          res.body.should.have.property('files')
          res.body.files.should.be.a('array')
          res.body.files.forEach((file) => {
            file.should.be.an('string')
          })

          done()
        })
    })
  })
})
