import styles from '../../layout/Container.module.css';
import style from './Home.module.css';
import savings from '../../image/home.svg'
import { Link } from 'react-router-dom'


function Home(){
    return(
        <div className= {styles.container}>
            <div className = {style.home}>
                <h1>Projetinho</h1>
                <p >
                    Projeto desenvolvido por Ítalo Aquino.
                </p>
                <Link to="/newproject" className = "btn btn-warning" >Criar Projeto</Link>
            </div>
            <img src = {savings} alt = "foto" ></img>

        </div>
    )
}

export default Home