import React from 'react';

import styles from './Buttons.module.sass';

const Button = (props) => {
  return  <button className= {`${styles.btn} ${ props.className } `} type={props.type}>{props.title}</button>
}

export default Button;
