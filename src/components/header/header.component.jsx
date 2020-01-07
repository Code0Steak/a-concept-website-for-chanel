import React from 'react'

import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import "./header.styles.scss"

import {auth} from "../../firebase/firebase.utils"

import state from '../../redux/root-reducer'

import CartIcon from '../cart-icon/cart-icon.component'

import Cart from '../cart/cart-component'


const Header = ({currentUser, hidden}) => {
    return (
        <div className = "header">
            <Link to = "/" className="logo-container"><h1>CHANEL</h1></Link>
            <div className="options">
                <Link to = "/Shop" className = "shop">Shop</Link>
                <Link to = "/Contact" className = "shop">Contact</Link>
                {currentUser ? <div className="option" onClick={()=>auth.signOut()}>Sign Out</div> : <Link className="option" to = "/SignIn">SignIn</Link>}
                 <CartIcon />
            </div>
            {hidden ? null : <Cart />}
        </div>
    )
}

const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
    currentUser, hidden
})

export default connect(mapStateToProps)(Header);
