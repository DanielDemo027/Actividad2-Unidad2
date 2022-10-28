import { useState } from "react"
import ProveedorSearchBar from "./ProveedorSearchBar";
import ProveedorTable from "./ProveedorTable";

const FilterableProveedorTable = (props) => {
    const [filterText, setFilterText] = useState('');
    const [inActiveOnly, setInActiveOnly] = useState(false);

    return(
        <div>
            <h1>Proveedores</h1>
            <ProveedorSearchBar
                filterText={filterText}
                inActiveOnly={inActiveOnly}
                onFilterTextChange={text => setFilterText(text)}
                onInActiveChange={estado => setInActiveOnly(estado)}
            />

            <ProveedorTable
                proveedores={props.proveedores}
                filterText={filterText}
                inActiveOnly={inActiveOnly}
            />
        </div>
    )
}

export default FilterableProveedorTable;