import * as React from 'react'
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { RootState } from '../modules'

type Props = {
    location: {
        lat: number;
        lng: number;
    }
}

const InnerMap = withScriptjs(withGoogleMap((props:Props) => {
    return (
    <GoogleMap
        defaultZoom = {12}
        defaultCenter= {props.location}
        center = {props.location}
    >
    </GoogleMap>
    )
}
))

const Map = (props:Props) => {

    return (
    <InnerMap 
        location ={ props.location } 
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyArdDInOBYawxpt97Jp7z1EjrtaLpgzv3Q&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: `350px` }} />}
        mapElement={<div style={{ height: `100%` }} />} 
    />
    )
}

const mapStateToProps = (state:RootState):Props => {
    return {
        location: state.place.location
    }
}


export default connect(
    mapStateToProps
)(Map)