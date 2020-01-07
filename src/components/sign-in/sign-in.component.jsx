import React from "react"

import "./sign-in.styles.scss"

import CustomButton from "../custom-button/custom-button.component"

import {auth, signInWithGoogle} from "../../firebase/firebase.utils.js"

class SignIn extends React.Component{

    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handelSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""});
        }catch(error){
            console.error(error);
        }
        
    }

    handelChange = event => {
        const {name, value} = event.target;
        this.setState({[name] : value})
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <form>
                    <input type = "text" placeholder = "email" onChange = {this.handelChange}></input>
                    <input type = "password" placeholder = "password" onChange = {this.handelChange}></input>
                    <CustomButton onSubmit = {this.handelSubmit}>Sign In</CustomButton>
                    <CustomButton fun = {signInWithGoogle}>Sign In With Google</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn;