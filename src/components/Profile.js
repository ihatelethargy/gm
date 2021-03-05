import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import ProfileImg from '../img/profileimg.png'
import BlankTop from './BlankTop'

function Profile() {
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
          {/* <BlankTop DesktopMargin="0" TabletMargin="5" MobileMargin="5" /> */}
          {/* <img src={ProfileImg} alt="" /> */}
          asdff
        </BodyGridWrapper>
      </BodyWrapper>
    </>
  )
}

export default Profile

const TopHeader = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #f5f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: crosshair;
  span {
    font-family: Helvetica;
    font-size: 8.2rem;
    font-weight: 800;
    font-stretch: expanded;
  }

  &:hover {
    color: gray;
  }
`

const BodyWrapper = styled.div`
  padding-top: 10vh;
  width: 100%;
  height: auto;
  background-color: #f5f4f4;
`
const BodyGridWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 5rem;
  /* border: 1px solid red; */
  img {
    width: 35rem;
    height: 35rem;
    border-radius: 50%;
  }
`
