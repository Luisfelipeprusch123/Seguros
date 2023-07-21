import React, { useState } from 'react';

const FormularioSeguro = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');
  const [date, setDate] = useState('');
  const [rg, setRg] = useState('');
  const [uf, setUF] = useState('');
     const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log('Dados enviados:', { nome, idade, endereco, cpf, date});
    setNome('');
    setIdade(0);
    setEndereco('');
    setCpf('');
    setDate('');
    setRg('');
    setUF('');
  };

  function setcpf(value: string): void {
    throw new Error('Function not implemented.');
  }

  function setdate(value: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <form className="max-w-sm mx-auto p-4 bg-white shadow-md rounded" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="idade" className="block text-gray-700 font-bold mb-2">
          Idade:
        </label>
        <input
          type="number"
          id="idade"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
          value={idade}
          onChange={(event) => setIdade(Number(event.target.value))}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="endereco" className="block text-gray-700 font-bold mb-2">
          Endereço:
        </label>
        <input
          type="text"
          id="endereco"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
          value={endereco}
          onChange={(event) => setEndereco(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cpf" className="block text-gray-700 font-bold mb-2">
          cpf:
        </label>
        <input
          type="number"
          id="cpf"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
          value={cpf}
          onChange={(event) => setcpf(event.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cpf" className="block text-gray-700 font-bold mb-2">
          data nacimento::
        </label>
        <input
          type="date"
          id="dateNacimento"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
          value={date}
          onChange={(event) => setdate(event.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="RG" className="block text-gray-700 font-bold mb-2">
          RG:
        </label>
        <input
          type="number"
          id="cpf"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
          value={rg}
          onChange={(event) => setRg(event.target.value)}
          />
          </div>

          <div className="mb-4">
        <label htmlFor="UF" className="block text-gray-700 font-bold mb-2">
          uf:
        </label>
        <input
          type="number"
          id="uf"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
          value={uf}
          onChange={(event) => setUF(event.target.value)}
          />
          </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormularioSeguro;
function setdate(arg0: string) {
  throw new Error('Function not implemented.');
}

