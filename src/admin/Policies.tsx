import React from 'react';

// Esse import Data é para pega o examplo do banco de dados
import { policies, clients } from './data';

const Policies: React.FC = () => {
    return (
      <div>
        <h2>Lista de Apólices</h2>
        <ul>
          {policies.map((policy) => (
            <li key={policy.id}>
              Tipo: {policy.type}, Valor: {policy.amount}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Policies;