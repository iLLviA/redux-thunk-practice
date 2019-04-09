import * as React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../modules'

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

const mapStateToProps = (state:RootState):Prop => {
    return {
        lat: state.hotel.location.lat,
        lng: state.hotel.location.lng,
        address: state.hotel.address
    }
}

export default connect(
   mapStateToProps
)(GeocodeReasult)