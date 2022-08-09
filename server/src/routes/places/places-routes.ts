import express from "express";
import {
  httpCreatePlace,
  httpDeletePlace,
  httpEditPlace,
  httpFetchPlacesByPlaceId,
  httpFetchPlacesByUserID,
} from "./places-controllers";
import { check } from "express-validator";
const placesRoutes = express.Router();

placesRoutes.post(
  "/",
  [
    check("description").isLength({ min: 8 }),
    check("address").not().isEmpty(),
    check("title").not().isEmpty(),
    check("creator").not().isEmpty(),
  ],
  httpCreatePlace
);
placesRoutes.get("/user/:uid", httpFetchPlacesByUserID);

placesRoutes.get("/:pid", httpFetchPlacesByPlaceId);

placesRoutes.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 8 })],
  httpEditPlace
);

placesRoutes.delete("/:pid", httpDeletePlace);

export default placesRoutes;
