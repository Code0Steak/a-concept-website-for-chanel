import React from 'react'

import "./collection-item.styles.scss"

import CustomButton from '../custom-button/custom-button.component'

export default function CollectionItem({id, name, price, imageUrl}) {
    return (
        <div className = "collection-item" key = {id}>
            <div className="image" style = {{backgroundImage: `url(${imageUrl})`}} />
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
          <CustomButton >ADD TO CART</CustomButton>
        </div>
    )
}
