import React from 'react';
import {NiveisAcesso} from './NiveisAcesso';

interface User {
  id: number;
  name: string;
  email: string;
  accessLevel: NiveisAcesso;
}

const UserList: React.FC = () => {
    const users: User[] = [
      { id: 1, name: 'Usuário 1', email: 'usuario1@example.com', accessLevel: NiveisAcesso.ADMINISTRADOR },
      { id: 2, name: 'Usuário 2', email: 'usuario2@example.com', accessLevel: NiveisAcesso.GERENTE },
      { id: 3, name: 'Usuário 3', email: 'usuario3@example.com', accessLevel: NiveisAcesso.USUARIO },
      // Adicione mais usuários aqui...
    ];
  
    return (
      <div>
        <h2>Lista de Usuários</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email}) - Nível de Acesso: {user.accessLevel}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserList;
