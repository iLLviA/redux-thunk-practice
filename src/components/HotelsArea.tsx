import * as React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../modules'
import Card from './module/Card'
import HotelItem from './HotelItem'
import styled from 'styled-components'

type StateProps = {
    error? :string
    data: {
        [key:string]: any
    }[]
}

type Prop = StateProps

const Wrapper = styled.div`
    display:flex;
    justify-content:cemter;
`

const Ul = styled.ul`
    padding: 0;
`

const HotelsArea = (props: Prop) => {
    const {error, data} = props
    data.map(item => console.log(item))
    return (
        <Wrapper>
            {
                error === null ? (
                    <Ul>
                        {
                           data.map( hotel => {
                               return (
                                   <Card key={hotel.id}>
                                        <HotelItem 
                                            name={hotel.name} 
                                            url={hotel.url} 
                                            img={hotel.roomImageUrl ? hotel.roomImageUrl : "https://placehold.jp/230x230.png"}
                                            review={hotel.reviewAverage}
                                            reviewCount={hotel.reviewCount}
                                            price={hotel.price}
                                            address1={hotel.address1}
                                            address2={hotel.address2}
                                            distance={hotel.distance}
                                        />
                                    </Card>
                               )
                            })   
                        }
                    </Ul>
                ) : (
                    <span>{error}</span>
                )
            }
        </Wrapper>
    )
}

const mapStateToProps = (state:RootState):StateProps => ({
    error: state.api.error,
    data: state.api.data
})




export default connect(
    mapStateToProps
)(HotelsArea)

