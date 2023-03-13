const request = require('supertest');
const app = require('../app.js');

describe('POST - /recipes' , () => {
    const testUrl = '/recipes'
    const testRecipe = {
        id: 660306,
        title: "Slow Cooker: Pork and Garbanzo Beans",
        image: "https://spoonacular.com/recipeImages/660306-312x231.jpg",
        Diets: [
            "gluten free",
            "dairy free"
        ],
        healthScore: 100
    }   

    it('should be return status code 200 and return message to created was sucessfull', () => {
        request(app)
            .post(testUrl)
            .send(JSON.stringify(testRecipe))
            .set('Accept', 'application/json')
            .expect(201, {message: 'The recipe has been created'})
    });
 });
