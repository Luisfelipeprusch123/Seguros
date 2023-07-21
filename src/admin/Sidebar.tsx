import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin/clients">Clientes</Link>
        </li>
        <li>
          <Link to="/admin/policies">Apólices</Link>
        </li>
        <li>
          <Link to="/admin/reports">Relatórios</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
