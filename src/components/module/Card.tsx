import * as React from 'react'
import styled from 'styled-components'

type Prop = {
    children: React.ReactNode
}

const test = (props: Prop) => {
    
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}



const Wrapper = styled.div`
    display: inline-block;
    border-radius:　5px;
    box-shadow: 0 2px 5px 0px #ccc;
    margin-bottom: 20px;
`

export default test