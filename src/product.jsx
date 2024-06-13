import "./Product.css";
import Price from "./Price";

function Product({title ,idx}){
    let oldPrice = ["12,495 ","11,900","1,599","599"];
    let newPrice = ["8,999","9,199","899 ","278"];
    let Description = [["8,000 DPI","5 Programable buttons"] ,["Intutive surface","Designed for ipad"],["Designed for ipad pro","Intutive surface"],["Wireless","Wireless orientations"]]
    return (
        <div className="Product">
          <h4>{title}</h4>
          <p>{Description[idx][0]}</p>
          <p>{Description[idx][1]}</p>
          <Price oldPrice = {oldPrice[idx]} newPrice = {newPrice[idx]}/>
        </div>
    );
}

export default Product;