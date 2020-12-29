import { useSelector } from 'react-redux';
import { FILTER_SERVICE, FILTER_COPY_STATE } from '../actionCreator'

const initialState = []

export default function serviceFilterList(state = initialState, action) {
  
    
  switch (action.type) {
    
    case FILTER_SERVICE:
      
      const {value} = action.payload
     
      console.log(state.filter(service => service.name.includes(value)))
      if (value) return state.filter(service => service.name.includes(value))
    case FILTER_COPY_STATE:
    
      return action.payload.value


    default:
      return state;
  }
}