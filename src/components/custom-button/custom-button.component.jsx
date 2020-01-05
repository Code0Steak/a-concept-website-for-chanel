import React from 'react'

import "./custom-button.styles.scss"

export default function CustomButton({fun,children}) {
    return (
    <button className = "custom-button" onClick = {fun}>{children}</button>
    )
}
