import React from "react"

import "./sign-in.styles.scss"

import CustomButton from "../custom-button/custom-button.component"

import {signInWithGoogle} from "../../firebase/firebase.utils"

class SignIn extends React.Component{

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <form>
                    <input type = "text" placeholder = "email"></input>
                    <input type = "password" placeholder = "password"></input>
                    <CustomButton>Sign In</CustomButton>
                    <CustomButton onClick = {signInWithGoogle}>Sign In With Google</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn;