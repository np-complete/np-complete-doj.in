import classNames from 'classnames'
import React from 'react'
import Context from './context'

const Tag = ({ tag }) => {
  const ctx = React.useContext(Context)
  const className = classNames('button', 'is-info', 'is-small', {
    'is-light': !ctx.tags.includes(tag),
  })

  return (
    <button
      type="button"
      className={className}
      onClick={() => ctx.toggleTag(tag)}
    >
      {tag}
    </button>
  )
}

export default Tag
