const request = require('supertest');
const app = require('../app.js');
const recipesApi = require('../controllers/getRecipesApi.js')

describe('GET - /recipes' , () => {
    const testUrl = '/recipes'
    it('should be return status code 200', (done) => {
        request(app)
            .get(testUrl)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
     
    //it('should be return array of objects recipes', async (done) => {
      //  const response = await request(app).get(testUrl);
        //expect(Array.isArray(response.body)).toBe(true);
        //expect(response.body.length).toBeGreaterThan(0);
        //done()
    //});

});
