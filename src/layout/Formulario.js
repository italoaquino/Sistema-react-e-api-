import axios from 'axios'
import styles from './Formulario.module.css'
import { useState, useEffect } from 'react'
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


function Formulario(){

    const [ project, setProject] = useState([])


    const validationPost = yup.object({
        name : yup.string().required("O nome é obrigatório"),
        price : yup.number("Deve ser um numero").required("É obrigatório").positive("Deve ser positivo")
    })

    const { handleSubmit, formState:{ errors } } = useForm(
        {resolver: yupResolver(validationPost)}
    )

    const submit = (e)  =>{
        e.preventDefault()
        handleSubmit(project)

        
        fetch('http://localhost:8080/v1/project', {
            method : 'POST',
            headers : {'Content-type' : 'application/json'},
            body : JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch((err) => console.log(err))
    }
   
    useEffect(() => {
        axios.get('http://localhost:8080/v1/category/') 
        .then((response) => {
            setCategory(response.data);
        })
        .catch((err) => console.log(err))
    }, [])

    const [category, setCategory] = useState([])

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    function handleCategory(e) {
        setProject({
            ...project, 
            category: {
            id: e.target.value,
            name: e.target.options[e.target.selectIndex]
            
        },
     })
        console.log(project)
    } 
    return (

        <form onSubmit={submit} >
            <div className = {styles.espacamento}>
                <div className="form-group-1">
                    <label htmlFor="validationServer01">Nome do projeto</label>
                    <input type="text" className="form-control"  placeholder="Projeto tal" name = "name"  onChange = {handleChange}/>
                    <p className = {styles.errors}>{errors.name?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Escolha uma categoria</label>
                    <select className="form-control" id="exampleFormControlSelect1" name = "category_id" onChange= {handleCategory} >
                    {category.map((cat) =>(
                        <option value = {cat.id} key = {cat.id}>{cat.name}</option>
                    ) )}
                    </select>
                    <br></br>
                </div>


                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Custo do projeto</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="R$" name = "price"  onChange = {handleChange} />
                    <p className = {styles.errors}>{errors.price?.message}</p>
                </div>

                

                <div className = {styles.btn}>
                    <button type="submit" className="btn btn-warning" >Enviar</button>
                </div>
            </div>
        </form>
        )

   }
    

   



export default Formulario