import {useEffect , useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch , useSelector} from "react-redux";
import HomeNavStyle from "../styles/HomeNav.module.css";
import * as actions from "../redux/actions.js";

const HomeNav = () => {
    const diets = useSelector(store => store.diets);
    const dispatch = useDispatch();
    const [nameRecipe, setNameRecipe] = useState();
    const auth = useSelector((store) => store.user.auth)
 
    useEffect(() => {
        dispatch(actions.getDiets())
    }, [dispatch])

    const handleSearchRecipe = (event) => {
        setNameRecipe(event.target.value)
        
    }
    
    const handleSearch = () => {
        dispatch(actions.filterByName(nameRecipe))
        const input = document.querySelector('#search');
       }

    const handleFilterRecipes = (event) => {
        dispatch(actions.filterRecipes(event.target.value))
    }

    const handleButtonResponsive = () => {
        const nav = document.querySelector('.HomeNav_allContainer__IrzKB')
        nav.classList.toggle(HomeNavStyle.show)
    }

    const handleUserOptions = () => {
        const options = document.querySelector('.HomeNav_userOptions__Ul-eU')
        options.classList.toggle(HomeNavStyle.options)
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    

    return (
        <div className={HomeNavStyle.container}>
             <Link to="/">
                <img href="/" src="./images/makerecipes.png"/>
            </Link>
            <button onClick={() => handleButtonResponsive()} className={HomeNavStyle.buttonResponsive}>
               <i class="fa-solid fa-bars"></i> 
            </button>
            <div className={HomeNavStyle.allContainer}>
            <Link to="/CreateRecipe">
                <button className={HomeNavStyle.containerbutton}>Create Recipe</button>
            </Link>
           
            <div className={HomeNavStyle.search}>
                <input type="text" value= {nameRecipe} onChange= {handleSearchRecipe}/>
                <button className={HomeNavStyle.containerbutton} onClick = {() => handleSearch()}>Search</button>
            </div>
            <div className={HomeNavStyle.orderContainer}>
                <div className={HomeNavStyle.order}>
                    <label>Order By</label>
                </div>
                <div className={HomeNavStyle.filters}>
                    <div className={HomeNavStyle.filter}>
                        <label>Alphabet</label>
                        <select onChange={(e) =>  handleFilterRecipes(e)}>
                                <option value="all">All</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                            </select>
                    </div>
                    <div className={HomeNavStyle.filter}>
                        <label>Diet</label>
                        <select onChange={(e) => handleFilterRecipes(e)}>
                                <option value="all">All</option>
                                {diets.map((diet) => <option value={diet.Name}>{diet.Name}</option>)}
                            </select>
                    </div>
                    <div className={HomeNavStyle.filter}>
                        <label>Health Score</label>
                        <select onChange={(e) => handleFilterRecipes(e)}>
                            <option value="all">All</option>
                            <option value="ascendent">Ascendent</option>
                            <option value="descendent">Descendent</option>
                        </select>
                    </div>
                    <div className={HomeNavStyle.filter}>
                        <label>Created</label>
                        <select onChange={(e) => handleFilterRecipes(e)}>
                            <option value="all" >All</option>
                            <option value="on" >On</option>
                            <option value="off" >Off</option>
                        </select>
                    </div>
                    <div className={HomeNavStyle.search}>
                        <button className={HomeNavStyle.containerbutton} onClick={(e) => handleFilterRecipes(e)} value="reload" >Reload</button>
                    </div>

                </div>
            </div>
                <div className={HomeNavStyle.user}>
                    <i onClick={() => handleUserOptions()} class="fa-solid fa-user"></i>
                </div>
                <div className={HomeNavStyle.userOptions}>
                    { localStorage.getItem('token') ? 
                        <div>
                            <Link to='/saved'> <h3> <i class="fa-solid fa-bookmark"></i> Saved </h3></Link>
                            <h3 onClick={() => handleLogout()}> <i class="fa-solid fa-right-from-bracket"></i>Logout </h3>
                        </div>
                        :
                        <div>
                            <Link to='/session'> <h3> <i class="fa-solid fa-right-from-bracket"></i>Loggin</h3></Link>
                            <Link to='/register'> <h3> <i class="fa-solid fa-right-from-bracket"></i>Register</h3></Link>
                        </div>

                    }

                </div>
            </div>
        </div>
    )
};

export default HomeNav;


