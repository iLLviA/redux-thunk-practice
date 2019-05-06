import * as React from 'react'
import Form from '../components/Form'
import HotelArea from '../components/HotelsArea'
import styled from 'styled-components'
import Button from '../components/module/Button'

const HotelSearch = () => {

    return (
        <Wrapper>
            <h1>ホテル検索</h1>
            <Form />
            <HotelArea />
            <Button color={"#fff"} backgroud={"green"}>
                mapを見る
            </ Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 20px;
`

export default HotelSearch