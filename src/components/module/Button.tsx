import * as React from 'react'
import styled from 'styled-components'

type Props = {
    children: React.ReactNode
    color?: string
    backgroud?: string
}

const StyledButton = styled.button`
    color:${(props:Props) => props.color ? props.color : "black"};
    background: ${(props:Props) => props.backgroud ? props.backgroud : "#fff"};
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;

`
const Button:React.FC<Props> = (props:Props) => {
    const { children, color, backgroud } = props
    return (
        <StyledButton color={color} backgroud={ backgroud }>
            { children }
        </StyledButton>
    )
}


export default Button