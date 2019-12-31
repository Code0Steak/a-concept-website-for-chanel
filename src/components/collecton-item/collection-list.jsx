import React from 'react'

import CollectionItem from "./collection-item.component"

import "./collection-list.style.scss"

export default function CollectionList({title,items }) {
    return (
        <div>
           <div><h1>{title}</h1></div> 
           <div> {items.map(({id, name,imageUrl, price})=>(<CollectionItem id = {id} name = {name} price = {price} imageUrl = {imageUrl}/>))}</div>
        </div>
    )
}
