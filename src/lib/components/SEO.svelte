<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		keywords?: string;
		url?: string;
		image?: string;
		type?: string;
		article?: boolean;
		publishedTime?: string;
		modifiedTime?: string;
		author?: string;
		tags?: string[];
	}

	let {
		title = 'Jaagop Janson - Senior Software Developer',
		description = 'Senior Software Developer specializing in web applications, mobile development, and modern tech stacks.',
		keywords = 'Jaagop Janson, software developer, web development, TypeScript, React, Kotlin, Swift, portfolio',
		url = 'https://jaagop.eu',
		image = 'https://jaagop.eu/og-image.jpg',
		type = 'website',
		article = false,
		publishedTime,
		modifiedTime,
		author = 'Jaagop Janson',
		tags = []
	}: Props = $props();

	// Construct full URL if relative path provided
	let fullUrl = $derived(url.startsWith('http') ? url : `https://jaagop.eu${url}`);

	// Combine default keywords with page-specific tags
	let allKeywords = $derived(tags.length > 0 ? `${keywords}, ${tags.join(', ')}` : keywords);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={allKeywords} />
	<meta name="author" content={author} />

	<!-- Canonical URL -->
	<link rel="canonical" href={fullUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={article ? 'article' : type} />
	<meta property="og:url" content={fullUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content="Jaagop Janson" />

	{#if article && publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}

	{#if article && modifiedTime}
		<meta property="article:modified_time" content={modifiedTime} />
	{/if}

	{#if article && author}
		<meta property="article:author" content={author} />
	{/if}

	{#if tags.length > 0}
		{#each tags as tag (tag)}
			<meta property="article:tag" content={tag} />
		{/each}
	{/if}

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={fullUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />

	<!-- Additional SEO -->
	<meta name="robots" content="index, follow" />
	<meta name="format-detection" content="telephone=no" />
</svelte:head>
