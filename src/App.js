import React from 'react'
import { Provider } from "react-redux"
import store from './store'

import Video from './components/Video'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import ShopCart from './components/ShopCart'

import './style.css'

const App = () => {
  return (
    <div>
      <Provider store={ store }>         
           
           <Feed />
           <ShopCart />
           <Video />
           <Sidebar />
      </Provider>
    </div>
  )
}

export default App
