import { getBlogPost } from '$lib/data/blog-loader';
import { error } from '@sveltejs/kit';

export const load = ({ params }: { params: { slug: string } }) => {
	const post = getBlogPost(params.slug);

	if (!post) {
		throw error(404, 'Blog post not found');
	}

	return {
		post
	};
};
