import React, { Component } from 'react'
import FormInput from "../form-component/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils"
import "./sign-up.styles.scss"

export class SignUp extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handelSubmit = async event => {
        event.preventDefault();

        const {name, email, password, confirmPassword} = this.state;

        if(password != confirmPassword){
            alert("Passwords don't match!");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
           await createUserProfileDocument(user,{name});
           //clear form
           this.setState({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
           })
        }catch(error){
            console.error(error);
        }
    }

    handelChange = event => {
        const {name, value} = event.target;
        this.setState({[name] : value});
    }

    render() {
        const {name,email,password,confirmPassword } = this.state;
        return (
            <div className = "sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign Up with Email and Password</span>
                <form onSubmit = {this.handelSubmit} className="sign-up-form">
                    <FormInput 
                        type = "text" name = "displayName" value = {name} onChange = {this.handelChange} label = 'Display Name'
                    ></FormInput>
                    <FormInput 
                        type = "email" name = "email" value = {email} onChange = {this.handelChange} label = 'Email' required
                    ></FormInput>
                    <FormInput 
                        type = "password" name = "password" value = {password} onChange = {this.handelChange} label = 'Password' required
                    ></FormInput>
                    <FormInput 
                        type = "password" name = "confirmPassword" value = {confirmPassword} onChange = {this.handelChange} label = 'Confirm Password' required
                    ></FormInput>
                    <CustomButton type = "submit" onSubmit = {this.handelSubmit}>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
