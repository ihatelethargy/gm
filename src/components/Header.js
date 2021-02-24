import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  const history = useHistory()
  return (
    <>
      <HeaderWrapper>
        <span
          onClick={() => {
            history.push('./profile')
          }}
        >
          PROFILE
        </span>

        <span
          onClick={() => {
            history.push('./main')
          }}
        >
          PROJECTS
        </span>
      </HeaderWrapper>
    </>
  )
}

export default Header

const HeaderWrapper = styled.div`
  display: flex;
  z-index: 1000;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: transparent;

  span:nth-child(1) {
    font-size: 3.8rem;
    font-family: Helvetica;
    /* color: #314e52; */
    font-weight: 800;
    /* margin-left: 5rem; */
  }
  span:nth-child(1):hover {
    cursor: pointer;
    font-size: 3.8rem;
    font-family: Helvetica;
    /* color: #314e52; */
  }
  span:nth-child(2) {
    font-size: 3.8rem;
    font-family: Helvetica;
    /* margin-right: 17rem; */
    /* color: #314e52; */
    font-weight: 800;
  }

  span:nth-child(3) {
    font-size: 3.8rem;
    font-family: Helvetica;
    /* margin-right: 17rem; */
    /* color: #314e52; */
  }

  span:nth-child(2):hover {
    cursor: pointer;
    color: gray;
    font-family: Helvetica;
    /* color: #314e52; */
  }
`
