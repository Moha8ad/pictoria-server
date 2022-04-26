import express from 'express';

import postControllers from '../controllers/posts.js';

const router = express.Router();

router.get('/', postControllers.getPosts);
router.post('/', postControllers.createPost);
router.get('/:id', postControllers.getPost);
router.patch('/:id', postControllers.updatePost);
router.delete('/:id', postControllers.deletePost);
router.patch('/:id/likePost', postControllers.likePost);

export default router;