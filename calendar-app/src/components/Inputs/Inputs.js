
import React from 'react';
import styles from './Inputs.module.sass';

const Input = (props) => {
  return  <input className={props.className} name={props.name} value={props.value}  placeholder={props.placeholder}/>
}

export default Input;