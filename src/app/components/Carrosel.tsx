import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';



function Carrossel() {
    const data = [{
        src: "/public/assets/img/bird1.png",
        alt: "cardapio da aroma doce",
        title: "Cafés para viagem",
        desc: "Peça o seu para retirada."
    }];

    return (
        <div className='d-block h-700px p-30px'>
            <Carousel >
                {data.map(item => <Carousel.Item>
                    <img className="d-block  w-100" src={item.src} alt={item.alt} />
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </Carousel.Caption>
                </Carousel.Item>)}

                {/*<Carousel.Item>
                      <img className="d-block  w-100" src="/public/assets/img/bir1.png" alt="" />
                      <Carousel.Caption>
                      <h3>Bolos</h3>
                      <p>Temos varios opções de bolos.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img className="d-block  w-100" src="/public/assets/img/bird3.png" alt="" />
                      <Carousel.Caption>
                      <h3>Cardapio</h3>
                      <p>
                          Sempre atualizado para você ficar sabendo das novidades.
                      </p>
                      </Carousel.Caption>
                  </Carousel.Item> */}
            </Carousel>
        </div>
    );
}

export default Carrossel;
