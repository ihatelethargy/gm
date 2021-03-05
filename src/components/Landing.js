import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import LandingImg from '../img/ladingImgsun.jpeg'
import BlankTop from './BlankTop'
import Header from './Header'

function Landing() {
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
          {/* <img src={LandingImg} alt="" /> */}ㄴ
          <ImgContainer
            onClick={() => {
              history.push('./main')
            }}
          >
            <img src={LandingImg} alt="" />
          </ImgContainer>
        </BodyGridWrapper>
      </BodyWrapper>
    </>
  )
}

export default Landing

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
    /* font-family: Helvetica; */
    font-size: 18.2rem;
    font-weight: 400;
    font-stretch: expanded;
    font-family: Helvetica;
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
  height: 120rem;
  cursor: pointer;
  border: 1px solid black; // eas ok
`

const BodyWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border-top: 1px solid black;
  background-color: black;
`
const BodyGridWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    justify-self: center;
    display: block;
    cursor: pointer;
  }
`
