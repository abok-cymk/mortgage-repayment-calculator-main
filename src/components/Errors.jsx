import React from 'react';

const Errors = ({ error }) => {
  return (
    <span className='text-custom-red text-xs font-700'>
      {error}
    </span>
  );
}

export default Errors;
