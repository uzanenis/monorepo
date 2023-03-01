import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "react-router-dom";
import { json } from "react-router-dom";
import { PostList } from "~/features/post/PostList";
import type { Post } from "~/models/post.server";
import { getActivePosts } from "~/models/post.server";

type LoaderData = {
  posts: Post[];
};

export const loader: LoaderFunction = async () => {
  const posts = await getActivePosts();

  return json<LoaderData>({ posts });
};

export const MostActivePosts = () => {
  const { posts } = useLoaderData();

  return <PostList posts={posts} />;
};

export default MostActivePosts;