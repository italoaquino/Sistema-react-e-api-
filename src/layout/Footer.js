import { FaReact,  FaJava, FaGithub} from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className = {styles.footer}>
            <ul className = {styles.social_list}>
                <li className = {styles.social_list}>
                    <FaReact/>
                </li >
                <li className = {styles.social_list}>
                    <FaJava/>
                </li>
                <li className = {styles.social_list}>
                    <FaGithub/>
                </li>
            </ul>
            <span><p className= {styles.copy_right}>Projeto Desenvolvido por Ítalo Aquino</p></span>
        </footer>
    )
}

export default Footer