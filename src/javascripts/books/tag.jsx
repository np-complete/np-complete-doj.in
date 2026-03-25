import React from 'react';
import classNames from 'classnames';
import Context from './context';

export default ({ tag }) => {
  const ctx = React.useContext(Context);
  const className = classNames('button', 'is-info', 'is-small', { 'is-light': !ctx.tags.includes(tag) });

  return (
    <button type="button" className={className} onClick={() => ctx.toggleTag(tag)}>
      {tag}
    </button>
  );
};
