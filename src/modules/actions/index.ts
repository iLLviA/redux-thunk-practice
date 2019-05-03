import { getData } from './api'
import { setPlace, getLocation } from './place'

export const actionCreator = {
    api: {
        getData
    },
    place: {
        setPlace,
        getLocation
    }
}