import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import Landing from '../components/Landing'
import MainBody from '../components/MainBody'
import Profile from '../components/Profile'
import BlankTop from '../components/BlankTop'

function Main() {
  return (
    <>
      <Route component={Header} />

      <Route component={Landing} path="/" exact />
      {/* <BlankTop DesktopMargin="5" TabletMargin="5" MobileMargin="5" /> */}
      <Route component={MainBody} path="/main" exact />
      <Route component={Profile} path="/profile" exact />
    </>
  )
}

export default Main
