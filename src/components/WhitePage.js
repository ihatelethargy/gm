import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import HeaderPart from './HeaderPart'
import './WhitePage.scss'

function WhitePage() {
  const history = useHistory()
  const imgArr = [
    'https://i.ibb.co/p35yX21/51.png',
    'https://i.ibb.co/1RkBMCM/52.png',
    'https://i.ibb.co/gMmBq9m/53.png',
    'https://i.ibb.co/0Q7NfzD/54.png', // one
    'https://i.ibb.co/Pm4TFf0/61.jpg',
    'https://i.ibb.co/nB7Ld5j/62.jpg',
    'https://i.ibb.co/nrL4n0m/63.jpg',
    'https://i.ibb.co/PgpT0Kb/64.jpg', // two
    'https://i.ibb.co/9vFDr7h/71.png',
    'https://i.ibb.co/C0WSWvt/72.png',
    'https://i.ibb.co/7XMWd6n/73.png',
    'https://i.ibb.co/f8FhXHN/74.png', // three
    'https://i.ibb.co/k2FRPms/81.jpg',
    'https://i.ibb.co/HzXTpTM/82.jpg',
    'https://i.ibb.co/7jtNMPV/83.jpg',
    'https://i.ibb.co/SVcnVv5/84.jpg', // four
    'https://i.ibb.co/6R0248k/91.jpg',
    'https://i.ibb.co/4TwH8Ph/92.jpg',
    'https://i.ibb.co/Dznz6S2/93.jpg',
    'https://i.ibb.co/60xPty1/94.jpg', // five
  ]

  const [oneImg, setOneImg] = useState('https://i.ibb.co/p35yX21/51.png')
  const [twoImg, setTwoImg] = useState('https://i.ibb.co/Pm4TFf0/61.jpg')
  const [threeImg, setThreeImg] = useState('https://i.ibb.co/9vFDr7h/71.png')
  const [fourImg, setFourImg] = useState('https://i.ibb.co/k2FRPms/81.jpg')
  const [fiveImg, setFiveImg] = useState('https://i.ibb.co/6R0248k/91.jpg')

  return (
    <>
      <HeaderPart />
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
        <div className="imgWrapper">
          <img src={oneImg} alt="" />
          <div className="buttonWrapper">
            <button onClick={() => setOneImg(imgArr[0])}></button>
            <button onClick={() => setOneImg(imgArr[1])}></button>
            <button onClick={() => setOneImg(imgArr[2])}></button>
            <button onClick={() => setOneImg(imgArr[3])}></button>
          </div>
        </div>
      </BodyWrapper>

      <BodyWrapper>
        <div className="imgWrapper">
          <img src={twoImg} alt="" />
          <div className="buttonWrapper">
            <button onClick={() => setTwoImg(imgArr[4])}></button>
            <button onClick={() => setTwoImg(imgArr[5])}></button>
            <button onClick={() => setTwoImg(imgArr[6])}></button>
            <button onClick={() => setTwoImg(imgArr[7])}></button>
          </div>
        </div>
      </BodyWrapper>

      <BodyWrapper>
        <div className="imgWrapper">
          <img src={threeImg} alt="" />
          <div className="buttonWrapper">
            <button onClick={() => setThreeImg(imgArr[8])}></button>
            <button onClick={() => setThreeImg(imgArr[9])}></button>
            <button onClick={() => setThreeImg(imgArr[10])}></button>
            <button onClick={() => setThreeImg(imgArr[11])}></button>
          </div>
        </div>
      </BodyWrapper>

      <BodyWrapper>
        <div className="imgWrapper">
          <img src={fourImg} alt="" />
          <div className="buttonWrapper">
            <button onClick={() => setFourImg(imgArr[12])}></button>
            <button onClick={() => setFourImg(imgArr[13])}></button>
            <button onClick={() => setFourImg(imgArr[14])}></button>
            <button onClick={() => setFourImg(imgArr[15])}></button>
          </div>
        </div>
      </BodyWrapper>

      <BodyWrapper>
        <div className="imgWrapper">
          <img src={fiveImg} alt="" />
          <div className="buttonWrapper">
            <button onClick={() => setFiveImg(imgArr[16])}></button>
            <button onClick={() => setFiveImg(imgArr[17])}></button>
            <button onClick={() => setFiveImg(imgArr[18])}></button>
            <button onClick={() => setFiveImg(imgArr[19])}></button>
          </div>
        </div>
      </BodyWrapper>
    </>
  )
}

const BodyWrapper = styled.div`
  padding-top: 0vh;
  width: 100%;
  height: auto;
  background-color: #f5f4f4;
  /* border: 1px solid red; */
`

const TopHeader = styled.div`
  padding-top: 5rem;
  width: 100%;
  height: 15rem;
  background-color: #f5f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
  span {
    font-family: Helvetica;
    font-size: 8.2rem;
    font-weight: 400;
    font-stretch: expanded;
  }

  &:hover {
    color: gray;
  }
`
export default WhitePage
