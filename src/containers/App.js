import React from 'react';
import { connect } from 'react-redux';

import { init } from '../actions'

const mapStateToProps = (state) => {
  return {
    loading: state.app.loading,
    charaterList: state.app.charaterList
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
    const { loading } = this.props;   // Be carefull we destructure here (ES6)
    return (
      <div>
        <div>Hello world, app is currently {loading ? "loading" : "loaded"}</div>
      </div>
    )
  }
}

App.propTypes = {
  loading: React.PropTypes.bool,
  init: React.PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
