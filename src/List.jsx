import * as React from 'react';
import { ReactComponent as Check } from './check.svg';
import styles from './App.module.css';

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => {
  const { url, author, title, num_comments, points } = item;
  return (
    <li className={styles.item}>
      <span style={{ width: '40%' }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: '30%' }}>{author}</span>
      <span style={{ width: '10%' }}>{num_comments}</span>
      <span style={{ width: '10%' }}>{points}</span>
      <span style={{ width: '10%' }}>
        <button
          type="button"
          onClick={() => onRemoveItem(item)}
          className={`${styles.button} ${styles.buttonSmall}`}
        >
          <Check height="18px" width="18px" />
        </button>
      </span>
    </li>
  );
};

export { List };
