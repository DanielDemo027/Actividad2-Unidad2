import ProveedorCategoryRow from "./ProveedorCategoryRow";
import ProveedorRow from "./ProveedorRow";

const ProveedorTable = (props) => {
    const filterText = props.filterText;
    const inActiveOnly = props.inActiveOnly

    const rows = [];
    let lastTipo = null;

    props.proveedores.forEach((proveedor) => {
        if(proveedor.nombre.indexOf(filterText) === -1){
            return;
        }

        if(inActiveOnly && !proveedor.estado){
            return;
        }

        if(proveedor.tipo !== lastTipo){
            rows.push(
                <ProveedorCategoryRow
                    tipo = {proveedor.tipo}
                    key = {proveedor.tipo}
                />
            )
        }

        rows.push(
            <ProveedorRow
                proveedor = {proveedor}
                key = {proveedor.nombre}
            />
        )

        lastTipo = proveedor.tipo;
    })

    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
} 

export default ProveedorTable;