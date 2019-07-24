import React from 'react';
import { useStateValue } from '../Context';

const EndpointInput = () => {
  // just uncomment when you want you start using Menu!
  const [{ greeting }, dispatch] = useStateValue();


  return (
    <div>
      <h2>inside EndpointInput</h2>
      <h3>
        {greeting}
      </h3>
    </div>
  )
}


export default EndpointInput;