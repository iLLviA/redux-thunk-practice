import * as React from 'react'

interface Prop {
    name: string
    url: string
    distance: number
    price: string
    reviewAverage: number
    reviewCount: number
    thumbUrl: string
}

const Hotel = (props: Prop) => {
    return (
        <tr>
            <td><a href={props.url}><img src={props.thumbUrl} alt=""/></a></td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.reviewAverage}</td>
            <td>{props.reviewCount}</td>
            <td>{props.distance}</td>
        </tr>
    )
}

export default Hotel