<script lang="ts">
	import type { Project } from '$lib/data/projects';

	export let project: Project;
	export let compact = false; // For main page preview vs full projects page
</script>

<article class="project-card" class:compact>
	{#if project.image}
		<div class="project-image">
			<enhanced:img src={project.image as any} alt={project.title} />
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
				<span
					class="project-status"
					class:completed={project.status === 'completed'}
					class:ongoing={project.status === 'ongoing'}
					class:planning={project.status === 'planning'}
				>
					{project.status === 'completed'
						? 'Completed'
						: project.status === 'ongoing'
							? 'Ongoing'
							: 'Planning'}
				</span>
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
			{#each project.technologies as tech}
				<span class="tech-tag">{tech}</span>
			{/each}
		</div>

		{#if !compact}
			<div class="project-actions">
				{#if project.liveUrl}
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-primary"
					>
						View Live
					</a>
				{/if}
				{#if project.githubUrl}
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-outline"
					>
						View Code
					</a>
				{/if}
			</div>
		{/if}
	</div>
</article>

<style>
	.project-card {
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
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
		backdrop-filter: blur(10px);
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

	.project-status {
		font-size: 0.8rem;
		padding: calc(var(--spacing-xs) * 0.5) var(--spacing-xs);
		border-radius: var(--radius-sm);
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.project-status.completed {
		background: rgba(34, 197, 94, 0.2);
		color: #4ade80;
		border: 1px solid rgba(34, 197, 94, 0.3);
	}

	.project-status.ongoing {
		background: rgba(251, 191, 36, 0.2);
		color: #fbbf24;
		border: 1px solid rgba(251, 191, 36, 0.3);
	}

	.project-status.planning {
		background: rgba(168, 85, 247, 0.2);
		color: #a855f7;
		border: 1px solid rgba(168, 85, 247, 0.3);
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

	.tech-tag {
		padding: calc(var(--spacing-xs) * 0.75) var(--spacing-sm);
		background: rgba(96, 165, 250, 0.15);
		color: #93c5fd;
		border-radius: var(--radius-sm);
		font-size: 0.8rem;
		font-weight: 500;
		border: 1px solid rgba(96, 165, 250, 0.25);
		transition: all 0.2s ease;
	}

	.tech-tag:hover {
		background: rgba(96, 165, 250, 0.25);
		transform: translateY(-1px);
	}

	.project-actions {
		display: flex;
		gap: var(--spacing-sm);
		margin-top: auto;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: var(--spacing-sm) var(--spacing-md);
		border-radius: var(--radius-sm);
		text-decoration: none;
		font-weight: 500;
		font-size: 0.9rem;
		transition: all 0.2s ease;
		border: 2px solid transparent;
	}

	.btn-primary {
		background: var(--color-primary);
		color: white;
		border-color: var(--color-primary);
	}

	.btn-primary:hover {
		background: var(--color-primary-hover);
		border-color: var(--color-primary-hover);
		transform: translateY(-1px);
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

		.btn {
			justify-content: center;
		}
	}
</style>
