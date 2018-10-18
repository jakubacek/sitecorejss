import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { DateField } from '@sitecore-jss/sitecore-jss-react';
import { RichText } from '@sitecore-jss/sitecore-jss-react';

const FirstComponent = (props) => (
  <div>
    <p>FirstComponent Component</p>
    <h2><Text field={props.fields.heading} /> </h2>
    <DateField field={props.fields.created} />
    <RichText field={props.fields.article} />
  </div>
);

export default FirstComponent;
