import * as actions from '../actions'

const app = (
  state = {
    loading: true,
    charactersList: []
  },
  action
) => {
  switch(action.type){
    case actions.CHARACTERS_GET:
      return {
        ...state,
        loading: false,
        charactersList: state.charactersList
      }
    case actions.INIT_ERROR:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default app
