<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { getAllProjects, type Project } from '$lib/data/projects';

	const allProjects = getAllProjects();

	let selectedFilter: 'all' | Project['status'] = 'all';
	let filteredProjects = allProjects;

	const filterProjects = (filter: 'all' | Project['status']) => {
		if (selectedFilter === filter) return;
		selectedFilter = filter;

		if (filter === 'all') {
			filteredProjects = allProjects;
		} else {
			filteredProjects = allProjects.filter((project) => project.status === filter);
		}
	};
</script>

<SEO
	title="Projects - Jaagop Janson"
	description="Explore my portfolio of development projects featuring modern technologies like SvelteKit, React, TypeScript, and innovative solutions for real-world problems."
	url="/projects"
	keywords="projects, portfolio, web development, SvelteKit, React, TypeScript, JavaScript, mobile apps, full-stack development"
/>

<main class="projects-page">
	<div class="container">
		<header class="page-header">
			<h1>My Projects</h1>
			<p class="page-subtitle">
				A collection of {allProjects.length} projects showcasing my skills in development, from simple
				websites to complex applications.
			</p>
		</header>

		<div class="filters">
			<button
				class="filter-btn"
				class:active={selectedFilter === 'all'}
				on:click={() => filterProjects('all')}
			>
				All Projects ({allProjects.length})
			</button>
			<button
				class="filter-btn"
				class:active={selectedFilter === 'completed'}
				on:click={() => filterProjects('completed')}
			>
				Completed ({allProjects.filter((p) => p.status === 'completed').length})
			</button>
			<button
				class="filter-btn"
				class:active={selectedFilter === 'ongoing'}
				on:click={() => filterProjects('ongoing')}
			>
				In Progress ({allProjects.filter((p) => p.status === 'ongoing').length})
			</button>
			<button
				class="filter-btn"
				class:active={selectedFilter === 'planning'}
				on:click={() => filterProjects('planning')}
			>
				Planning ({allProjects.filter((p) => p.status === 'planning').length})
			</button>
		</div>

		<div class="projects-grid">
			{#each filteredProjects as project, index (project.title)}
				<div in:scale={{ duration: 400, delay: index * 80, easing: quintOut }}>
					<ProjectCard {project} compact={false} />
				</div>
			{/each}
		</div>

		{#if filteredProjects.length === 0}
			<div class="empty-state" in:fade={{ duration: 300, delay: 200 }}>
				<h3>No projects found</h3>
				<p>No projects match the selected filter.</p>
			</div>
		{/if}

		<div class="back-to-home">
			<Button href="/" variant="outline">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M19 12H5M12 19l-7-7 7-7" />
				</svg>
				Back to Home
			</Button>
		</div>
	</div>
</main>

<style>
	.projects-page {
		min-height: 100vh;
		padding: var(--spacing-2xl) 0;
		color: var(--color-text);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--spacing-md);
	}

	.page-header {
		text-align: center;
		margin-bottom: var(--spacing-2xl);
	}

	.page-header h1 {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 700;
		margin-bottom: var(--spacing-md);
		color: var(--color-text);
	}

	.page-subtitle {
		font-size: 1.2rem;
		color: var(--color-text-muted);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.filters {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
		margin-bottom: var(--spacing-2xl);
	}

	.filter-btn {
		padding: var(--spacing-sm) var(--spacing-md);
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: var(--radius-sm);
		color: var(--color-text-muted);
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.filter-btn::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
		transition: left 0.5s ease;
	}

	.filter-btn:hover {
		background: rgba(255, 255, 255, 0.08);
		color: var(--color-text);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.filter-btn:hover::before {
		left: 100%;
	}

	.filter-btn.active {
		background: var(--color-primary);
		border-color: var(--color-primary);
		color: white;
		transform: translateY(-1px);
		box-shadow: 0 6px 20px rgba(0, 102, 204, 0.3);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: var(--spacing-xl);
		margin-bottom: var(--spacing-2xl);
	}

	.projects-grid > div {
		transform-origin: center;
	}

	.empty-state {
		text-align: center;
		padding: var(--spacing-2xl);
		color: var(--color-text-muted);
	}

	.empty-state h3 {
		font-size: 1.5rem;
		margin-bottom: var(--spacing-sm);
		color: var(--color-text);
	}

	.back-to-home {
		display: flex;
		justify-content: center;
		margin-top: var(--spacing-2xl);
		padding-top: var(--spacing-2xl);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	:global(.back-to-home .btn svg) {
		width: 18px;
		height: 18px;
		margin-right: var(--spacing-xs);
		transition: transform 0.2s ease;
	}

	:global(.back-to-home .btn:hover svg) {
		transform: translateX(-2px);
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.projects-page {
			padding: var(--spacing-xl) 0;
		}

		.container {
			padding: 0 var(--spacing-sm);
		}

		.page-header h1 {
			font-size: 2.5rem;
		}

		.page-subtitle {
			font-size: 1.1rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-lg);
		}

		.filters {
			flex-direction: column;
			align-items: center;
		}

		.filter-btn {
			width: 100%;
			max-width: 300px;
			text-align: center;
		}
	}
</style>
