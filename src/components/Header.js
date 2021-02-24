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
            history.push('/')
          }}
        >
          蟻
        </span>
        <span></span>
      </HeaderWrapper>
    </>
  )
}

export default Header

const HeaderWrapper = styled.div`
  display: flex;
  z-index: 1000;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: transparent;

  span:nth-child(1) {
    font-size: 1.6rem;
    margin-left: 2rem;
  }
  span:nth-child(1):hover {
    cursor: pointer;
    font-size: 1.6rem;
    color: gray;
  }
  span:nth-child(2) {
    font-size: 3.2rem;
    margin-right: 9rem;
  }

  span:nth-child(2):hover {
    cursor: pointer;
    color: gray;
  }
`
