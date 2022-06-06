import { Router } from "express";

import { makeExpressCallback } from "@proficient/functions";
import { 
    fetchProjectsController
} from "@proficient/services/projects";

const router = Router();

router.get(
    "/projects",
    makeExpressCallback(fetchProjectsController)
);

export default router;