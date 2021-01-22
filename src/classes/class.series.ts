import { Article } from "./class.article";
import { withRating } from "./mixin.rating";

export class Series {

    articles:Article[]=[];

}

export const RatedSeries = withRating( Series );