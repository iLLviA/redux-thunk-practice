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
                        {price}/一泊
                    </Text>
                    <Text>
                        評価:{review}
                    </Text>
                    <Text>
                        レビュー件数:{reviewCount}件
                    </Text>
                    <Text>
                        距離:{distance}m
                    </Text>
                </RightItem>
            </Flex>
       </Wrapper>
    )
}

const Img = styled.img`
    width:220px;
    height:200px;
    display: block;
`

const Wrapper = styled.div`
    display:flex;
    margin: 3px;
    width: 1010px;
    padding:5px;
`
const BorderBox = styled.div`
    border-bottom: 1px solid #e6e6e6;
    padding: 10px;
`

const Flex = styled.div`
    display: flex;
    width: 100%;
`
const FlexRightItem = styled.div`
    display: flex;
    text-align:center;
`

const Item = styled.div`
    width:75%;
    text-align:left;
`

const Tittle = styled.h1`
    font-size: 1.5rem;
    margin: 0;
`
const RightItem = styled.div`
    padding-top:10px;
    text-align: center;
    width:25%;
`
const Text = styled.p`
    margin: 3px;
`


export default HotelItem