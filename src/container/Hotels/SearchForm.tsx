import * as React from 'react'
import SearchForm from '../../componetns/Hotels/SearchForm'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { actionCreator } from '../../modules/'
import { geocode } from '../../Domain/ Geocoder'

interface State {
    place: string
}

const mapDispatchToProps = (dispatch:Dispatch<Action>) => {
    return {
        setPlace: (place:string) => dispatch(actionCreator.hotel.setPlace({place})),
        searchPlace: () => {}
    }
}

const mapStateToProps = (state:State) => {
    return {
        place: state.place
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm)