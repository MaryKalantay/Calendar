import React from 'react';
import styles from './Search.module.sass';

import Input from '../Inputs/Inputs';
import Button from '../Buttons/Buttons';
import SearchIcon from '../../Icons/Search.svg';

const Search = (props) => {
  return (
    <form className={styles.search} onSubmit="">
      <Button type="submit" className={styles.search__submit} title={<img src={SearchIcon}/>} />
      <Input className={styles.search__input} name="search" type="text" placeholder="Cобытие, дата или участник"/>
    </form>
  );
}

export default Search;