<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import Button from '$lib/components/ui/Button.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';

	export let project: Project;
	export let compact = false; // For main page preview vs full projects page
</script>

<article class="project-card" class:compact>
	{#if project.image}
		<div class="project-image">
			<enhanced:img
				src={typeof project.image === 'string' ? project.image : ''}
				alt={project.title}
				loading="lazy"
				width="480"
				height="270"
			/>
			<div class="project-overlay">
				<div class="project-links">
					{#if project.liveUrl}
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="project-link"
							aria-label="View Live Project"
						>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								<polyline points="15,3 21,3 21,9" />
								<line x1="10" y1="14" x2="21" y2="3" />
							</svg>
						</a>
					{/if}
					{#if project.githubUrl}
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="project-link"
							aria-label="View Source Code"
						>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path
									d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
								/>
							</svg>
						</a>
					{/if}
				</div>
			</div>
		</div>
	{/if}

	<div class="project-content">
		<div class="project-header">
			<h3 class="project-title">{project.title}</h3>
			<div class="project-meta">
				<span class="project-year">{project.year}</span>
				<Tag
					variant={project.status === 'completed'
						? 'success'
						: project.status === 'ongoing'
							? 'warning'
							: 'info'}
					size="sm"
				>
					{project.status === 'completed'
						? 'Completed'
						: project.status === 'ongoing'
							? 'Ongoing'
							: 'Planning'}
				</Tag>
				{#if project.company}
					<div class="project-company">
						{#if project.company.url}
							<a
								href={project.company.url}
								target="_blank"
								rel="noopener noreferrer"
								class="company-link"
							>
								<svg
									class="company-icon"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
									<circle cx="8.5" cy="7" r="4" />
									<path d="M20 8v6M23 11h-6" />
								</svg>
								{project.company.name}
							</a>
						{:else}
							<span class="company-name">
								<svg
									class="company-icon"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
									<circle cx="8.5" cy="7" r="4" />
									<path d="M20 8v6M23 11h-6" />
								</svg>
								{project.company.name}
							</span>
						{/if}
					</div>
				{/if}
			</div>
		</div>

		<p class="project-description">
			{compact && project.shortDescription ? project.shortDescription : project.description}
		</p>

		<div class="project-technologies">
			{#each project.technologies as tech (tech)}
				<Tag variant="primary">{tech}</Tag>
			{/each}
		</div>

		{#if !compact}
			<div class="project-actions">
				{#if project.liveUrl}
					<Button href={project.liveUrl} variant="solid">View Live</Button>
				{/if}
				{#if project.githubUrl}
					<Button href={project.githubUrl} variant="outline">View Code</Button>
				{/if}
			</div>
		{/if}
	</div>
</article>

<style>
	.project-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: var(--radius-lg);
		overflow: hidden;
		transition: all 0.3s ease;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.project-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
		border-color: rgba(96, 165, 250, 0.3);
	}

	.project-card.compact {
		min-height: 400px;
	}

	.project-image {
		position: relative;
		aspect-ratio: 16/9;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.2);
		user-select: none;
	}

	.project-image :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.project-card:hover .project-image :global(img) {
		transform: scale(1.05);
	}

	.project-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%);
		opacity: 0;
		transition: opacity 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.project-card:hover .project-overlay {
		opacity: 1;
	}

	.project-links {
		display: flex;
		gap: var(--spacing-sm);
	}

	.project-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		background: rgba(255, 255, 255, 0.9);
		color: var(--color-primary);
		border-radius: 50%;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.project-link:hover {
		background: var(--color-primary);
		color: white;
		transform: scale(1.1);
	}

	.project-link svg {
		width: 20px;
		height: 20px;
	}

	.project-content {
		padding: var(--spacing-lg);
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.project-header {
		margin-bottom: var(--spacing-sm);
	}

	.project-title {
		font-size: 1.4rem;
		font-weight: 600;
		color: var(--color-text);
		margin: 0 0 var(--spacing-xs);
		line-height: 1.3;
	}

	.project-meta {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		margin-bottom: var(--spacing-sm);
		flex-wrap: wrap;
	}

	.project-year {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		font-weight: 500;
	}

	.project-company {
		display: flex;
		align-items: center;
	}

	.company-link,
	.company-name {
		display: flex;
		align-items: center;
		gap: calc(var(--spacing-xs) * 0.5);
		font-size: 0.8rem;
		color: #93c5fd;
		text-decoration: none;
		padding: calc(var(--spacing-xs) * 0.5) var(--spacing-xs);
		border-radius: var(--radius-sm);
		background: rgba(147, 197, 253, 0.15);
		border: 1px solid rgba(147, 197, 253, 0.3);
		transition: all 0.2s ease;
		font-weight: 500;
	}

	.company-link:hover {
		background: rgba(147, 197, 253, 0.25);
		color: #bfdbfe;
		transform: translateY(-1px);
		border-color: rgba(147, 197, 253, 0.4);
	}

	.company-icon {
		width: 12px;
		height: 12px;
		opacity: 0.9;
	}

	.project-description {
		color: var(--color-text-paragraph);
		line-height: 1.6;
		margin-bottom: var(--spacing-md);
		flex: 1;
	}

	.project-technologies {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
		margin-bottom: var(--spacing-md);
	}

	.project-actions {
		display: flex;
		gap: var(--spacing-sm);
		margin-top: auto;
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.project-content {
			padding: var(--spacing-md);
		}

		.project-title {
			font-size: 1.2rem;
		}

		.project-actions {
			flex-direction: column;
		}
	}
</style>
