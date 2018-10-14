import React from 'react';
import classes from '../css/styles.css';

const NewsListItem = ({newsItem}) => {

  return (
    <div className={classes.news_list_item}>
      <h3>{newsItem.title}</h3>
      <p>{newsItem.feed}</p>
    </div>
  );
};

export default NewsListItem;