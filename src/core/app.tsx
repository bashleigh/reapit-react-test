import * as React from 'react'
import Router from './router'
import { injectSwitchModeToWindow } from '@reapit/elements'
import '../styles/index.css'

injectSwitchModeToWindow()

const App = () => {
  return (
    <>
      <Router />
    </>
  )
}

export default App
