import twitter_logo from '../../assets/img/twitter_logo.png'
import face_logo from '../../assets/img/face_logo.png'
import instagram_logo from '../../assets/img/instagram_logo.png'
import linkedin_logo from '../../assets/img/linkedin_logo.png'
import youtube_logo from '../../assets/img/youtube_logo.png'
import { BrowserRouter, Link } from 'react-router-dom'
import S from './footer.module.scss'

export default function footer(){
    return(
        <BrowserRouter>
            <footer>
                <section  className={S.container_footer}>
                    <p className={S.phone_number}>
                    4002-8922
                    </p>
                    <div className={S.redes_sociais}>
                         <nav>
                           <ul>
                             <li><Link to="https://x.com/"><img src={twitter_logo} alt="twitter logo" /></Link></li>
                             <li><Link to="https://www.facebook.com/"><img src={face_logo} alt="face logo" /></Link></li>
                             <li><Link to="https://www.instagram.com/"><img src={instagram_logo} alt="instagram logo" /></Link></li>
                             <li><Link to="https://www.linkedin.com/"><img src={linkedin_logo} alt="linkedin logo" /></Link></li>
                             <li><Link to="https://www.youtube.com/"><img src={youtube_logo} alt="youtube logo" /></Link></li>
                           </ul>
                       </nav>
                    </div>
                </section>
                <section className={S.direitos_autorais}>
                    <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
                </section>
            </footer>
        
        </BrowserRouter> 
    )
}