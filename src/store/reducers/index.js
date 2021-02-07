import { combineReducers } from 'redux'

import music from './reducerMusic'
import cds from './reducerShopCart'

export default combineReducers({
    //  Nosso reducer é colocado dentro de um objeto
  
    cds,
    music, 
})