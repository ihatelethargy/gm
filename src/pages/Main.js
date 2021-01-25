import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import MainBody from '../components/MainBody'

function Main() {
  return (
    <>
      <Route component={Header} />
      <Route component={MainBody} />
    </>
  )
}

export default Main
