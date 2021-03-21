import { Router } from 'express';
import PostController from '../controllers/post.controller';
const router: Router = Router();

router.route('/')
    .get(PostController.getAllPosts)
    .post(PostController.createPost);

router.route('/:id')
    .get([PostController.getPost])
    .delete(PostController.deletePost);

export default router;