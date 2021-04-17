import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class Spinner extends Component {
  render() {
    return (
      <Loader
        style={{
          textAlign: 'center',
        }}
        className="Loader"
        type="Audio"
        color="rgb(184, 92, 80)"
        height={120}
        width={120}
      />
    );
  }
}

export default Spinner;
