const request = require('supertest');
const app = require('../app.js');

describe('GET - /recipes/:id' , () => {
    const testUrl = '/recipes/756814'
    it('should be return status code 200', (done) => {
        request(app)
            .get(testUrl)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    }) 

    it('should be return object of detail recipe', async () => {
        const response = await request(app).get(testUrl);
        expect(typeof response.body).toBe('object')
        expect(response.body).toHaveProperty('id')   
        expect(response.body).toHaveProperty('title')   
        expect(response.body).toHaveProperty('image')   
        expect(response.body).toHaveProperty('healthScore')   
        expect(response.body).toHaveProperty('Diets')   
    })
    
}) 
