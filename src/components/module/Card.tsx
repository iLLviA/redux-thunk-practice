import * as React from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
    display: inline-block;
    border-radius:　5px;
`

const Img = styled.img`
    width: 150px;
`;


const test = () => {
    return (
        <Wrapper>
            <Img src={"https://placehold.jp/150x150.png"}/>
        </Wrapper>
    )
}

export default test