import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import LandingImg from '../img/ladingImgsun.jpeg'
import BlankTop from './BlankTop'

function Landing() {
  const history = useHistory()
  return (
    <>
      <TopHeader>
        <span
          onClick={() => {
            history.push('/')
          }}
        >
          KIMGAEMI
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
            {/* <Overlay></Overlay> */}
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
    font-family: Helvetica;
    font-size: 8.2rem;
    font-weight: 400;
    font-stretch: expanded;
    /* color: white; */
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
`
const Text = styled.div`
  color: black;
  font-size: 80px;
  font-weight: 500;
  position: absolute;
  opacity: 1;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 100;
`

const BodyWrapper = styled.div`
  /* padding-top: 15rem; */
  width: 100%;
  height: 100vh;
  border-top: 1px solid black;
  /* background-color: white; */
  background-color: black;
`
const BodyGridWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    /* padding-top: 10rem; */
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
