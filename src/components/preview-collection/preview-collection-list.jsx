import React from 'react'

import PreviewCollection from "./preview-collection.component"

export default function PreviewList({items }) {
    return (
        <div>
            {items.map((item)=>(<PreviewCollection key = {item.id} item = {item} />))}
        </div>
    )
}
