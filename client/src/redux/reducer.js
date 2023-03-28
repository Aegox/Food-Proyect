import * as actions from "./actions.js";
import {GET_DIETS} from "./actions.js";
import {GET_RECIPES} from "./actions.js";
import {GET_RECIPE_DETAIL} from "./actions.js";
import {CREATE_RECIPE} from "./actions.js";
import {CREATE_USER} from "./actions.js";
import {FILTER_RECIPES} from "./actions.js";
import {CLEAN_DETAIL} from "./actions.js";
import {FILTER_BY_NAME} from "./actions.js";
import {LOGIN_USER} from "./actions.js";
import {ADD_SAVED_RECIPE} from "./actions.js";
import {GET_SAVED_RECIPES} from "./actions.js";

const initialState = {
    user: {
        auth: false,
        token: '',
    },
    savedRecipes: [],
    diets: [],
    allRecipes: [],
    recipes: [],
    recipeDetail: {}
};

const rootReducer = (state = initialState, action) => {
    let recipesFiltered = state.allRecipes;
    const recipes = state.recipes;
    

    switch (action.type) {
        case GET_DIETS:
            return { ...state, diets: [...action.payload] };
    
        case GET_RECIPES: 
            return { ...state, allRecipes: action.payload, recipes: action.payload};
    
        case GET_RECIPE_DETAIL: 
            return { ...state, recipeDetail: action.payload};
    
        case CREATE_RECIPE:
            return state;
        
        case CREATE_USER:
            return state;
        
        case GET_SAVED_RECIPES:
            return {
                ...state,
                savedRecipes: action.payload
                }
            
        
        case ADD_SAVED_RECIPE:
            return state;
        
        case LOGIN_USER:
            return {
                ...state,
                user: {
                    auth: action.payload.verify,
                    token: action.payload.token
                }
            };

        case CLEAN_DETAIL: 
           return {
                ...state,
               recipeDetail: {}
           }

        case FILTER_BY_NAME:
            let recipesByName = recipes.filter((recipe) => recipe.title.toLowerCase().includes(action.payload.toLowerCase()))
            return {
                ...state,
                allRecipes: recipesByName
            }
    
        case FILTER_RECIPES:
            const filterValue = action.payload.toLowerCase();    
            if (filterValue === "all") {
                recipesFiltered = recipes;
            } else if (filterValue === "reload") {
                recipesFiltered = recipes;
            } else if (filterValue === "on") {
                recipesFiltered = recipesFiltered.filter((recipe) => recipe.hasOwnProperty("createinDb"))
            } else if (filterValue === "off") {
                recipesFiltered = recipesFiltered.filter((recipe) => !recipe.hasOwnProperty("createinDb"))
            } else if (filterValue === "ascendent") {
                recipesFiltered = recipesFiltered.sort((a,b) => a.healthScore - b.healthScore )
            } else if (filterValue === "descendent") {
                recipesFiltered = recipesFiltered.sort((a,b) => b.healthScore - a.healthScore )
            } else if (filterValue === "a-z") {
                recipesFiltered = recipesFiltered.sort((a,b) => a.title.localeCompare(b.title))
            } else if (filterValue === "z-a") {
                recipesFiltered = recipesFiltered.sort((a,b) => b.title.localeCompare(a.title))
            } else {
                recipesFiltered = recipesFiltered.filter((recipe) => recipe.Diets.includes(filterValue))
            }
            return {
                ...state,
                allRecipes: [...recipesFiltered]
            };

        default:
            return state;

        }


   
}






export default rootReducer;



