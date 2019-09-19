const request = require('supertest')
const server = require('./server')

describe('server.js', () =>
{
    describe('GET /', () =>
    {
        it('returns 200 OK', () =>
        {
            request(server)
                .get('/')
                .then(res =>
                    {
                        expect(res.status).toBe(200)
                    })
        })
    })
})

