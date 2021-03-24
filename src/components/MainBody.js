import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import one from '../img/mainparttwo.jpeg'
import two from '../img/firstpart.jpeg'
import Header from './Header'

import { SwapRightOutlined } from '@ant-design/icons'

function MainBody() {
  const history = useHistory()
  return (
    <>
      <Header />
      <TopHeader>
        <span
          onClick={() => {
            history.push('/')
          }}
        >
          KODAKii
        </span>
      </TopHeader>

      <BodyWrapper>
        <BodyGridWrapper>
          <ImgContainer>
            <img src={one} alt="" />
            <Overlay>
              <Text>
                <span
                  onClick={() => {
                    history.push('/main/1')
                  }}
                >
                  SCENE <SwapRightOutlined />
                </span>
              </Text>
            </Overlay>
          </ImgContainer>

          <ImgContainer>
            <img src={two} alt="" />
            <Overlay>
              <Text>
                <span
                  onClick={() => {
                    history.push('/main/2')
                  }}
                >
                  WORK <SwapRightOutlined />
                </span>
              </Text>
            </Overlay>
          </ImgContainer>
        </BodyGridWrapper>
        <SmallDesc>
          <span>Welcom To Kodakii World !</span>
        </SmallDesc>
      </BodyWrapper>
    </>
  )
}

export default MainBody

const SmallDesc = styled.div`
  width: 100%;
  height: 20rem;
  /* border: 1px solid green; */
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-family: Helvetica;
    font-size: 3rem;
    font-weight: 800;
    font-stretch: expanded;
  }
`

const TopHeader = styled.div`
  padding-top: 5rem;
  width: 100%;
  height: 15rem;
  border-bottom: 1px solid black;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  span {
    font-family: Helvetica;
    font-size: 6.2rem;
    font-weight: 400;
    font-stretch: expanded;
  }

  &:hover {
    color: gray;
  }
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 90%;
  margin-bottom: 2rem;
  cursor: pointer;
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
  font-size: 50px;
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
  width: 100%;
  height: 100vh;
  background-color: black;
  border-top: 1px solid black;
`
const BodyGridWrapper = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
