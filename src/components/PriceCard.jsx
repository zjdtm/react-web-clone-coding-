import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
`
const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color : crimson;
  background-color: white;
  border-radius: 20px;
`
const List = styled.ul`
  list-style: none;
`
const ListItem = styled.li`
  margin: 30px 0;
`
const Button = styled.button`
  border: none;
  background-color: darkblue;
  color : white;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
`

const PriceCard = ({price, type}) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
        <Type>{type}</Type>
        <List>
          <ListItem>200 Hard-Crafted Templates</ListItem>
          <ListItem>Exclusive Suppport</ListItem>
          <ListItem>50+ PreBuilt Websites</ListItem>
          <ListItem>Premium Plugins</ListItem>{" "}
        </List>
        <Button>Join Now</Button>
      
    </Container>
  )
}

export default PriceCard