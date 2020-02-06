const supertest = require('supertest')
const server = require('./api/server')

let token;
beforeEach(async (done) => {
    const userLogin = await supertest(server)
    .post('/api/auth/login/user')
    .send({username: 'superman',
        password: '1234' 
    })

    token = userLogin.body.token
    console.log(token)
done()

})

describe("endpoints organizers", () => { 

    test('get all orgs', async () => {
        const orgs = await supertest(server)
            .get('/api/authorized/user')
            .set("Authorization", token)
        console.log('Orgs in DB', orgs.body.length)
        expect(orgs.status).toBe(200)
    })

})