import Form from "@/components/Form";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <main className="bg-gray-200">
      <section id="sobre" className="flex items-center justify-center">
        <div
          id="sobre-div"
          className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-16 md:gap-16 md:py-32"
        >
          <h2 className="text-center text-3xl font-bold uppercase drop-shadow-lg">
            Sobre
          </h2>
          <div
            id="sobre-content"
            className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-32"
          >
            <div id="sobre-parte-1" className="max-w-md">
              <img className="rounded-xl" src="c1.jpg" />
            </div>
            <div
              id="sobre-parte-2"
              className="max-w-md text-lg font-medium leading-relaxed"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
              magnam. Laborum voluptas animi unde ipsa iure? Numquam sapiente
              eligendi officiis, non provident tenetur consectetur, sit,
              inventore excepturi molestias ipsa placeat.
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="flex items-center justify-center">
        <div
          id="contato-div"
          className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-16 md:py-32"
        >
          <h2 className="text-center text-3xl font-bold uppercase drop-shadow-lg">
            Contato
          </h2>
          <div
            id="contato-content"
            className="flex flex-col items-center justify-between gap-16 md:flex-row md:gap-32"
          >
            <div
              id="contato-parte-1"
              className="flex max-w-md flex-col items-center gap-4"
            >
              <Form formField="Nome*" type="text" />
              <Form formField="E-mail*" type="email" />
              <Form formField="Telefone" type="tel" />
              <div>
                <p className="font-medium">Mensagem</p>
                <textarea
                  className="rounded-lg border border-gray-400 bg-gray-100 px-2 py-1 font-light drop-shadow-lg transition duration-300 ease-in-out focus:border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-opacity-50"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <button className="flex max-w-fit items-center justify-center rounded-full bg-blue-600 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:bg-blue-700 focus:outline-none active:bg-blue-800">
                <input type="submit" value="Enviar" />
              </button>
            </div>

            <div
              id="contato-parte-2"
              className="flex max-w-md flex-col items-center justify-center gap-8"
            >
              <a
                className="flex w-full items-center justify-center gap-4 rounded-full bg-blue-600 px-8 py-4 text-xl font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:bg-blue-700 focus:outline-none active:bg-blue-800"
                href="https://wa.me/55XXXXXXXXXXX"
                target="__blank"
                rel="noopener"
              >
                WhatsApp
                <FontAwesomeIcon icon={faWhatsapp} size="xl" />
              </a>
              <a
                className="flex w-full items-center justify-center gap-4 rounded-full bg-blue-600 px-8 py-4 text-xl font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:bg-blue-700 focus:outline-none active:bg-blue-800"
                href="mailto:byron@byronsolutions.com"
              >
                E-mail
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </a>
              <a
                className="flex w-full items-center justify-center gap-4 rounded-full bg-blue-600 px-8 py-4 text-xl font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:bg-blue-700 focus:outline-none active:bg-blue-800"
                href="https://www.instagram.com/"
                target="__blank"
                rel="noopener"
              >
                Instagram
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
