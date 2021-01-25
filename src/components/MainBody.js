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
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
          <img src={four} alt="" />
          {/* <img src={six} alt="" /> */}
        </BodyGridWrapper>
      </BodyWrapper>
    </>
  )
}

export default MainBody

const BodyWrapper = styled.div`
  padding-top: 10vh;
  width: 100%;
  height: auto;
  background-color: #f5f4f4;
`
const BodyGridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7rem;
  /* border: 1px solid red; */
  span:nth-child(2n + 1) {
    display: block;
    color: red;
  }
  img {
    width: 60rem;
    justify-self: center;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
      transition: all 0.3s ease-in-out;
    }
  }
`
