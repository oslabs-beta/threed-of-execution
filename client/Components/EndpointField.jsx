import React, { useState } from 'react';
import { useStateValue } from '../Context';

const EndpointField = () => {
  const [{ endpoint, url }, dispatch] = useStateValue();
  // can be streamlined to not use local state, and maybe
  // one less value from context
  const [urlInput, setUrlInput] = useState('');

  const handleSubmit = () => {
    event.preventDefault();
    dispatch({
      type: 'submitEndpoint',
      submitEndpoint: urlInput,
    });
  };

  return (
    <div id="endpoint-field">
      <form onSubmit={() => handleSubmit()}>
        <textarea onChange={(e) => {
          // console.log('new value from text area: ', e.target.value);
          // have to assign value from text area instead of local state, since state setter
          // and dispatch are async
          const newUrl = e.target.value;
          setUrlInput(newUrl);
          // console.log('url input inside onChange in EI: ', urlInput);
          dispatch({
            type: 'addURL',
            addURL: newUrl,
          });
        }}
        />
        <input type="submit" value="Submit" className="submit-button"/>
      </form>
    </div>
  );
};


export default EndpointField;
