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
    'https://i.ibb.co/8dYkhMZ/34.jpg', // three
    'https://i.ibb.co/9VVgJ89/41.jpg',
    'https://i.ibb.co/6rnnN32/42.jpg',
    'https://i.ibb.co/3SfN9wQ/43.jpg',
    'https://i.ibb.co/vV59V3f/44.jpg',
    // four
  ]

  const [oneImg, setOneImg] = useState('https://i.ibb.co/SdWJ81Y/desc2.jpg')
  const [twoImg, setTwoImg] = useState('https://i.ibb.co/THmXmP4/21.jpg')
  const [threeImg, setThreeImg] = useState('https://i.ibb.co/QPtMf8q/31.jpg')
  const [fourImg, setFourImg] = useState('https://i.ibb.co/9VVgJ89/41.jpg')

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
