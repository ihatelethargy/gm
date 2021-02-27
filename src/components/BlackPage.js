import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import './BlackPage.scss'

function BlackPage() {
  const history = useHistory()
  const imgArr = [
    'https://i.ibb.co/sJNGZLZ/desc3.jpg',
    'https://i.ibb.co/NZPq2L0/desc1.jpg',
    'https://i.ibb.co/SdWJ81Y/desc2.jpg',
    'https://i.ibb.co/ZL8ZHF0/desc4.jpg', // one
    'https://i.ibb.co/THmXmP4/21.jpg',
    'https://i.ibb.co/s58qRgC/22.jpg',
    'https://i.ibb.co/vskq68r/23.jpg',
    'https://i.ibb.co/6gJjxnn/24.jpg', // two
    'https://i.ibb.co/QPtMf8q/31.jpg',
    'https://i.ibb.co/K29SVtM/32.jpg',
    'https://i.ibb.co/qWrtZgz/33.jpg',
    'https://i.ibb.co/8dYkhMZ/34.jpg',
  ]

  const [oneImg, setOneImg] = useState('https://i.ibb.co/SdWJ81Y/desc2.jpg')
  const [twoImg, setTwoImg] = useState('https://i.ibb.co/THmXmP4/21.jpg')
  const [threeImg, setThreeImg] = useState('https://i.ibb.co/QPtMf8q/31.jpg')

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
        <div className="imgWrapper">
          <img src={oneImg} alt="" />
          <div className="buttonWrapper">
            <button onClick={() => setOneImg(imgArr[0])}>a</button>
            <button onClick={() => setOneImg(imgArr[1])}>b</button>
            <button onClick={() => setOneImg(imgArr[2])}>c</button>
            <button onClick={() => setOneImg(imgArr[3])}>d</button>
          </div>
        </div>
      </BodyWrapper>

      <BodyWrapper>
        <div className="imgWrapper">
          <img src={twoImg} alt="" />
          <div className="buttonWrapper">
            <button onClick={() => setTwoImg(imgArr[4])}>a</button>
            <button onClick={() => setTwoImg(imgArr[5])}>b</button>
            <button onClick={() => setTwoImg(imgArr[6])}>c</button>
            <button onClick={() => setTwoImg(imgArr[7])}>d</button>
          </div>
        </div>
      </BodyWrapper>

      <BodyWrapper>
        <div className="imgWrapper">
          <img src={threeImg} alt="" />
          <div className="buttonWrapper">
            <button onClick={() => setThreeImg(imgArr[8])}>a</button>
            <button onClick={() => setThreeImg(imgArr[9])}>b</button>
            <button onClick={() => setThreeImg(imgArr[10])}>c</button>
            <button onClick={() => setThreeImg(imgArr[11])}>d</button>
          </div>
        </div>
      </BodyWrapper>
    </>
  )
}

const BodyWrapper = styled.div`
  padding-top: 1vh;
  width: 100%;
  height: auto;
  background-color: #f5f4f4;
`

const TopHeader = styled.div`
  width: 100%;
  height: 15rem;
  cursor: pointer;
  /* border: 1px solid red; */
  background-color: #f5f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 8rem;
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
export default BlackPage
