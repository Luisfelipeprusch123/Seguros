    // Examplo dos dados, ate o banco de dados(MYSQL) fica pronto
export interface Client {
    id: number;
    name: string;
    email: string;
  }
  
  export interface Policy {
    id: number;
    clientId: number;
    type: string;
    amount: number;
  }
  
  export const clients: Client[] = [
    { id: 1, name: 'Cliente 1', email: 'cliente1@example.com' },
    { id: 2, name: 'Cliente 2', email: 'cliente2@example.com' },
  ];
  
  export const policies: Policy[] = [
    { id: 101, clientId: 1, type: 'Seguro Auto', amount: 1000 },
    { id: 102, clientId: 1, type: 'Seguro Saúde', amount: 500 },
  ];
  