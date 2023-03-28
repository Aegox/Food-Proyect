import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Welcome from "./components/Welcome.jsx";
import Home from "./components/Home.jsx";
import CreateRecipe from "./components/CreateRecipe.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";
import About from "./components/About.jsx";
import Session from "./components/Session.jsx";
import SessionRegister from "./components/SessionRegister.jsx";
import SavedRecipes from "./components/SavedRecipes.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/CreateRecipe" element={<CreateRecipe/>}/>
                <Route path="/recipeDetail/:id" element={<RecipeDetail/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/session" element={<Session/>}/>
                <Route path="/register" element={<SessionRegister/>}/>
                <Route path="/saved" element={<SavedRecipes/>}/>
            </Routes>
        </BrowserRouter>
    )
}


