import { Router } from "express";

import { makeExpressCallback } from "@proficient/functions";
import {
    createSpecialController,
    fetchSpecialsController,
    updateSpecialController
} from "@proficient/services/specials";

const router = Router();

router.post(
    "/specials",
    makeExpressCallback(createSpecialController)
);

router.get(
    "/specials",
    makeExpressCallback(fetchSpecialsController)
);

router.put(
    "/specials:id",
    makeExpressCallback(updateSpecialController)
);

export default router;