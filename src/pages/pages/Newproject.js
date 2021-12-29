import styles from './Newproject.module.css'
import Formulario from '../../layout/Formulario'

function Newproject(){

    return (
        <div className= {styles.container2}>
            <div className= {styles.container3}>
                <h1> Criar Projeto </h1>
                <Formulario></Formulario>
            </div>
        </div>
    )
}

export default Newproject