import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { init } from '../actions';
import SuperHeroCard from '../components/SuperHeroCard';

const mapStateToProps = (state) => {
  return {
    loading: state.app.loading,
    charactersList: state.app.charactersList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      dispatch(init());
    }
  }
}

class App extends React.Component {
  componentDidMount() { // This is where async actions must live
    this.props.init();
  }

  render() {
    const { loading, charactersList } = this.props;   // Be carefull we destructure here (ES6)
    let list;
    if(loading == false && !charactersList){
      list = (<b>The app encountered an error, sorry.</b>)
    } else {
      let listItems = _.map(charactersList, (character, k) =>{
        return (
          <SuperHeroCard key={k} superHero={character} />
          )
      })
      list = (
        <ul style={{
          listStyle: 'none'
        }}>
          { listItems }
        </ul>)
    }

    return (
      <div>
        <h2>{loading ? "The App is currently loading" : "Select your Hero"}</h2>
        { list }
      </div>
    )
  }
}

App.propTypes = {
  loading: React.PropTypes.bool,
  charactersList: React.PropTypes.array,
  init: React.PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
