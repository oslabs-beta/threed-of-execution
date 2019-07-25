import React, { Component } from 'react';
import { useStateValue } from '../Context';

const QueryOutput = (props) => {
  // just uncomment when you want you start using Menu!

  const [{ greeting, endpoint, queryVar }, dispatch] = useStateValue();

  console.log('inside of queryoutput definition: ', props);
  // pull props off
  const { loading, error } = props;
  const resultQueryVar = props[queryVar];

  if (loading) {
    return (<h2>inside QueryOutput</h2>);
  }

  if (error) {
    return (<h4>{error.message}</h4>);
  }

  return (
    <div id="query-output">
      <h2>inside QueryOutput</h2>
      <h3>
        {props.data}
      </h3>
    </div>
  );
};


export default QueryOutput;
