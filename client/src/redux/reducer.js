import * as actions from "./actions.js";
import {GET_DIETS} from "./actions.js";
import {GET_RECIPES} from "./actions.js";
import {GET_RECIPE_DETAIL} from "./actions.js";
import {CREATE_RECIPE} from "./actions.js";
import {FILTER_RECIPES} from "./actions.js";
import {CLEAN_DETAIL} from "./actions.js";

const initialState = {
    diets: [],
    allRecipes: [],
    recipes: [],
    recipeDetail: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIETS:
            return { ...state, diets: [...action.payload] };
    
        case GET_RECIPES: 
            return { ...state, allRecipes: action.payload, recipes: action.payload};
    
        case GET_RECIPE_DETAIL: 
            return { ...state, recipeDetail: action.payload};
    
        case CREATE_RECIPE:
            return state;

        case CLEAN_DETAIL: 
           return {
                ...state,
               recipeDetail: {}
           }
    
        case FILTER_RECIPES:
            let recipesFiltered = state.allRecipes;
            const recipes = state.recipes;
            const filterValue = action.payload.toLowerCase();
      
            if (filterValue === "all") {
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



