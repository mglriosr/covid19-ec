import React from 'react'

const ControlPanel = () => {
  return (
    <aside className = "menu container is-fluid">
      <ul className = "menu-list">
        <li>
          <a className = "is-active">Provincias</a>
          <ul>
            <li><a>Contagiados</a></li>
            <li><a>Recuperados</a></li>
            <li><a>Fallecidos</a></li>
            <li><a>Todos</a></li>
          </ul>
        </li>
      </ul>
      <ul className = "menu-list">
        <li>
          <a className = "is-active">Cuidades</a>
          <ul>
            <li><a>Contagiados</a></li>
            <li><a>Recuperados</a></li>
            <li><a>Fallecidos</a></li>
            <li><a>Todos</a></li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}

export default ControlPanel