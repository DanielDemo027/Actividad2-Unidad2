import { useState } from "react";

const FormAltaProductos = (props) =>{
    const initialForm = {id: '', category: '', price: '', stocked: true, name: '', idProveedor: ''}

    const [prodcuto, setProdcuto] = useState(initialForm);

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setProdcuto({...prodcuto, [name]: value})
        console.log(prodcuto)
    }
    return(
        <div>
            <h1>Formulario Alta Productos</h1>
            <form
                onSubmit={event =>{
                    event.preventDefault();
                    if(!prodcuto.name || !prodcuto.price) return
                    props.addProducto(prodcuto)
                    setProdcuto(initialForm)
                }}
            >
                <input type='text' name='name' value={prodcuto.name} placeholder="Nombre" onChange={handleInputChange}/>
                <input type='text' name='price' value={prodcuto.price} placeholder="Precio" onChange={handleInputChange}/>
                <h5>Categoria</h5>
                <select name="category" value={prodcuto.category} onChange={handleInputChange}>
                    <option value='' hidden>Seleccione una categoria</option>
                    <option value='Sporting Goods'>Sporting Goods</option>
                    <option value='Electronics'>Electronics</option>
                </select>
                <h5>Proveedor</h5>
                <select name="idProveedor" value={prodcuto.idProveedor} onChange={handleInputChange}>
                    <option value='' hidden>Seleccione un Proveedor</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                </select>

                <button>Agregar</button>
            </form>
        </div>
    )
}

export default FormAltaProductos;