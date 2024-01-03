import React from "react";

const Form = () => {
  return (
    <form
      action="/contato"
      method="post"
      className="flex w-full flex-col justify-center gap-12 px-5 py-8 text-[#011730]"
    >
      <div id="campos-forms" className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label for="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="rounded-md border-[1px] border-[#011730] p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            className="rounded-md border-[1px] border-[#011730] p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label for="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            className="rounded-md border-[1px] border-[#011730] p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label for="msg">Mensagem</label>
          <textarea
            id="msg"
            className="rounded-md border-[1px] border-[#011730] p-2 focus:outline-none"
          ></textarea>
        </div>
      </div>

      <div id="botao-forms" className="self-center">
        <button
          type="submit"
          className="rounded-lg bg-[#19B1F3] px-12 py-3 font-medium uppercase text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
