import styleAbout from "../styles/About.module.css";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className={styleAbout.container}>
            <div className={styleAbout.nav}>
                <Link to="/">
                    <h2>{"<"}</h2><h4>Back to Home</h4>
                </Link>
            </div>
            <div className={styleAbout.secondContainer}>
                <img src="./images/makerecipes.png" alt=""/>
                <div className={styleAbout.Description}>
                    <h1>¿Que es Master Recipes?</h1>
                    <h2><strong>Master Recipes</strong> es un buscador de recetas traidas de una api externa, las 
                    cuales cuentan con tipos de dietas, nivel de salud entre otras caracteristicas 
                    esto con el fin de dar a un proyecto de un bootcamp llamado "Soy Henry" utilizando las 
                    tecnologias, react, redux, javascrypt, css, html, postgressql, express, sequelize.</h2>
                </div>
            </div>
        </div>
    )
}

export default About;
