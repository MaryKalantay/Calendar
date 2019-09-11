import React from 'react';
import styles from './Controls.module.sass';

import ArrowLIcon from '../../Icons/ArrowL.svg';
import ArrowRIcon from '../../Icons/ArrowR.svg';
import Button from '../Buttons/Buttons';

const Controls = (props) => {
  let date = new Date;
  const year = date.getFullYear();
  const month = date.getMonth();

  const monthNames = [ "Январь","Февраль","Март","Апрель","Май","Июнь",
  "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ];

  return (
    <div className={styles.controls}>
      <Button type="button" className={styles.controls__arrow} title={<img src={ArrowLIcon} width='10px'/>} />
      <span className={styles.controls__month}>
        {monthNames[month] + ', ' + year}
      </span>
      <Button type="button" className={styles.controls__arrow} title={<img src={ArrowRIcon} width='10px'/>} />
      <Button type="button" className={styles.controls__today} title="Сегодня" />
    </div>
  );
}

export default Controls;