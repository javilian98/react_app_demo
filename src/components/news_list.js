import React from 'react';

// Components
import NewsListItem from './news_list_item';

const NewsList = (props) => {
  const newsItem = props.news.map((newsItem) => {
    return (
      <NewsListItem key={newsItem.id} newsItem={newsItem} />
    )
  });
  
  return (
    <div>
      {props.children}
      {newsItem}
    </div>
  );
}

export default NewsList;