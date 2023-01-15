import React from 'react';

const InputItem = ({type, placeholder, classes}) => {
  return (
   <input
     type={type}
     placeholder={placeholder}
     className={classes}/>
  )
};

export default InputItem;
