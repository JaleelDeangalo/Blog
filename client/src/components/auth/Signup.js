import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signUp} from "../routes/clientRoutes";





const Signup = () => {

const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    error:"",
    success:false
});

const {name, email, password, error, success} = formData;

const onChange = (name) = (e) => {
    setFormData({...formData, error:false, [name]: e.target.value});
}


const onSubmit = async (e) => {
    e.preventDefault();
    setFormData({...formData, error:false});
    signUp({name,email,password})
    .then(function(data) {
        if(data.error){
            setFormData({...formData, error: data.error, success: false })
        }else{
            setFormData({...formData, name:"", email:"", password:"",error:"", success:true});
        }
    }).catch(error => console.log(error));

}


const showError = () => (
    <div className = "alert alert-danger" style ={{display:error ? "":"none"}}>
        {error}
    </div>
)

const showSuccess = () => (
    <div className = "alert alert-info" style ={{display:success ? "":"none"}}>
        Account Created!
    </div>
)



return (
<>
{showError()}
{showSuccess()}
<br/>
<form>
    <label htmlFor ="name" >Name</label>
    <input type = "text" value = {name} onChange = {onChange("name")} id = "name"/>
    <label htmlFor = "email">Email</label>
    <input type = "email" value = {email} onChange = {onChange("email")} id = "email"/>
    <label htmlFor = "password">Password</label>
    <input type = "email" value = {password} onChange = {onChange("password")} id= "password"/>
    <button  type = "submit" onClick = {onSubmit}>Sign Up</button>
</form>
</>
);

};


export default Signup;