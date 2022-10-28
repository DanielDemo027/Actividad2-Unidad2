import { useState } from "react"
import FilterableProductTable from "./FilterableProductTable"
import FormAltaProductos from "./FormAltaProductos"
import FilterableProveedorTable from "./TablaProveedores/FilterableProveedorTable"

const Inicio = () =>{
    
    const PRODUCTS = [
        {id: 1, category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football', idProveedor: 1},
        {id: 2, category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball', idProveedor: 2},
        {id: 3, category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball', idProveedor: 3},
        {id: 4, category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch', idProveedor: 4},
        {id: 5, category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5', idProveedor: 5},
        {id: 6, category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7', idProveedor: 6}
      ]

      const PROVEEDORES = [
        {id: 1, tipo: 'Online', nombre: 'Adidas', estado: false},
        {id: 2, tipo: 'Online', nombre: 'Nike', estado: true},
        {id: 3, tipo: 'Mayoreo', nombre: 'Pirma', estado: true},
        {id: 4, tipo: 'Mayoreo', nombre: 'Under Armor', estado: false},
        {id: 5, tipo: 'Menudeo', nombre: 'PowerLiftingSportWear', estado: true},
        {id: 6, tipo: 'Menudeo', nombre: 'Felter', estado: true}
      ]

      const [prodcutos, setProductos] = useState(PRODUCTS);

      const addProducto = (prodcuto) =>{
        prodcuto.id = prodcuto.length + 1;
        setProductos([...prodcutos, prodcuto])
      }

      console.log(PRODUCTS)
    return(
        <div className="container ">
            <div className="flex-row">
                <div className="flex-large">
                    <FilterableProductTable products = {prodcutos}/>
                </div>
                <div className="flex-large">
                    <FormAltaProductos addProducto={addProducto}/>
                </div>
            </div>

            <div className="container">
                <FilterableProveedorTable proveedores = {PROVEEDORES}/>
            </div>
        </div>
    )
}

export default Inicio