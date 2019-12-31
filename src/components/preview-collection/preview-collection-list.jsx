import React from 'react'

import PreviewCollection from "./preview-collection.component"

export default function PreviewList({title,items }) {
    return (
        <div>
            {items.map(({id, name})=>(<PreviewCollection key = {id} name = {name} title = {title}/>))}
        </div>
    )
}
