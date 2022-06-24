import React from 'react'
// import PropTypes from 'prop-types';


function Header({ title, onAdd, showAdd }) {
  return (
    <header className="header">
        <h1>{ title }</h1>
        <div>
          {showAdd}
          {onAdd}
        </div>
        
    </header>
  )
}

Header.defaultProps = {
    title: 'Todo List',
}

export default Header;