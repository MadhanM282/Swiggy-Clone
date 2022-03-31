import {createStore,combineReducers} from'redux'
import { CartReducer } from './cart/cartReducer'

const Root = combineReducers({
    cart:CartReducer
})

export const STORE = createStore(Root,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())