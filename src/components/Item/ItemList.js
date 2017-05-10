import React from 'react'
import PropTypes from 'prop-types'
import {ItemDisplay} from './ItemDisplay'

export const ItemList = (props) => {
  return (
    <div className="Item-List">
      <ul>
        {props.items.map( item =>
          <ItemDisplay key={item.id} {...item} handleRemove={props.handleRemove} />
        )}
      </ul>
    </div>
  )
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
}
