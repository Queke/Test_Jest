const request =  require('supertest')
const app = require('../../server')

describe('Server', () => {
    describe('Endpoints', () => {
        describe('Post POST', () => {
            it('creates a nre post', async () => {
                const response = await request(app)
                .post('/')
                .send({userId: 5})
                .set('user_id', 1)
                .set('Content-type', 'application/json')
            expect(response.statusCode).to.equal(201)
            expect(response.body.userId).to.equal(5)
            expect(response.body).toHave.property('id')
            })
        })
    })
})