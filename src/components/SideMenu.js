import React from 'react'

const SideMenu = () => {
  return (
    <aside className = "menu container is-fluid">
      <p className = "menu-label">
        C I F R A S
      </p>
      <ul className = "menu-list">
        <li><a><b>1,211</b> Casos confirmados</a></li>
        <li><a><b>3</b> Personas recuperadas</a></li>
        <li><a><b>29</b> Fallecidos</a></li>
      </ul>
    </aside>
  )
}

export default SideMenu