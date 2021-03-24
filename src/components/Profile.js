import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import ProfileImg from '../img/profileImg.jpeg'
import BlankTop from './BlankTop'
import { InstagramOutlined } from '@ant-design/icons'

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
          KODAKii
        </span>
      </TopHeader>
      <BodyWrapper>
        <BodyGridWrapper>
          <img src={ProfileImg} alt="" />
          <ContentWrapper>
            <a href="https://www.instagram.com/kodakii.work/">
              <p>
                <InstagramOutlined
                  style={{
                    fontSize: '50px',
                    color: '#000',
                    marginRight: '30px',
                  }}
                />
                Kim Jung Hyun
              </p>
            </a>

            <a href="https://www.instagram.com/kim.gaemi/">
              <p>
                <InstagramOutlined
                  style={{
                    fontSize: '50px',
                    color: '#000',
                    marginRight: '30px',
                  }}
                />
                Kim Gae Mi
              </p>
            </a>
          </ContentWrapper>
        </BodyGridWrapper>
      </BodyWrapper>
    </>
  )
}

export default Profile

const ContentWrapper = styled.div``

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
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  img {
    width: 80%;
    height: auto;
    margin-bottom: 10rem;
    border-radius: 0.8rem;
  }
  a {
    text-decoration: none;
  }
  p {
    color: #000;
    font-size: 5.2rem;
    margin-bottom: 3rem;
  }
`
