import { getAllBlogPosts, getAllTags } from '$lib/data/blog-loader';

export const load = async () => {
	const posts = getAllBlogPosts();
	const tags = getAllTags();

	return {
		posts,
		tags
	};
};
