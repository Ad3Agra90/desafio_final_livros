import card1 from '../../assets/img/card1.png'
import card2 from '../../assets/img/card2.png'
import card3 from '../../assets/img/card3.png'
import card4 from '../../assets/img/card4.png'
import S from './inicio.module.scss'

export default function Inicio(){
    return(
        <>
        <section className={S.banner}>
            <h2 className={S.title_inicio}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <h2 className={S.title_cards}>Por que devo doar?</h2>
            <section className={S.cards}>
                <article>
                    <img src={card1} alt="teste"/>
                    <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </article>
                <article>
                    <img src={card2} alt="teste"/>
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </article>
                <article>
                    <img src={card3} alt="teste"/>
                    <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </article>
                <article>
                    <img src={card4} alt="teste"/>
                    <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </article>
            </section>
        </>
    )
}