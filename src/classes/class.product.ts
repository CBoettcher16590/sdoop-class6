import { withRating } from './mixin.rating';

class Product {

    price:number = 4.99

}

export const RatedProduct = withRating( Product );