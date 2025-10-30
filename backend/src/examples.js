import { initDatabase } from './db/init.js';
import { Post } from './db/models/post.js';
import dotenv from 'dotenv';
dotenv.config();
await initDatabase();
const post = new Post({
  title: 'Hello from the second post!',
  author: 'John Doe',
  contents: 'This new post is stored in a MongoDB database using Mongoose.',
  imageUrl: 'https://example.com/image2.jpg',
  tags: ['other'],
});
await post.save();
const posts = await Post.find();
console.log(posts);
