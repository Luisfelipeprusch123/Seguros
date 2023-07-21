import React from 'react';
import { clients } from './data';

interface Client {
  id: number;
  name: string;
  email: string;
}
    // Componente que pega os usuarios e lista!
const Clients: React.FC = () => {
  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {clients.map((client: Client) => (
          <li key={client.id}>
            {client.name} ({client.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
