import React from 'react'
import styled from 'styled-components'
import Search from '../img/search.png'

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);
`

const Image = styled.img`
  width: 20px;

`

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
`

const MinCard = () => {
  return (
    <Container>
        <Image src={Search}/>
        <Text>
          Lorem ipsum dolor, sit amet consectetur
        </Text>
    </Container>
  )
}

export default MinCard