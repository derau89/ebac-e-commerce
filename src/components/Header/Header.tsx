import logo from '../../img/logo-Hound_Express-bg-white.png'
import './Header.css'

function Header() {
  return (
    <header>
   <section className="header__top">  
     <div>
      <a href="https://www.hound-express.com/">
        <i>
              <img
                className="header__logo"
                src={logo}
                alt="Hound Express Logo"
                />
        </i>
      </a>
    </div>

    <article className="header__cell-and-lang">
      <div className="header__cell">
        <span className="header__country">
          MX
          <a
            href="https://www.hound-express.com/"
            className="header__number"
          >
            +52(55) 4000 1920
          </a>
        </span>

        <span className="header__country">
          USA
          <a
            href="https://www.hound-express.com/"
            className="header__number"
          >
            +1(95) 6568 3443
          </a>
        </span>
      </div>

      <div>
        <a className="idioma-actual">
          Idioma
          <img
            src="https://img.icons8.com/?size=48&id=85502&format=png"
            alt="Español"
            className="dropdown"
          />
        </a>
      </div>
    </article>
    
</section> 


<section className="header__links-busqueda">
      <nav>
        <a href="https://www.hound-express.com/index.html">Inicio</a>
        <a href="#registro">Registro de Guías</a>
        <a href="#estado">Estado General</a>
        <a href="#guias">Lista de Guías</a>
        <a href="#Buscar Guías">Buscar Guías</a>
        <a href="#Historial de Guías">Historial de Guías</a>
      </nav>
    </section>
    </header>
  )
}

export default Header