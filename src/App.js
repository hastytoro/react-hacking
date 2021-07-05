import * as React from 'react';
// import './App.css';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'GitHub',
      url: 'https://github.com/',
      author: 'Tom Preston',
      num_comments: 1,
      points: 3,
      objectID: 2,
    },
    {
      title: 'MDN',
      url: 'https://developer.mozilla.org/',
      author: 'Netscape Communications',
      num_comments: 4,
      points: 5,
      objectID: 3,
    },
  ];

  return (
    <div>
      {console.log('App')}
      <h1>Hacker Stories</h1>
      <Search />
      <hr />
      {/* render the list here */}
      <List list={stories} />
    </div>
  );
};

const Search = () => {
  let [searchText, setSearchText] = React.useState('');
  const handleChange = (event) => {
    searchText = setSearchText(event.target.value);
  };
  return (
    <div>
      {console.log('Search')}
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />
      <p>
        Searching for <strong>{searchText}</strong>.
      </p>
    </div>
  );
};

const List = ({ list }) => {
  return (
    <div>
      {console.log('List')}
      {/* render the list here */}
      <ul>
        {list.map((item) => (
          <Item key={item.objectID} item={item} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      {console.log('Item')}
      <span>
        {item.title} <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  );
};

export default App;
