import * as React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../modules'

type StateProps = {
    error? :string
    data: {
        [key:string]:string
    }[]
}

type Prop = StateProps

const HotelsArea = (props: Prop) => {
    const {error, data} = props
    data.map(item => console.log(item))
    return (
        <div>
            {
                error === null ? (
                    <ul>
                        {
                           data.map( hotel => {
                               return (
                                    <li key={hotel.id}>{hotel.name}</li>
                               )
                            })   
                        }
                    </ul>
                ) : (
                    <span>{error}</span>
                )
            }
        </div>
    )
}

const mapStateToProps = (state:RootState):StateProps => ({
    error: state.api.error,
    data: state.api.data
})


export default connect(
    mapStateToProps
)(HotelsArea)