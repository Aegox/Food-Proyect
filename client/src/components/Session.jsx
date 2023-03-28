import styleSession from '../styles/Session.module.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import * as actions from '../redux/actions.js' 
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert';

const Session = () => {
    const [user, setUser] = useState({ email: '', password: ''});
    let auth = useSelector((store) => store.user);
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.auth) {
            localStorage.setItem('token', auth.token);
            swal({
                title: "Good job!",
                text: "successfully logged in!",
                icon: "success",
                button: "Ok!",
            });
            setError(false)
            navigate('/home')
        }
    },[auth.auth])

    
    const handleInputs = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        setError(false)
    }    

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(actions.loginUser({user}))
        setUser({ email: '', password: ''});
        setError(true)
    }
    
    return (
        <div className={styleSession.container}>
            <form>
                <img src='./images/makerecipes.png'/>
                <h1>Login Acccount</h1>
                <label>Email</label>
                <input type='text' name='email' placeholder='write your email' onChange={(e) => handleInputs(e)}/>
                <label>Password</label>
                <input type='password' name='password' placeholder='write your password' onChange={(e) => handleInputs(e)}/>
                <button onClick={(e) => handleSubmit(e)}>login</button>
                {error ? <label>email or password are incorret</label>: false}
                <Link to='/register'>Don't have an account? - Register now</Link>
            </form>
        </div>
    )
};

export default Session;
