import logo from '../../assets/img/logo.png'
import search from '../../assets/img/search.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/inicio'
import Doados from '../../Pages/Doados/doados'
import QueroDoar from '../../Pages/QueroDoar/queroDoar'
import S from './header.module.scss'

export default function header(){
    return(
      <BrowserRouter>
        <header>
      <section className={S.boxLogo}>
        <img src={logo} alt="book" />
        <h1>Livros Vai na Web</h1>
      </section>
      <nav className={S.link}>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/doados">Livros Doados</Link></li>
            <li><Link to="/queroDoar">Quero Doar</Link></li>
          </ul>
      </nav>
      <div>
        <input className={S.search} type="text" placeholder='O que você procura?' />
        <img src={search} alt="lupa" />
      </div>
    </header>
    <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Doados" element={<Doados/>}/>
        <Route path="/QueroDoar" element={<QueroDoar/>}/>
    </Routes>
    </BrowserRouter>
    )
}