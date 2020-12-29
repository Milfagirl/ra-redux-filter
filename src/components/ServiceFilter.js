import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {changeServiceFieldFilter,  filterService, filterCopyState} from '../redux/actionCreator'

export default function ServiceFilter() {
    const item = useSelector(state => state.serviceFilter) //subscribe
    const dispatch = useDispatch()
    const state = useSelector(state => state.serviceList)
    
    

    const handleChange = (event) => {
        dispatch(filterCopyState(state))
        const { name, value } = event.target
        value ? dispatch(changeServiceFieldFilter('filterFlag', true)) : dispatch(changeServiceFieldFilter('filterFlag', false))
        
        dispatch(changeServiceFieldFilter(name, value))
        dispatch(filterService(value))
    }

    return (
        <div className="mb-3">
                <input type="text" className="form-control" name='name' onChange={handleChange} value={item.name} />
        </div>
    )
}