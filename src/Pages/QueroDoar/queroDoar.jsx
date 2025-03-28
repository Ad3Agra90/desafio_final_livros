import S from './querodoar.module.scss'
import book from '../../assets/img/frame_info_livros.png'
import axios from 'axios' 
import {useState} from 'react'
export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem] = useState("")

    const enviarDados = async() => {

        const urlApi = "https://modulo2-desafio02.onrender.com/doar"
        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post(urlApi, dadosEnviar)
        alert("Livro doado com sucesso!")
        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem("")
    }

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }
    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }
    const capturaImagem = (e) => {
        setImagem(e.target.value)
    }



    return(
        <section className={S.formulario}>
            <h2 className={S.title_form}>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            <section className={S.campos}>
                <div className={S.title_campos}>
                    <img src={book} alt="livro" />
                    <h2 className={S.title}>Informações do Livro
                    </h2>
                </div>
                <form className={S.input_doar} onSubmit={(e) => e.preventDefault()}>
                    <input type="text"  placeholder="Titulo" onChange={capturaTitulo} value={titulo}/>
                    <input type="text"  placeholder="Categoria" onChange={capturaCategoria} value={categoria}/>
                    <input type="text"  placeholder="Autor" onChange={capturaAutor} value={autor}/>
                    <input type="url"   placeholder="Link da Imagem" onChange={capturaImagem} value={imagem_url}/>
                    <input className={S.doar}type="submit" onClick={enviarDados}  value="Doar"/>
                </form>
            </section>
        </section>
    )
}