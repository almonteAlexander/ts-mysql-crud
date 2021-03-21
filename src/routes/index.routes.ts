import { Router } from 'express';
import IndexController from '../controllers/index.controller';
const router: Router = Router();

router.route('/')
    .get(IndexController.welcome);

export default router;