import * as React from 'react'
import styled from 'styled-components'

type Props = {
    img: string;
    name: string;
    url: string;
    price: number;
    review: number;
    reviewCount: number;
    distance: number;
    address1: string;
    address2: string;
}

const HotelItem = (props: Props) => {
    const { img, name, url, price, review, reviewCount,distance,address1,address2 } = props
    
    return (
       <Wrapper>
           <Img src={img}/>
            <Flex>
                <Item>
                    <BorderBox>
                        <Tittle>{name}</Tittle>
                    </BorderBox>
                    <BorderBox>
                        {address1+address2}
                    </BorderBox>
                </Item>
                <RightItem>
                    <Text>
                        {price}
                    </Text>
                    <Text>
                        評価:{review}
                    </Text>
                    <Text>
                        {reviewCount}件
                    </Text>
                    <Text>
                        距離{distance}
                    </Text>
                </RightItem>
            </Flex>
       </Wrapper>
    )
}

const Img = styled.img`
    width:230px;
    height:230px;
    display: block;
`

const Wrapper = styled.div`
    display:flex;
    margin: 3px;
    width: 1010px;
`
const BorderBox = styled.div`
    border-bottom: 1px solid #e6e6e6;
    padding: 10px;
`

const Flex = styled.div`
    display: flex
    padding:5px;
    width:100%;
`

const Item = styled.div`
    width:75%
`

const Tittle = styled.h1`
    font-size: 1.5rem;
    margin: 0;
`
const RightItem = styled.div`
    width: 25%;
    text-align: center;
`
const Text = styled.p`
    margin: 3px;
`


export default HotelItem