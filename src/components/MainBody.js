import React from 'react'
import styled from 'styled-components'
import one from '../img/1.png'
import two from '../img/2.png'
import three from '../img/3.jpeg'
import four from '../img/4.png'
import six from '../img/6.jpeg'
import seven from '../img/7.jpeg'

function MainBody() {
  return (
    <>
      <BodyWrapper>
        <BodyGridWrapper>
          <ImgContainer>
            <img src={one} alt="" />
            <Overlay>
              <Text>first piece</Text>
            </Overlay>
          </ImgContainer>

          <ImgContainer>
            <img src={two} alt="" />
            <Overlay>
              <Text>seconet section</Text>
            </Overlay>
          </ImgContainer>
        </BodyGridWrapper>
      </BodyWrapper>
    </>
  )
}

export default MainBody

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 45%;
  cursor: pointer;
  /* &:hover {
    opacity: 0.5;
  } */
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #fff;
  &:hover {
    opacity: 0.5;
  }
`
const Text = styled.div`
  color: black;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 100;
`

const BodyWrapper = styled.div`
  padding-top: 10vh;
  width: 100%;
  height: 100vh;
  background-color: #f5f4f4;
`
const BodyGridWrapper = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  /* flex-direction: column; */
  /* @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  } */
  /* gap: 5rem; */
  /* border: 1px solid red; */

  img {
    width: 100%;
    justify-self: center;
    display: block;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
      transition: all 0.3s ease-in-out;
    }
  }
`
