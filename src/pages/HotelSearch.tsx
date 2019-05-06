import * as React from 'react'
import Form from '../components/Form'
import HotelArea from '../components/HotelsArea'
import styled from 'styled-components'
import Map from '../components/Map'

const HotelSearch = () => {

    return (
        <Wrapper>
            <h1>ホテル検索</h1>
            <Form />
            <HotelArea />
            {/* <Map /> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 20px;
`

export default HotelSearch