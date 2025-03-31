import exemplo from '../../assets/img/exemplo_book.png'
import S from './doados.module.scss'
import axios from 'axios'
import {useState, useEffect} from 'react'

export default function Doados(){

    const [livros, setLivros] = useState([])
    
    const getLivros = async () => {
        const response = await axios.get("https://modulo2-desafio02.onrender.com/livros")
        setLivros(response.data)
    }
    useEffect(() => {
        getLivros()
    }, [])




    return(
        <section>
        <section className={S.doados}>
            <h2 className={S.title_doados}>Livros Doados</h2>
            <section className={S.grid_doados}>
                {livros.map((item) =>(
                <article key={item.id}>
                    <img src={item.imagem_url} alt="" />
                    <h3 className={S.book_title}>{item.titulo}</h3>
                    <p>{item.autor}</p>
                    <p>{item.categoria}</p>
                </article>
                ))}
            </section>
        </section>
        </section>
    )
}