import * as React from 'react'
import SearchForm from '../../componetns/Hotels/SearchForm'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { actionCreator } from '../../modules/'

interface State {
    place: string
}

const mapDispatchToProps = (dispatch:Dispatch<Action>) => {
    return {
        setPlace: (place:string) => dispatch(actionCreator.hotel.setPlace({place}))
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