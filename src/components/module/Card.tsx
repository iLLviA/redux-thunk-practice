import * as React from 'react'
import styled from 'styled-components'

const Title = styled.section`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred
`

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip
`

const test = () => {
    return (
        <Wrapper>
            <Title>
                Hello!
            </Title>
        </Wrapper>
        
    )
}

export default test