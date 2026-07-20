import {FaFacebook, FaInstagram, FaLink} from "react-icons/fa"
import style from '../components/layout/Footer.module.css'
export const Footer = () =>{
    return (
        <footer>
            <ul className={style.social_list}>
                <li className={style.social_list}><FaFacebook/></li>
                <li className={style.social_list}><FaInstagram/></li>
                <li className={style.social_list}><FaLink/></li>
                
            </ul>
            <p>Nosso radapé</p>
        </footer>
    )
} 