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
        <HeaderWrapper>
          <span className="topdakii">Sculptor Kimgaemi X Coder Prokujiira</span>
          <span
            className="kodakii"
            onClick={() => {
              history.push('/')
            }}
          >
            KODAKii
          </span>
          <span className="bottomdakii">Chimpanzees work with boogers </span>
        </HeaderWrapper>
      </TopHeader>
      <BodyWrapper>
        <BodyGridWrapper>
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

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .topdakii {
    font-size: 2.4rem;
  }

  .bottomdakii {
    font-size: 5.2rem;
    /* border: 3px solid red; */
  }
`

const TopHeader = styled.div`
  padding-top: 2rem;
  width: 100%;
  height: 40rem;
  border-bottom: 1px solid black;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  .kodakii {
    /* font-family: Helvetica; */
    font-size: 18.2rem;
    font-weight: 300;
    font-stretch: expanded;
    font-family: Helvetica;
  }
  .bright {
    color: #ea8685;
  }
  &:hover {
    color: gray;
  }
`

const ImgContainer = styled.div`
  margin-top: 2rem;
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
