import React, { Fragment } from 'react';
import {PropTypes} from 'prop-types';
function MyComponent({props01, props02}) {
  return (
    <Fragment>
      <h2>Property Validation</h2>
      <span>props01: {props01 ? props01 : '--- not set ---'}</span>
      <br/>
      <span>props02: {props02 ? props02 : '--- not set ---'}</span>
      <br/>
    </Fragment>
  )
}
/** Property type and Required */
MyComponent.propTypes = {
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired
}

/** Property default value */
MyComponent.defaultProps = {
    props01:'기본값'
}

export default MyComponent;