import React from 'react'

import "./collection-preview.styles.scss"

export default function PreviewCollection({name,title}) {
    return (
        <div className = 'collection-preview'>
<h1 className="title">{title}</h1>
    <div className="preview">{name}</div>
        </div>
    )
}
