import { productRender } from "./inventory";
import { products } from "./state";

export const  initialRender = () => {
    // productSidebar.classList.remove("translate-x-full");
    productRender(products)
    
}


