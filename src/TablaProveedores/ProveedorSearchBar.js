const ProveedorSearchBar = (props) => {
    const handleFilterTextChange = (e) => {
        props.onFilterTextChange(e.target.value);
    }

    const handleInActiveChange = (e) => {
        props.onInActiveChange(e.target.checked);
    }

    return(
        <form>
            <input
                type='text'
                placeholder="Buscar.."
                value={props.filterText}
                onChange={handleFilterTextChange}
            />

            <p>
                <input
                    type='checkbox'
                    checked={props.inStockOnly}
                    onChange={handleInActiveChange}
                /> {" "}
                Solo mostrar los proveedores activos
            </p>
        </form>
    )
}

export default ProveedorSearchBar;