import * as React from 'react'

interface Prop {
    lat: number
    lng: number
    address: string
}

const GeocodeReasult = (props:Prop) => {
    return (
        <div>
            <p>緯度：{props.lat}</p>
            <p>経度：{props.lng}</p>
            <p>住所：{props.address}</p>
        </div>
    )
}


export default GeocodeReasult