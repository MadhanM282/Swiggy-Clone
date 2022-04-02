import {createStore,combineReducers} from'redux'
import { StatReducer } from './cart/cartReducer'
import { HomeReducer } from './Home/HomeReducer'
import { CartReducer } from './List/cartReducer'

const Root = combineReducers({
    Stat:StatReducer,
    home:HomeReducer,
    cart:CartReducer
})

export const STORE = createStore(Root,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())