import * as actions from '../actions'

const app = (
  state = {
    loading: true,
    charactersList: []
  },
  action
) => {
  switch(action.type){
    case actions.INIT:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default app
