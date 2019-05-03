import * as React from 'React'
import { connect } from 'react-redux'
import { actionCreator, RootActions, RootState } from '../modules'
import { ThunkDispatch } from 'redux-thunk'


type DispatchProps = {
    getLocation: () => void
    setPlace: (place:string) => void
}

type Prop = DispatchProps
 
const Form = (props:Prop) => {
    const { setPlace, getLocation } = props
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPlace(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getLocation()
    }

    return (
        <form onSubmit={e => handleSubmit(e)} >
            <input type="text" onChange= {e => handleChange(e)}/>
            <button type="submit">Search</button>
        </form>
    )
}

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = (dispatch:ThunkDispatch<RootState, undefined, RootActions>): DispatchProps => ({
    getLocation: () => dispatch(actionCreator.place.getLocation()),
    setPlace: (place:string) => dispatch(actionCreator.place.setPlace({place}))
    
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)