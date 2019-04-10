import * as React from 'react'
import SearchForm from '../../componetns/Hotels/SearchForm'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { actionCreator } from '../../modules/'
import { geocode } from '../../Domain/ Geocoder'
import { RootState } from '../../modules/index'
import { SearchHotelByLocation } from '../../Domain/HotelRepository'

const mapDispatchToProps = (dispatch:Dispatch<Action>,getState:any) => {
    
    return {
        setPlace: (place:string) => dispatch(actionCreator.hotel.setPlace({place})),
        searchPlace: (place:string) => { 
            (getState)
            geocode(place).then(
                ({status,location,address}) => {
                    switch(status){
                        case 'OK' : {
                            const {lat,lng} = location
                            dispatch(actionCreator.hotel.searchPlace({lat,lng,address}))
                            return SearchHotelByLocation(location)
                            break;
                        }
                        case 'ZERO_RESULTS': {
                            dispatch(actionCreator.hotel.errorMassage({error:'結果が見つかりませんでした。'}))
                            break;
                        }
                        default : dispatch(actionCreator.hotel.errorMassage({error:'エラーが発生しました。'}))
                    }
                    return []
                }
                
            ).then((hotels:any) => {
                dispatch(actionCreator.hotel.changeHotels({hotels}))
            })
        }
    }
}

const mapStateToProps = (state:RootState) => {
    (state)
    return {
        place:state.hotel.place
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm)