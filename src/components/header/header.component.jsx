import React from 'react'

import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import "./header.styles.scss"

import {auth} from "../../firebase/firebase.utils"

import state from '../../redux/root-reducer'

const Header = ({currentUser}) => {
    return (
        <div className = "header">
            <Link to = "/" className="logo-container"><h1>CHANEL</h1></Link>
            <div className="options">
                <Link to = "/Shop" className = "shop">Shop</Link>
                <Link to = "/Contact" className = "shop">Contact</Link>
                {currentUser ? <div className="option" onClick={()=>auth.signOut()}>Sign Out</div> : <Link className="option" to = "/SignIn">SignIn</Link>}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
