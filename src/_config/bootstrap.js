const { serverUnavailable } = require("boom")

const server = require('./server')

module.exports = () => {
    server()
}