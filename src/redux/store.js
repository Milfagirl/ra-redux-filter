import { createStore, combineReducers } from 'redux'
import serviceAdd from './reducers/serviceAdd'
import serviceList from './reducers/serviceList'
import serviceFilter from './reducers/serviceFilter';
import serviceFilterList from './reducers/serviceFilterList'

const reducer = combineReducers({
    serviceAdd,
    serviceList,
    serviceFilter,
    serviceFilterList
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store