import {useState} from 'react';
import styleSession from '../styles/Session.module.css';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as actions from '../redux/actions.js';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

const SessionRegister = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [validPassword, setValidPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSetInputs = (e) => {
        console.log(e.target.name, e.target.value)
        if (e.target.name == 'repeatPassword' && e.target.value == user.password) {
            setValidPassword(true)
            console.log(validPassword)
        };

        setUser({
            ...user,
            [e.target.name]: e.target.value 
        })
    }

    const handleCreateUser = (e) => {
        e.preventDefault()
        dispatch(actions.createUser(user));
        setUser({
            email: '',
            password: ''
        });
       swal({
            title: "Good job!",
            text: "Your user has been created!",
            icon: "success",
            button: "Ok!",
        });
        navigate("/session")
        
    }

    console.log(user)

    return (
        <div className={styleSession.container}>
            <form>
                <img src='./images/makerecipes.png'/>
                <h1>Register Acccount</h1>
                <label>Email</label>
                <input name='email' type='text' onChange={(e) => handleSetInputs(e)} placeholder='write your email'/>
                <label>Password</label>
                <input name='password' type='password' onChange={(e) => handleSetInputs(e)} placeholder='write your password'/>
                <label>Repeat Password</label>
                <input name='repeatPassword' type='password' onChange={(e) => handleSetInputs(e)} placeholder='write your password'/>
                <button onClick={(e) => handleCreateUser(e)}>Register</button>
            </form>
        </div>
    )
};

export default SessionRegister;
