import cheff from "../Imagenes/cheff.png"
import cocina from "../Imagenes/cocina.png"
import cocina2 from "../Imagenes/cocina2.png"



export default function Carrusel() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={cheff} className="d-block w-100" alt="cheff" height="80%" width="80%"/>
                </div>
                <div className="carousel-item">
                    <img src={cocina} className="d-block w-100" alt="cocina" height="80%" width="80%"/>
                </div>
                <div className="carousel-item">
                    <img src={cocina2} className="d-block w-100" alt="cocina2" height="80%" width="80%"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
