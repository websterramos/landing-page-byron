import React from "react";

const About = () => {
  return (
    <section
      id="sobre"
      className="flex h-full items-center justify-center bg-white px-4 py-8 text-[#012130] md:px-40 md:py-24"
    >
      <div id="sobre-div" className="max-w-7xl">
        <div
          id="sobre-content"
          className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-24 md:px-0"
        >
          <div
            id="sobre-foto"
            className="flex flex-col items-center justify-center gap-4 px-2 md:max-w-lg md:flex-row md:gap-5 md:px-0"
          >
            <div className="flex flex-col gap-4 md:gap-[22px]">
              <img
                className="max-h-[190px] max-w-[312px] rounded-lg md:max-h-[316px] md:max-w-[236px]"
                src="img/Pic1.png"
              />
              <img
                className="max-h-[190px] max-w-[312px] rounded-lg md:max-h-[316px] md:max-w-[236px]"
                src="img/Pic3.png"
              />
            </div>
            <img
              className="max-h-[190px] max-w-[312px] rounded-lg md:max-h-[316px] md:max-w-[236px]"
              src="img/Pic2.png"
            />
          </div>
          <div
            id="sobre-texto"
            className="flex w-full flex-col items-start justify-center gap-4 md:max-h-[580px] md:max-w-lg"
          >
            <h4 className="text-2xl uppercase leading-8 text-[#0B719D] md:text-3xl md:leading-10">
              Sobre nós
            </h4>
            <div className="flex flex-col justify-center gap-4 md:gap-2">
              <h3 className="text-3xl leading-[49px] md:text-5xl">
                Make your customers happy by giving services.
              </h3>
              <p className="font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                massa dolor, fermentum vitae ante eget, eleifend fermentum orci.
                Morbi accumsan nisl quis leo lobortis porttitor. Vestibulum
                tempus, nisl non fermentum pharetra, ex arcu elementum nibh, non
                tincidunt elit neque eget massa. Cras interdum mauris sit amet
                ex tincidunt, eu mattis ante congue. Proin et mattis elit, vitae
                efficitur nulla. Pellentesque porta ac mi vitae finibus.
                Phasellus vel semper est. Phasellus ac feugiat felis. Etiam
                vestibulum ligula porttitor, congue orci sed, ultricies velit.
                In ac sollicitudin sapien. In fringilla commodo diam nec
                feugiat. Nunc condimentum turpis a condimentum tristique. Nunc
                rutrum arcu vestibulum erat dignissim suscipit. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Ut ac elit
                sem. Nullam mi diam, rutrum vel lacus at, volutpat hendrerit
                dui. Mauris feugiat tellus et diam malesuada, at semper eros
                fermentum. Praesent a nisl turpis. Quisque efficitur cursus
                elit. Sed vehicula porta tincidunt. Sed fringilla finibus odio
                tempor aliquet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
