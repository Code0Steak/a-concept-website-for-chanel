import React from 'react'

import "./collection-preview.styles.scss"

export default function PreviewCollection({item}) {
    return (
        <div className = 'collection-preview'>
<h1 className="title">{item.title}</h1>
    <div className="preview">{item.name}</div>
        </div>
    )
}
