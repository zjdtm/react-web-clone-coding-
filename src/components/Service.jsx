import React, { useState } from 'react'
import styled from 'styled-components'
import paper from '../img/paper.png'
import MinCard from './MinCard'
import Play from '../img/play.png'


const Container = styled.div`
  display: flex;
  height: 100%;
`

const Left = styled.div`
  width : 50%;
  position: relative;
`

const Image = styled.img`
  display: ${props => props.open && "none"};
  width: 70%;
  height: 150%;
`
const Iframe = styled.iframe`
  display: ${props => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`

const Right = styled.div`
  width : 50%;
`

const Wrapper = styled.div`
  padding : 50px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  
`

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color : #555;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color : darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;

`

const Service = () => {
  const [open ,setOpen] = useState(false);
  return (
    <Container>
      <Left>
        <Image open={open} src={paper}/>
        <Iframe open={open} width="560" height="315" src="https://www.youtube.com/embed/05BWsYqMiYE" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </Iframe>
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum.
          </Desc>
          <CardContainer>
            <MinCard/>
            <MinCard/>
            <MinCard/>
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play}/>
            How it works
          </Button>
        </Wrapper>
      </Right>
    </Container>
  )
}

export default Service