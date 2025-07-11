<script lang="ts">
	import { onMount } from 'svelte';

	export let experiences = [
		{
			title: 'Senior Software Developer',
			company: 'Telia Eesti AS',
			companyUrl: 'https://www.telia.ee',
			period: '2022 - Present',
			location: 'Estonia • Hybrid',
			description:
				'Leading development of scalable web applications and mentoring junior developers. Focus on architecture design and performance optimization.',
			tags: [
				'TypeScript',
				'React',
				'Node.js',
				'Kotlin',
				'Swift',
				'React Native',
				'Inferno',
				'Team Leadership'
			]
		},
		{
			title: 'Fullstack Developer',
			company: 'Acty OÜ',
			companyUrl: 'https://www.acty.ee/',
			period: '2021 - 2022',
			location: 'Estonia • Hybrid',
			description:
				'Developing Magento 2 web stores, custom modules, custom CMS pages, SEO, applying styling according to design guidelines.',
			tags: ['Magento 2', 'PHP', 'JavaScript', 'CSS', 'SEO']
		},
		{
			title: 'Frontend Developer',
			company: 'nuhvel.solutions',
			companyUrl: 'https://hans.nuhvel.eu/',
			period: '2019 - 2021',
			location: 'Estonia • Remote',
			description:
				'Fully custom front end development on Aurelia framework. Documenting, time management, team management and web development (Typescript, HTML5, CSS/SASS)',
			tags: ['Aurelia', 'TypeScript', 'HTML5', 'SASS', 'Team Management']
		},
		{
			title: 'Wordpress Developer',
			company: 'Andify OÜ',
			companyUrl: 'https://www.linkedin.com/company/andify-o%C3%BC/',
			period: '2021 - 2021',
			location: 'Estonia • Hybrid',
			description:
				'WordPress web development, fully custom themes, plugins and functions for real estate companies and online shops.',
			tags: ['WordPress', 'PHP', 'JavaScript', 'Custom Themes', 'Elementor', 'SEO']
		}
	];

	let timelineBeam: HTMLElement;
	let experienceItems: HTMLElement[] = [];

	onMount(() => {
		const setupExperience = () => {
			experienceItems.forEach((item, index) => {
				const header = item.querySelector('.experience-header') as HTMLElement;
				const content = item.querySelector('.experience-content') as HTMLElement;

				if (!header || !content) return;

				// Initialize first item as expanded
				if (index === 0) {
					content.style.maxHeight = content.scrollHeight + 'px';
					content.style.opacity = '1';
					item.classList.add('expanded');
				} else {
					content.style.maxHeight = '0';
					content.style.opacity = '0';
					item.classList.remove('expanded');
				}

				// Toggle functionality
				const toggleItem = () => {
					const isExpanded = item.classList.contains('expanded');

					if (isExpanded) {
						content.style.maxHeight = '0';
						content.style.opacity = '0';
						item.classList.remove('expanded');
					} else {
						content.style.maxHeight = content.scrollHeight + 'px';
						content.style.opacity = '1';
						item.classList.add('expanded');
					}
				};

				// Event listeners
				header.addEventListener('click', toggleItem);
				header.addEventListener('keydown', (e: Event) => {
					const event = e as KeyboardEvent;
					if (event.key === 'Enter' || event.key === ' ') {
						event.preventDefault();
						toggleItem();
					}
				});

				// Tracker beam animation
				item.addEventListener('mouseenter', () => {
					if (!timelineBeam) return;

					const itemRect = item.getBoundingClientRect();
					const timelineRect = timelineBeam.parentElement?.getBoundingClientRect();
					if (!timelineRect) return;

					const relativeTop = itemRect.top - timelineRect.top;
					const itemHeight = itemRect.height;

					timelineBeam.style.transform = `translateY(${relativeTop + itemHeight / 2}px)`;
					timelineBeam.style.opacity = '1';
				});

				item.addEventListener('mouseleave', () => {
					if (!timelineBeam) return;
					timelineBeam.style.opacity = '0.3';
					timelineBeam.style.transform = 'translateY(0)';
				});
			});
		};

		// Small delay to ensure DOM is ready
		setTimeout(setupExperience, 100);
	});
</script>

<section id="experience" class="experience-section">
	<h3>Experience</h3>
	<div class="experience-timeline">
		<div class="timeline-track">
			<div class="timeline-beam" bind:this={timelineBeam}></div>
		</div>
		<div class="experience-items">
			{#each experiences as experience, index (experience.title + experience.company)}
				<div class="experience-item" bind:this={experienceItems[index]} data-experience={index}>
					<div class="experience-header" role="button" tabindex="0">
						<div class="experience-title-group">
							<h4>
								{experience.title} @
								{#if experience.companyUrl}
									<a
										href={experience.companyUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="company-link"
									>
										{experience.company}
									</a>
								{:else}
									<span class="company-name">{experience.company}</span>
								{/if}
							</h4>
							<div class="experience-meta">
								<span class="experience-period">{experience.period}</span>
								{#if experience.location}
									<span class="experience-location">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											class="location-icon"
										>
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
											<circle cx="12" cy="10" r="3" />
										</svg>
										{experience.location}
									</span>
								{/if}
							</div>
						</div>
						<div class="expand-icon">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M6 9l6 6 6-6" />
							</svg>
						</div>
					</div>
					<div class="experience-content">
						<p>{experience.description}</p>
						{#if experience.tags && experience.tags.length > 0}
							<div class="experience-tags">
								{#each experience.tags as tag (tag)}
									<span class="tag">{tag}</span>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Experience Section */
	.experience-section {
		margin: var(--spacing-2xl) 0;
	}

	/* Desktop layout for experience section */
	@media (min-width: 1024px) {
		.experience-section {
			display: grid;
			grid-template-columns: 280px 1fr;
			gap: var(--spacing-2xl);
			align-items: flex-start;
			margin: var(--spacing-3xl) 0;
		}

		.experience-section h3 {
			margin-bottom: 0;
			text-align: left;
			align-self: start;
			position: sticky;
			top: var(--spacing-xl);
		}

		.experience-timeline {
			margin-top: 0;
		}
	}

	.experience-timeline {
		position: relative;
		margin-top: var(--spacing-lg);
	}

	/* Mobile and tablet responsiveness */
	@media (max-width: 1023px) {
		.experience-section {
			display: block;
		}

		.experience-section h3 {
			margin-bottom: var(--spacing-md);
		}

		.experience-timeline {
			margin-top: var(--spacing-lg);
		}
	}

	.timeline-track {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 4px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 2px;
		z-index: 1;
	}

	.timeline-beam {
		position: absolute;
		left: 0;
		top: 0;
		width: 4px;
		height: 40px;
		background: linear-gradient(
			180deg,
			transparent 0%,
			var(--color-primary) 20%,
			#93c5fd 50%,
			var(--color-primary) 80%,
			transparent 100%
		);
		border-radius: 2px;
		opacity: 0.3;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 0 20px rgba(96, 165, 250, 0.5);
		z-index: 2;
	}

	.experience-items {
		padding-left: var(--spacing-lg);
		margin-left: var(--spacing-xs);
	}

	.experience-item {
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-left: 3px solid rgba(255, 255, 255, 0.3);
		border-radius: var(--radius-md);
		margin-bottom: var(--spacing-md);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	/* GPU-accelerated border animation */
	.experience-item::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 3px;
		height: 100%;
		background: var(--color-primary);
		transform: scaleY(0);
		transform-origin: bottom;
		transition: transform 0.3s ease;
		will-change: transform;
	}

	.experience-item::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.02) 0%,
			transparent 50%,
			rgba(96, 165, 250, 0.03) 100%
		);
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
		z-index: 1;
	}

	.experience-item:hover::before {
		opacity: 1;
	}

	.experience-item:hover {
		transform: translateX(4px);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
	}

	.experience-item:hover::after {
		transform: scaleY(1);
	}

	:global(.experience-item.expanded)::before {
		opacity: 0.7;
	}

	:global(.experience-item.expanded)::after {
		transform: scaleY(1);
	}

	:global(.experience-item.expanded .expand-icon svg) {
		transform: rotate(180deg);
	}

	.experience-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--spacing-lg);
		margin-bottom: 0;
		cursor: pointer;
		outline: none;
		border-radius: var(--radius-sm);
		transition: all 0.2s ease;
		position: relative;
		z-index: 2;
	}

	.experience-header:focus {
		background: rgba(255, 255, 255, 0.05);
	}

	.experience-title-group {
		flex: 1;
		min-width: 0;
	}

	.experience-title-group h4 {
		margin-bottom: var(--spacing-xs);
		font-size: 1.1rem;
		line-height: 1.4;
		color: var(--color-text);
	}

	.experience-meta {
		display: flex;
		flex-direction: column;
		gap: calc(var(--spacing-xs) * 0.5);
	}

	.experience-period {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		font-variation-settings: 'wght' 500;
	}

	.experience-location {
		display: flex;
		align-items: center;
		gap: calc(var(--spacing-xs) * 0.5);
		font-size: 0.85rem;
		color: var(--color-primary);
		font-variation-settings: 'wght' 500;
	}

	.location-icon {
		width: 14px;
		height: 14px;
		flex-shrink: 0;
	}

	.company-link {
		color: var(--color-primary);
		text-decoration: none;
		transition: color 0.2s ease;
		position: relative;
	}

	.company-link:hover {
		color: #93c5fd;
		text-decoration: underline;
	}

	.company-link:focus {
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
		border-radius: 2px;
	}

	.company-name {
		color: var(--color-text);
	}

	.expand-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		color: var(--color-primary);
		transition: all 0.3s ease;
		border-radius: 50%;
		background: rgba(96, 165, 250, 0.1);
		margin-left: var(--spacing-md);
		flex-shrink: 0;
	}

	.expand-icon:hover {
		background: rgba(96, 165, 250, 0.2);
		transform: scale(1.1);
	}

	.expand-icon svg {
		width: 18px;
		height: 18px;
		transition: transform 0.3s ease;
	}

	.experience-content {
		opacity: 0;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		margin-top: 0;
		position: relative;
		z-index: 2;
		transform: scaleY(0);
		transform-origin: top;
		will-change: transform, opacity;
	}

	:global(.experience-item.expanded .experience-content) {
		margin-top: 0;
		opacity: 1;
		transform: scaleY(1);
	}

	.experience-content p {
		margin: 0;
		padding: 0 var(--spacing-lg) var(--spacing-md);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding-top: var(--spacing-md);
		line-height: 1.6;
		color: var(--color-text-paragraph);
	}

	.experience-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
		padding: 0 var(--spacing-lg) var(--spacing-lg);
	}

	.tag {
		display: inline-block;
		padding: var(--spacing-xs) var(--spacing-sm);
		background: rgba(96, 165, 250, 0.2);
		color: #93c5fd;
		border-radius: var(--radius-sm);
		font-size: 0.8rem;
		font-weight: 500;
		border: 1px solid rgba(96, 165, 250, 0.3);
		transition: all 0.2s ease;
	}

	.tag:hover {
		background: rgba(96, 165, 250, 0.3);
		transform: translateY(-1px);
	}

	/* Typography */
	h3 {
		font-size: 1.75rem;
		font-variation-settings: 'wght' 600;
		margin-bottom: var(--spacing-md);
		color: var(--color-text);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.experience-items {
			padding-left: var(--spacing-md);
		}

		.timeline-track {
			left: -2px;
		}

		.timeline-beam {
			left: -2px;
		}

		.experience-header {
			flex-direction: column;
			align-items: flex-start;
			padding: var(--spacing-md);
		}

		.experience-title-group {
			width: 100%;
			margin-bottom: var(--spacing-sm);
		}

		.experience-title-group h4 {
			font-size: 1rem;
			margin-bottom: var(--spacing-xs);
		}

		.experience-meta {
			gap: var(--spacing-xs);
		}

		.experience-location {
			font-size: 0.8rem;
		}

		.location-icon {
			width: 12px;
			height: 12px;
		}

		.expand-icon {
			align-self: flex-end;
			margin-left: 0;
			margin-top: var(--spacing-sm);
		}

		.experience-content p {
			padding: 0 var(--spacing-md) var(--spacing-sm);
			padding-top: var(--spacing-sm);
		}

		.experience-tags {
			padding: 0 var(--spacing-md) var(--spacing-md);
		}

		.tag {
			font-size: 0.75rem;
			padding: calc(var(--spacing-xs) * 0.75) var(--spacing-xs);
		}
	}
</style>
