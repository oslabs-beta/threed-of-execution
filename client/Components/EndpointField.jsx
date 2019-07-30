import React, { useState } from 'react';
import { useStateValue } from '../Context';

const EndpointField = (props) => {
  const [{ endpoint }] = useStateValue();
  // streamlined to not use local state from queryInput component
  const { setNewAPIEndpoint } = props;

  return (
    <article id="endpoint-field">
      <input
        type="text"
        placeholder={`Current endpoint: ${endpoint}`}
        onChange={(e) => {
          // have to assign value from text area instead of local state, since state setter
          // and dispatch are async

          // changing this state refreshes the query output display component
          // this component should be somewhere else or the state should be passed down/stored elsewhere

          const newUrl = e.target.value;
          setNewAPIEndpoint(newUrl);
        }}
      />
    </article>
  );
};


export default EndpointField;
