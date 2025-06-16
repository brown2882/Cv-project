import '../style/login.scss';
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState } from 'react';


export  function Login () {

    // const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [sureName, setsureName] = useState("")

    const  handleSumbit = (e) => {
        e.preventDefault();
        navigate("/header" , {state: {name , sureName}});
    }



 const onSubmit = (data) => {
        
            navigate('/header')
        
    }


    return(
        <div className="loginDiv">
            <div className='loginDivForm'>
                <form onSubmit={handleSumbit}>
                    <input 
                        type="text" 
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /> 
                    <input 
                        type="text" 
                        placeholder="surname"
                        value={sureName}
                        onChange={(e) => setsureName(e.target.value)}
                        /> 
                    <button className='btn' type='sumbit' onClick={onSubmit}>Send</button>
                </form>
            </div>
        </div>
    )
}