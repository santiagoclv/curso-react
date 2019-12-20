import React, { Component } from 'react'
import ContextProfile from './ContextProfile';

import ContextProvider from './ContextProvider';

class ContextApp extends Component {

  render() {
    return (
      <ContextProvider>
            <h1>Welcome to my app</h1>
            <ContextProfile />
      </ContextProvider>
    )
  }
}

export default ContextApp