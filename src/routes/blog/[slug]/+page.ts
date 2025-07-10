import type { PageLoad } from './$types';
import { getPostBySlug } from '$lib/data/blog';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const post = getPostBySlug(params.slug);

	if (!post) {
		throw error(404, 'Blog post not found');
	}

	return {
		post
	};
};
