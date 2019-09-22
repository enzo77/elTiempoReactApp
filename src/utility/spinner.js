import React, { Component } from 'react';
import { css } from '@emotion/core';
// First way to import
import { BarLoader } from 'react-spinners';
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <BarLoader
          css={override}
          sizeUnit={"px"}
          size={10}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default Spinner;