import React from 'react'

const SideMenu = () => {
  return (
    <aside className = "menu container is-fluid">
      <p className = "menu-label">
        Administration
      </p>
      <ul className = "menu-list">
        <li><a>Team Settings</a></li>
        <li>
          <a className = "is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
    </aside>
  )
}

export default SideMenu