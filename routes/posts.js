import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/k/', getPosts);
router.post('/k/', createPost);
router.get('/k/:id', getPost);
router.patch('/k/:id', updatePost);
router.delete('/k/:id', deletePost);
router.patch('/k/:id/likePost', likePost);

export default router;