import styles from '../../layout/Container.module.css'
import Formulario from '../../layout/Formulario'

function Newproject(){
    return (
        <div className= {styles.container}>
            <h1> Criar Projeto </h1>
            <p> Para criar um projeto e adicionar servicoes</p>
            <Formulario></Formulario>
        </div>
    )
}

export default Newproject