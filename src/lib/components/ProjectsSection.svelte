<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { getFeaturedProjects } from '$lib/data/projects';

	const featuredProjects = getFeaturedProjects();
</script>

<section id="projects" class="projects-section">
	<div class="projects-header">
		<h3>Featured Projects</h3>
	</div>

	<div class="projects-content">
		<div class="projects-grid">
			{#each featuredProjects as project (project.id)}
				<ProjectCard {project} compact={true} />
			{/each}
		</div>

		<div class="projects-cta">
			<a href="/projects" class="btn btn-outline">
				<span>View All Projects</span>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</section>

<style>
	.projects-section {
		margin: var(--spacing-2xl) 0;
	}

	.projects-header {
		text-align: center;
		margin-bottom: var(--spacing-xl);
	}

	.projects-header h3 {
		font-size: 1.75rem;
		font-variation-settings: 'wght' 600;
		margin-bottom: var(--spacing-sm);
		color: var(--color-text);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: var(--spacing-xl);
		margin-bottom: var(--spacing-xl);
	}

	/* Desktop specific improvements */
	@media (min-width: 1024px) {
		.projects-section {
			display: grid;
			grid-template-columns: 280px 1fr;
			gap: var(--spacing-2xl);
			align-items: flex-start;
			margin: var(--spacing-3xl) 0;
		}

		.projects-header {
			text-align: left;
			margin-bottom: 0;
			align-self: start;
			position: sticky;
			top: var(--spacing-xl);
		}

		.projects-grid {
			grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
			gap: var(--spacing-2xl);
			margin-bottom: var(--spacing-xl);
		}

		.projects-cta {
			justify-content: flex-start;
			margin-top: var(--spacing-2xl);
		}
	}

	.projects-cta {
		display: flex;
		justify-content: center;
		margin-top: var(--spacing-2xl);
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-sm);
		padding: var(--spacing-md) var(--spacing-lg);
		border-radius: var(--radius-sm);
		text-decoration: none;
		font-weight: 500;
		transition: all 0.2s ease;
		border: 2px solid transparent;
		will-change: transform;
	}

	.btn-outline {
		background: transparent;
		color: var(--color-primary);
		border-color: var(--color-primary);
	}

	.btn-outline:hover {
		background: var(--color-primary);
		color: white;
		transform: translateY(-1px);
	}

	.btn svg {
		width: 18px;
		height: 18px;
		transition: transform 0.2s ease;
		will-change: transform;
	}

	.btn:hover svg {
		transform: translateX(2px);
	}

	/* Mobile and tablet responsiveness */
	@media (max-width: 1023px) {
		.projects-section {
			display: block;
		}

		.projects-header {
			text-align: center;
			margin-bottom: var(--spacing-xl);
		}

		.projects-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-lg);
		}

		.projects-header h3 {
			font-size: 1.5rem;
		}

		.projects-cta {
			justify-content: center;
		}
	}
</style>
