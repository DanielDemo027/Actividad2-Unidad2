const ProveedorRow = (props) =>{
    const proveedor = props.proveedor;
    const nombre = proveedor.estado ?
    proveedor.nombre : 
    <span style={{color: 'orange'}}>
        {proveedor.nombre}
    </span>

    return(
        <tr>
            <td>{proveedor.id}</td>
            <td>{nombre}</td>
        </tr>
    )
}

export default ProveedorRow;