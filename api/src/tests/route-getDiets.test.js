const request = require('supertest');
const app = require('../app.js');

describe('GET - /diets', () => {
    it('should be return status code 200', (done) => {
        request(app)
            .get('/diets')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
    
    it('should be contains array of objects',async () => {
        const response = await request(app).get('/diets');
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);})
});
