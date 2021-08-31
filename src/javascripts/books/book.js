import React from 'react';
import dateformat from 'dateformat';
import Tag from './tag';

export default ({ book }) => (
  <>
    {book.events.map((event, index) => (
      <tr>
        <td>{dateformat(event.date, 'yyyy-mm-dd')}</td>
        <td>{event.name}</td>
        {index === 0 && (
          <>
            <td rowSpan={book.events.length}>{book.title}</td>
            <td rowSpan={book.events.length}>
              <div className="buttons">
                {book.tags.map((tag) => (
                  <Tag tag={tag} />
                ))}
              </div>
            </td>
            <td rowSpan={book.events.length}>
              <a href={`https://np-complete-books.s3.amazonaws.com/pdf/${book.repo}.pdf`} target="_blank" rel="noreferrer">
                [pdf]
              </a>
            </td>
            <td rowSpan={book.events.length}>
              <a href={`https://github.com/np-complete/${book.repo}`} target="_blank" rel="noreferrer">
                [source]
              </a>
            </td>
          </>
        )}
      </tr>
    ))}
  </>
);
