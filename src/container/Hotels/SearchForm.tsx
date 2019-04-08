import * as React from 'react'
import SearchForm from '../../componetns/Hotels/SearchForm'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { actionCreator } from '../../modules/'
import { geocode } from '../../Domain/ Geocoder'
import { rootState } from '../../modules/hotels'

const mapDispatchToProps = (dispatch:Dispatch<Action>,getState:any) => {
    
    return {
        setPlace: (place:string) => dispatch(actionCreator.hotel.setPlace({place})),
        searchPlace: (place:string) => { 
            console.log(getState)
            geocode(place).then(
                ({status,location,address}) => {
                    const {lat,lng} = location
                    switch(status){
                        case 'OK' : {
                            dispatch(actionCreator.hotel.searchPlace({lat,lng,address}))
                            break;
                        }
                        case 'ZERO_RESULTS': {
                            dispatch(actionCreator.hotel.errorMassage({error:'結果が見つかりませんでした。'}))
                            break;
                        }
                        default : dispatch(actionCreator.hotel.errorMassage({error:'エラーが発生しました。'}))
                    }
                }
            
            )
        }   
    }
}

const mapStateToProps = (state:rootState) => {
    return {
        place: state.place
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm)