import * as React from 'react'
import Form from '../components/Form'
import HotelArea from '../components/HotelsArea'
import styled from 'styled-components'
// import Map from '../components/Map'
// import Modal from '../components/module/Modal'

const HotelSearch = () => {

    return (
        <Wrapper>
            <h1>ホテル検索</h1>
            <Form />
            <p>例：大阪、東京タワー、大阪城 etc...</p>
            <HotelArea />
            {/* <Modal>
                <Map /> 
            </Modal> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 20px;
`

export default HotelSearch