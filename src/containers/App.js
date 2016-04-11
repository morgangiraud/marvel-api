import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    loading: state.app.loading
  }
}

let App = ({loading}) => {  // Be carefull we destructure here (ES6s)
  return (
    <div>
      <div>Hello world, app is currently {loading ? "loading" : "loaded"}</div>
    </div>
  )
}

App.propTypes = {
  loading: React.PropTypes.bool
}

export default connect(mapStateToProps)(App)
