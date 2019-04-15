import * as React from 'react'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import HotelsTable from '../../componetns/Hotels/HotelsTable'
import { RootState } from '../../modules/index'

// const mapDispatchToProps = () => {
//     return {

//     }
// }

const mapStateToProps = (state:RootState) => {
    return {
        hotels: state.hotel.hotels
    }
}

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(HotelsTable)