import { Request, Response, NextFunction, urlencoded } from "express";
import { DuplicateKeyError } from "../helpers/errors";
import { Restaurant, RestaurantModel } from "../models/restaurant.model";

export function getList(req: Request, res: Response, next: NextFunction) {
    let restaurants: Restaurant[] = RestaurantModel.find()
    res.json( restaurants )
}
export function find(req: Request, res: Response, next: NextFunction) {
    let kindOfRestaurant = req.params.kindOfRestaurant
    let decodedKindOfRestaurant = decodeURI(kindOfRestaurant)
    const restaurants: Restaurant[] = RestaurantModel.find({kindOfRestaurant: decodedKindOfRestaurant})
    res.json( restaurants )
}
export function postOne(req: Request, res: Response, next: NextFunction) {
    let restaurant = new RestaurantModel(req.body)
    let error = restaurant.save()
    if ( error ) {
        return next( new DuplicateKeyError("name") )
    }
    res.status(201).json( restaurant )
}