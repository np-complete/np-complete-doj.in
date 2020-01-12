import React from 'react';
import Context from './context';
import Book from './book';
import list from './list.yml';

export default () => {
  const [books, setBooks] = React.useState(list);
  const [tags, setTags] = React.useState([]);

  const toggleTag = (tag) => {
    setTags((tags) => (tags.includes(tag) ? tags.filter((x) => x !== tag) : tags.concat(tag)));
  };

  const context = { tags, toggleTag };

  React.useEffect(() => {
    if (tags.length > 0) {
      setBooks(list.filter((book) => tags.every((tag) => book.tags.includes(tag))));
    } else {
      setBooks(list);
    }
  }, [list, tags]);

  return (
    <Context.Provider value={context}>
      <table className="table">
        <thead>
          <tr>
            <th>発行日</th>
            <th>イベント</th>
            <th>タイトル</th>
            <th>タグ</th>
            <th colSpan="2">リンク</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book book={book} />
          ))}
        </tbody>
      </table>
    </Context.Provider>
  );
};
