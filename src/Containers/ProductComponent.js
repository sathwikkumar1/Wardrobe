import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { filterCategories } from '../redux/actions/productAction';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const selectedCategories = useSelector((state)=>state.allProducts.checkedCategories)

    const filteredProducts = useSelector((state)=>state.allProducts.filteredProducts)

    // let filterProducts = selectedCategories != null ? 
    // products.filter((product)=>selectedCategories.includes(product.category)) :
    // products

    const renderList = filteredProducts.map((product) => {
        const { id, title, image, price, category } = product;  

        return (
            <div className="column" key={id} style={{ marginTop: '50px' }}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} style={{ height: '300px' }} />
                            </div>
                            <div className="content" style={{ height: 'fit-content' }}>
                                <div className="header">{title.slice(0,20)} ...</div>
                                <div className="meta price">${price}</div>
                                <div className="meta category">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <div className="four column row">
            {renderList}
        </div>
    );
};

export default ProductComponent;
                    