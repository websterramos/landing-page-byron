import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-200">
      <section id="sobre" className="flex items-center justify-center">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-16 md:gap-16">
          <h2 className="text-center text-3xl font-bold uppercase drop-shadow-lg">
            Sobre
          </h2>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-32">
            <div className="max-w-md">
              <img className="rounded-xl" src="c1.jpg" />
            </div>
            <div className="max-w-md text-lg font-medium leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
              magnam. Laborum voluptas animi unde ipsa iure? Numquam sapiente
              eligendi officiis, non provident tenetur consectetur, sit,
              inventore excepturi molestias ipsa placeat.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
