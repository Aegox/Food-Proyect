import fetch from "cross-fetch";

export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_RECIPES = "FILTER_RECIPES";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER_BY_NAME = "FILTER_BY_NAME";

export const getDiets = () => {
    return async (dispatch) => {
        return fetch("http://localhost:3001/diets")
            .then(response => response.json())
            .then(data => dispatch({type: GET_DIETS, payload: data}))
            .catch(error => console.log(error))
    };
};

export const getRecipes = (name) => {
    return async (dispatch) => {
        let url = `http://localhost:3001/recipes`;
        if (name) {url += `?name=${name}`};
        return fetch(url)
            .then(response => response.json())
            .then(data => dispatch({type: GET_RECIPES, payload: data}))
            .catch(error => console.log(error))
    };
};

export const getRecipeDetail = (id) => {
    return async (dispatch) => {
        let url = `http://localhost:3001/recipes/${id}`;
        return fetch(url)
            .then(response => response.json())
            .then(data => dispatch({type: GET_RECIPE_DETAIL, payload: data}))
            .catch(error => console.log(error))
    };
};

export const createRecipe = (recipe) => {
    console.log(recipe)
    return async (dispatch) => {
        let url = `http://localhost:3001/recipes`;
        return fetch(url, {
        method: "POST",
            headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify(recipe)
        })
            .then(response => response.json())
            .then(() => dispatch({type: CREATE_RECIPE}))
            .catch(error => console.log(error))
    };

}

export const filterRecipes = (payload) => {
    return {
        type: FILTER_RECIPES,
        payload
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
}


export const filterByName = (payload) => {
    return {
        type: FILTER_BY_NAME,
        payload
    }
}
