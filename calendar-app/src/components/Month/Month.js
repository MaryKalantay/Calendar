import React from 'react';
import styles from './Month.module.sass';

const Month = (props) => {
  let date = new Date;
  const year = date.getFullYear();
  const month = date.getMonth();
  
  let current = new Date(year, month);
  let next = new Date(year, month + 1);

  let diff = (next - current)/(1000 * 3600 * 24);

  let index = (current.getDay() + 6) % 7;

  console.log(diff);
  console.log(index);

  const rows = 6;
  const cols  = 7;

  let table = [], tr, k = 1 - index;

  for (let i = 0; i < rows; i++) {
    tr = [];
    for (let j = 0; j < cols; j++) {
      tr.push(<td className={styles.day}>{k > 0 && k <= diff ? k : ' '}</td>);
      k++;
    }
    table.push(<tr>{tr}</tr>);
  };
  
  return (
    <div className={styles.month}>
      <table className={styles.month__table}>
        {table}
      </table>
    </div>
  );
}

export default Month;