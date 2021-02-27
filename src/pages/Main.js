import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import Landing from '../components/Landing'
import MainBody from '../components/MainBody'
import Profile from '../components/Profile'
import BlankTop from '../components/BlankTop'
import WhitePage from '../components/WhitePage'
import BlackPage from '../components/BlackPage'

function Main() {
  return (
    <>
      <Route component={Header} />
      <Route component={Landing} path="/" exact />
      {/* <BlankTop DesktopMargin="5" TabletMargin="5" MobileMargin="5" /> */}
      <Route component={MainBody} path="/main" exact />
      <Route component={Profile} path="/profile" exact />
      <Route component={BlackPage} path="/main/1" exact />
      <Route component={WhitePage} path="/main/2" exact />
    </>
  )
}

export default Main
