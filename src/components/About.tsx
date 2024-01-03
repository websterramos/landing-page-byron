import React from "react";

const About = () => {
  return (
    <section
      id="sobre"
      className="flex h-full items-center justify-center bg-white px-4 py-8 text-[#012130] lg:px-40 lg:py-24"
    >
      <div id="sobre-div" className="max-w-7xl">
        <div
          id="sobre-content"
          className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-24 lg:px-0"
        >
          <div
            id="sobre-foto"
            className="flex flex-col items-center justify-center gap-4 px-2 lg:max-w-lg lg:flex-row lg:gap-5 lg:px-0"
          >
            <div className="flex flex-col gap-4 lg:gap-[22px]">
              <img
                className="h-[190px] w-[312px] overflow-hidden rounded-lg object-cover object-top lg:h-[316px] lg:w-[236px] lg:object-center"
                src="img/about-pic-1.jpg"
              />
              <img
                className="h-[190px] w-[312px] overflow-hidden rounded-lg object-cover object-center lg:h-[316px] lg:w-[236px] lg:object-center"
                src="img/about-pic-3.jpg"
              />
            </div>
            <img
              className="h-[190px] w-[312px] overflow-hidden rounded-lg object-cover object-center lg:h-[316px] lg:w-[236px] lg:object-left"
              src="img/about-pic-2.jpg"
            />
          </div>
          <div
            id="sobre-texto"
            className="flex w-full flex-col items-start justify-center gap-4 lg:max-h-[580px] lg:max-w-lg"
          >
            <h5 className="text-2xl uppercase leading-8 text-[#0B719D] lg:text-3xl lg:leading-10">
              Sobre nós
            </h5>
            <div className="flex flex-col justify-center gap-4 lg:gap-2">
              <h4 className="text-4xl leading-[49px] lg:text-5xl">
                Make your customers happy by giving services.
              </h4>
              <p className="lg:font-light">
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
