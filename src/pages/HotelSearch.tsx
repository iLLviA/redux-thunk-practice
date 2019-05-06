import * as React from 'react'
import Form from '../components/Form'
import HotelArea from '../components/HotelsArea'
import styled from 'styled-components'

const HotelSearch = () => {

    return (
        <Wrapper>
            <h1>ホテル検索</h1>
            <Form />
            <HotelArea />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 20px;
`

export default HotelSearch