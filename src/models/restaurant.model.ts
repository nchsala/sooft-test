import { Song } from "./songs.model";

export interface Restaurant {
    name?: string
    kindOfRestaurant?: string
    songs?: Song[]
}

class RestaurantDocument implements Restaurant {
    private father = RestaurantModel
    name: string = ""
    kindOfRestaurant: string = ""
    songs: Song[] = []
    constructor( attr: Restaurant) {
        if (attr.name) this.name = attr.name
        if (attr.kindOfRestaurant) this.kindOfRestaurant = attr.kindOfRestaurant
        if (attr.songs) this.songs = attr.songs
    }
    save() {
        if ( this.father.findOne({name: this.name}) ) return true
        else this.father.addRestaurant( this )
    }
}

export class RestaurantModel extends RestaurantDocument {
    static restaurants: RestaurantDocument[] = []
    static addRestaurant( v: RestaurantDocument) {
        RestaurantModel.restaurants.push( v )
    }
    static findOne(attributes: any) {
        return RestaurantModel.restaurants.find( (restaurant: any ) => {
            for (const key in attributes) {
                if ( typeof restaurant[key] == "undefined") return false
                if (attributes[key] !== restaurant[key])
                    return false
            }
            return true
        })
    }
    static find( attributes?: any ) {
        if (!attributes) return RestaurantModel.restaurants
        return RestaurantModel.restaurants.filter( (restaurant: any ) => {
            for (const key in attributes) {
                if ( typeof restaurant[key] == "undefined") return false
                if (attributes[key] !== restaurant[key])
                    return false
            }
            return true
        })
    }
    constructor(attr: Restaurant) {
        super(attr)
    }
}
