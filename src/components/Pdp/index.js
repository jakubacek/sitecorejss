import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Pdp = (props) => (
  <div>
    <p>Pdp Component</p>
    <Text field={props.fields['Product Name']} />
  </div>
);

export default Pdp;
