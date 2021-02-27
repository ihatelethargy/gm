import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import './BlackPage.scss'
import one from '../img/1.png'
import two from '../img/2.png'
import three from '../img/3.jpeg'
import four from '../img/9.png'

function BlackPage() {
  const history = useHistory()
  const imgC = useRef()
  let btn1 = useRef()
  let btn2 = useRef()
  let btn3 = useRef()
  let btn4 = useRef()

  const handleClick1 = e => {
    imgC.current.src = 'https://i.ibb.co/NZPq2L0/desc1.jpg'
  }

  const handleClick2 = e => {
    imgC.current.src = 'https://i.ibb.co/SdWJ81Y/desc2.jpg'
  }

  const handleClick3 = e => {
    imgC.current.src = 'https://i.ibb.co/sJNGZLZ/desc3.jpg'
  }

  const handleClick4 = e => {
    imgC.current.src = 'https://i.ibb.co/ZL8ZHF0/desc4.jpg'
  }

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
          <ImgBlock ref={imgC} />

          <button ref={btn1} onClick={handleClick1}>
            a
          </button>
          <button ref={btn2} onClick={handleClick2}>
            b
          </button>
          <button ref={btn3} onClick={handleClick3}>
            c
          </button>
          <button ref={btn4} onClick={handleClick4}>
            d
          </button>
        </div>

        <div className="imgWrapper">
          <ImgBlock ref={imgC} />

          <button ref={btn1} onClick={handleClick1}>
            a
          </button>
          <button ref={btn2} onClick={handleClick2}>
            b
          </button>
          <button ref={btn3} onClick={handleClick3}>
            c
          </button>
          <button ref={btn4} onClick={handleClick4}>
            d
          </button>
        </div>

        <div className="imgWrapper">
          <ImgBlock ref={imgC} />

          <button ref={btn1} onClick={handleClick1}>
            a
          </button>
          <button ref={btn2} onClick={handleClick2}>
            b
          </button>
          <button ref={btn3} onClick={handleClick3}>
            c
          </button>
          <button ref={btn4} onClick={handleClick4}>
            d
          </button>
        </div>

        <div className="imgWrapper">
          <ImgBlock ref={imgC} />

          <button ref={btn1} onClick={handleClick1}>
            a
          </button>
          <button ref={btn2} onClick={handleClick2}>
            b
          </button>
          <button ref={btn3} onClick={handleClick3}>
            c
          </button>
          <button ref={btn4} onClick={handleClick4}>
            d
          </button>
        </div>
      </BodyWrapper>
    </>
  )
}

const ImgBlock = styled.img.attrs({
  src: 'https://i.ibb.co/NZPq2L0/desc1.jpg',
})`
  display: block;
  width: 90rem;
  margin: auto;
`

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
