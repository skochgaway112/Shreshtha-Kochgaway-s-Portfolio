import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";


const ProductList = () => {
    return (
        <div className="pl">
        <div className="p1-texts">
            <h1 classname="p1-title">Create and Inspire. it's Shreshtha</h1>
       <p className="p1-desc">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nesciunt numquam molestias quae ad veritatis nihil modi optio ullam dolorem dolor aut, porro dolorum, excepturi eveniet ducimus dicta. Perspiciatis veniam iusto blanditiis corrupti iste.

       </p>
        </div>
  <div className="p1-list">
  {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
        </div>
    )
}

export default ProductList;