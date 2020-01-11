import React from 'react';
import dateformat from 'dateformat';
import Tag from './tag';

export default ({ book }) => (
  <tr>
    <td>{dateformat(book.date, 'yyyy-mm-dd')}</td>
    <td>{book.event}</td>
    <td>{book.title}</td>
    <td>
      <div className="buttons">
        {book.tags.map((tag) => (
          <Tag tag={tag} />
        ))}
      </div>
    </td>
    <td>
      <a href={`https://np-complete-books.s3.amazonaws.com/pdf/${book.repo}.pdf`}>
        [pdf]
      </a>
    </td>
    <td>
      <a href={`https://github.com/np-complete/${book.repo}`}>
        [source]
      </a>
    </td>
  </tr>
);
