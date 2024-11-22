import exemplo from '../../assets/img/exemplo_book.png'
import S from './doados.module.scss'


export default function Doados(){
    return(
        <main>
        <section>
            <h2 className={S.title_doados}>Livros Doados</h2>
            <section className={S.doados}>
                <div>
                    <img src={exemplo} alt="exemplo" />
                    <p className={S.book_title}>O protagonista</p>
                    <p>Susanne Andrade
                    </p>
                    <p>Ficção</p>
                </div>
            </section>
        </section>
        </main>
    )
}