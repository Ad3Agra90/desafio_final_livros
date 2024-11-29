import exemplo from '../../assets/img/exemplo_book.png'
import S from './doados.module.scss'


export default function Doados(){
    return(
        <section>
        <section className={S.doados}>
            <h2 className={S.title_doados}>Livros Doados</h2>
            <section className={S.grid_doados}>
                <article>
                    <img src={exemplo} alt="exemplo" />
                    <h3 className={S.book_title}>O protagonista</h3>
                    <p>Susanne Andrade
                    </p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={exemplo} alt="exemplo" />
                    <h3 className={S.book_title}>O protagonista</h3>
                    <p>Susanne Andrade
                    </p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={exemplo} alt="exemplo" />
                    <h3 className={S.book_title}>O protagonista</h3>
                    <p>Susanne Andrade
                    </p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={exemplo} alt="exemplo" />
                    <h3 className={S.book_title}>O protagonista</h3>
                    <p>Susanne Andrade
                    </p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={exemplo} alt="exemplo" />
                    <h3 className={S.book_title}>O protagonista</h3>
                    <p>Susanne Andrade
                    </p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
        </section>
    )
}