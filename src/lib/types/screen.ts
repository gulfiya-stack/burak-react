/** REACT APP STATE **/

import { Member } from "./member";
import { Product } from "./product";
/**Avval butun ilova state’ining tuzilishini, 
 * keyin esa har bir ekran state’ining ichki qismlarini ko‘rsatamiz. */


export interface AppRootState {
    // BUTUN ILOVA STATELAR(SCREEN)
    homePage: HomePageState;
    /*type 
    “AppRootState obyektida homePage degan maydon bor. 
    Uning turi HomePageState.”
    */
    productsPage: ProductsPageState;
}


// Bir ekran state’ining ichki qismlari
/** HOMEPAGE **/
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];

}

/** PRODUCTS PAGE **/
export interface ProductsPageState {
    restaurant: Member | null;
    products: Product[];
    chosenProduct: Product | null;
}
/** ORDERS PAGE **/


