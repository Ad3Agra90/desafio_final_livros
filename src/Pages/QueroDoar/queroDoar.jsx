import S from './querodoar.module.scss'
import book from '../../assets/img/frame_info_livros.png'

export default function QueroDoar(){
    return(
        <section className={S.formulario}>
            <h2 className={S.title_form}>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            <section className={S.campos}>
                <div className={S.title_campos}>
                    <img src={book} alt="livro" />
                    <h2 className={S.title}>Informações do Livro
                    </h2>
                </div>
                <form className={S.input_doar}>
                    <input type="text"  placeholder="Titulo" />
                    <input type="text"  placeholder="Categoria"/>
                    <input type="text"  placeholder="Autor"/>
                    <input type="url"   placeholder="Link da Imagem"/>
                    <input className={S.doar}type="submit"   value="Doar"/>
                </form>
            </section>
        </section>
    )
}