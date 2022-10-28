const ProveedorCategoryRow = (props) =>{
    const tipo = props.tipo;
    return(
        <tr>
           <th colSpan={2}>{tipo}</th> 
        </tr>
    )
}

export default ProveedorCategoryRow;