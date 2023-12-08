import React from "react";

const Form = () => {
  return (
    <form
      action="/contato"
      method="post"
      className="flex flex-col justify-center gap-4 p-8 text-sm"
    >
      <div className="flex flex-col">
        <label for="nome">Nome</label>
        <input
          type="text"
          id="nome"
          className="rounded-md border-2 border-gray-300 p-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          className="rounded-md border-2 border-gray-300 p-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label for="telefone">Telefone</label>
        <input
          type="tel"
          id="telefone"
          className="rounded-md border-2 border-gray-300 p-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label for="msg">Mensagem</label>
        <textarea
          id="msg"
          className="rounded-md border-2 border-gray-300 p-2 focus:outline-none"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="rounded-md bg-blue-700 px-6 py-4 font-semibold text-white"
        >
          Enviar mensagem
        </button>
      </div>
    </form>
  );
};

export default Form;
