import kitchen from "../Imagenes/kitchen.png"
import "../Css/estilos.css"

export default function Header() {
    return (
        <div className="cabecera">
            <div className="img-top">
                <img src={kitchen} alt="cocina"/>
            </div>
            <div className="search-bar">
                <form className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input 
                    class="form-control me-sm-2" 
                    type="text" 
                    placeholder="Buscar por zonas Ejemplo: Miraflores" />
                </form>
            </div>
            <div className="botones">
                <button type="button" className="btn btn-outline-primary">Soy Propietario</button>
                <button type="button" className="btn btn-warning">Ingresar</button>
            </div>
        </div>

    )
}
