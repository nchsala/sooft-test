import { Router, Request, Response, NextFunction, json, urlencoded  } from "express";
import { router as restaurantRouter } from "./restaurant";
export const router = Router()
router.use( json() )
router.use( urlencoded({ extended: false }) )
router.use('/', restaurantRouter)

router.use('*', function(error: any, req: Request, res: Response, next: NextFunction) {
    res.status(error.status).json(error)
} )