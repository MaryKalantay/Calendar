import React from 'react';
import styles from './Header.module.sass';
import Button from '../Buttons/Buttons';
import Search from '../Search/Search';

const Header = () => {
  return  (
  <header className={styles.header}>
    <div className={styles.header__buttons}>
      <Button title="Добавить" />
      <Button title="Обновить" />
    </div>
    <Search />
  </header>
  );
}

export default Header;