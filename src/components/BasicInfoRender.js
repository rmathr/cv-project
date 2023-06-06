import React, { Component } from 'react';
import RenderField from './RenderField';

class BasicInfoRender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RenderField props={this.props} />;
  }
}

export default BasicInfoRender;
