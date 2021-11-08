import avatar from "../Imagenes/man 64px.png"
import flag from "../Imagenes/peru 64px.png"
import stars from "../Imagenes/rating 64px.png"
import dots from "../Imagenes/more 24px.png"
import bookmark from "../Imagenes/bookmark 24px.png"
import share from "../Imagenes/share 24px.png"
import bubble from "../Imagenes/bubble 24px.png"

export default function Cards() {
    return (
        <>
            {/* #######  CARD 1 #########*/}
            <div className="card mb-3 shadow" style={{maxWidth: "20rem"}}>
                <div className="card-body">
                    <h4 className="card-title">Cocina recien remodelada</h4>
                    <p className="card-text">S/100</p>
                    <p className="card-text"><small className="text-muted">Listed in la Victoria, Lima</small></p>
                    {/* <div className="d-grid gap-2 d-lg-flex justify-content-sm-start"> */}
                        <a href="#" className="btn btn-success btn-md">Contactar <img src={bubble}/></a>
                        <a href="#" className="btn btn-light btn-md"> <img src={bookmark}/></a>
                        <a href="#" className="btn btn-light btn-md"> <img src={share}/></a>
                        <a href="#" className="btn btn-light btn-md"> <img src={dots}/></a>
                    {/* </div> */}
                </div>
            </div>
            {/* #######  CARD DETAILS #########*/}
            <div className="card mb-3 shadow" style={{maxWidth: "20rem"}}>
                <div className="card-body">
                    <h4 className="card-title">Detalles</h4>
                    <p className="card-text">Area: 6m2</p>
                    <p className="card-text">Implementado: Sí</p>
                    <p className="card-text"><small className="text-muted">La cocina está recién remodelada, ubicada en el primer piso</small></p>
                </div>
            </div>
                        {/* #######  CARD MAPA #########*/}
            <div className="card mb-3 shadow" style={{maxWidth: "20rem"}} >
                <div className="card-body">
                    <h4 className="card-title">Publicado en:</h4>
                    <p className="card-text"><small className="text-muted">La Victoria, Lima</small></p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d62427.46441322061!2d-77.0296179!3d-12.0630149!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1636331455604!5m2!1ses-419!2spe" width="270" height="250" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            {/* #######  CARD CALIFICACIÓN #########*/}
            <div className="card mb-3 shadow" style={{maxWidth: "19rem"}}>
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={avatar} className="rounded" style={{padding: "0.6rem"}} alt="avatar" />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title">Calificaciones del arrendador</h5>
                            <img src={flag} className="d-block" alt="flag" />
                            <img src={stars} className="d-block" alt="stars" />
                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


// {{marginRight: spacing + 'em'}}