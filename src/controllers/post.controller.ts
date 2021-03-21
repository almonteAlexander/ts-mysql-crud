import { Request, Response } from "express";
import IPost from '../interface/Post'
import Database from '../database'

export default class PostController{
    /**
     * 
     * @returns A response of the posts list.
     */
    static async getAllPosts(req: Request, res: Response): Promise<Response>{
        const posts: any = await Database.runQuery('SELECT * FROM posts');
        return res.json(posts);
    }

    static async getPost(req: Request, res: Response): Promise<Response>{
        try {
            const postId: number = parseInt(req.params.id);
            const post: IPost = await Database.runQuery(`SELECT * FROM posts WHERE id = ${postId}`);
            return res.json(post);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    /**
     * 
     * @returns A response of the new post.
     */
    static async createPost(req: Request, res: Response): Promise<Response>{
        const newPost: IPost = req.body;
        try {
            await Database.runQuery(`
            INSERT INTO posts(title, description, image_url)
            VALUES('${newPost.title}, '${newPost.description}', '${newPost.image_url}');
            `);
            return res.json(newPost);
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    /**
     *  
     * @returns A response of the deleted post.
     */
    static async deletePost(req: Request, res: Response): Promise<Response>{
        try {
            const postId: number = parseInt(req.params.id);
            await Database.runQuery(`DELETE FROM posts WHERE id = ${postId}`);
            return res.json({ message: 'Post Deleted!' });
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}