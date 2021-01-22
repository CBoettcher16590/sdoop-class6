import { Series } from "./class.series";
import { withRating } from "./mixin.rating";

export class Article {

    series?:Series;

}

export const RatedArticle = withRating( Article );