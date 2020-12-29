import { CHANGE_SERVICE_FIELD_FILTER } from '../actionCreator'

const initialState = {
  name: '',
  filterFlag: false
};

export default function serviceFilter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD_FILTER:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
}