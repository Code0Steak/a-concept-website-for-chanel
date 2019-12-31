import React from 'react'

export default function FormInput({handleChange, label, ...otherProps}) {
    return (
        <div className = "group">
            <input type="text" className ="form-input" onchange = {handelChange} {...otherProps} />

            {
                label ? 
                (<label className = {`${ otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>) : null
            }

        </div>
    )
}
