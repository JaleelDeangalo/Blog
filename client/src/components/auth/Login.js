import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signIn} from "../routes/clientRoutes"


const Login = () => {


    const [formData, setFormData] = useState({
        email:"",
        password: "",
        error: "",
        success: false
    });

    const {email, password, error, success} = formData;


    const change = (email) = (e) => {
            setFormData({...formData, error: false, [email]: e.target.value});
    };


    const submit = (e) => {
        e.preventDefault();
        setFormData({...formData, error:false})
        signIn({email, password})
        .then(data => {
            if(data.error){
            setFormData({...formData, error: data.error, success:false});
            }else{
                setFormData({...formData, email:"", password:"", error:"", success:true});
            }
        }).catch(error => console.log(error));
    }

return(
<>

</>
);
};




export default Login;