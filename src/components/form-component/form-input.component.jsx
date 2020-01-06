import React from 'react'

export default function FormInput({handelChange, label, ...otherProps}) {
    return (
        <div className = "group">
            <input type="text" className ="form-input" onChange = {handelChange} {...otherProps} />

            {
                label ? 
                (<label className = {`${ otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>) : null
            }

        </div>
    )
}
