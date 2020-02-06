const supertest = require('supertest')
const server = require('./api/server')

let token; 
 


beforeEach(async (done) => {
    
  
    
    const userLogin = await supertest(server)
    .post('/api/auth/login/org')
    .send({username: 'superman2',
        password: '1234' 
    })

    token = userLogin.body.token
done()

})
//auth
describe("endpoints organizers", () => { 
    
    it('get specific organizer', async () => {
        const orgs = await supertest(server)
            .get('/api/authorized/org/1')
            .set("Token", token)
        expect(orgs.body.name).toBe("Janelle Whitley")
        expect(orgs.status).toBe(200)
    })

    it('get all orgs', async () => {
        const orgs = await supertest(server)
            .get('/api/authorized/org')
            .set("Token", token)
        expect(orgs.status).toBe(200)
        expect(orgs.type).toBe('application/json')
    })
    it('post experience to org id', async () => {
        const orgs = await supertest(server)
            .post('/api/authorized/exps/org/8')
            .set("Token", token)
            .send({
                location:"Kansas City",
                description:"Join Chiefs fans destroying the city",
                type:"fun",
                title:"Chiefs Kingdom",
                duration:"3 hours",
                
            })
        expect(orgs.status).toBe(201)
        expect(orgs.type).toBe('application/json')
    })

})
//auth
describe("endpoints Users", () => { 
    
    it('get specific user', async () => {
        const users = await supertest(server)
            .get('/api/authorized/user/1')
            .set("Token", token)
        expect(users.body.name).toBe("Willy Wonka")
        expect(users.status).toBe(200)
    })

    it('get all users', async () => {
        const users = await supertest(server)
            .get('/api/authorized/user')
            .set("Token", token)
        expect(users.status).toBe(200)
        expect(users.type).toBe('application/json')
    })

})
//auth
describe("endpoints experiences", () => { 
    
    it('update experience', async () => {
        const exps = await supertest(server)
            .put('/api/authorized/exps/1')
            .send({title:"new Title"})
            .set("Token", token)
        expect(exps.status).toBe(200)
    })

    it('get all experiences', async () => {
        const exps = await supertest(server)
            .get('/api/authorized/exps')
            .set("Token", token)
        expect(exps.status).toBe(200)
        expect(exps.type).toBe('application/json')
    })

})

//no auth
describe("endpoints organizers", () => { 
    
    it('get specific organizer', async () => {
        const orgs = await supertest(server)
            .get('/api/org/2')
        expect(orgs.body.name).toBe("Norman Cobb")
        expect(orgs.status).toBe(200)
    })

    it('get all orgs', async () => {
        const orgs = await supertest(server)
            .get('/api/org')
        expect(orgs.status).toBe(200)
        expect(orgs.type).toBe('application/json')
    })
    it('post experience to org id', async () => {
        const orgs = await supertest(server)
            .post('/api/exps/org/4')
            .send({
                location:"Kansas City",
                description:"Join Chiefs fans destroying the city",
                type:"fun",
                title:"Chiefs Kingdom",
                duration:"3 hours",
                
            })
        expect(orgs.status).toBe(201)
        expect(orgs.type).toBe('application/json')
    })

})
//no auth
describe("endpoints Users", () => { 
    
    it('get specific user', async () => {
        const users = await supertest(server)
            .get('/api/user/1')
        expect(users.body.name).toBe("Willy Wonka")
        expect(users.status).toBe(200)
    })

    it('get all users', async () => {
        const users = await supertest(server)
            .get('/api/user')
        expect(users.status).toBe(200)
        expect(users.type).toBe('application/json')
    })

})
//no auth
describe("endpoints experiences", () => { 
    
    it('update experience', async () => {
        const exps = await supertest(server)
            .put('/api/exps/3')
            .send({title: "another new Title"})
        expect(exps.status).toBe(200)
    })

    it('get all experiences', async () => {
        const exps = await supertest(server)
            .get('/api/exps')
        expect(exps.status).toBe(200)
        expect(exps.type).toBe('application/json')
    })

})