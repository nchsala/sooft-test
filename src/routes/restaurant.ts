import { Request, Response, NextFunction, Router } from "express";
import * as controller from "../controllers/restaurants";
export const router = Router()

router.get('/', controller.getList )
router.get('/:kindOfRestaurant', controller.find )
router.post('/', controller.postOne )