import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = (props) =>{
    const filerText = props.filterText;
    const inStockOnly = props.inStockOnly;

    const rows = [];

    let lastCategory = null;

    props.products.forEach((product) => {
        if(product.name.indexOf(filerText) === -1){
            return;
        }

        if(inStockOnly && !product.stocked){
            return;
        }

        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            )
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        )

        lastCategory = product.category;
    })

    return(
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default ProductTable;