<script>
	import HeroSection from '$lib/components/HeroSection.svelte';
	import WorkExperience from '$lib/components/WorkExperience.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
	title="Jaagop Janson - Senior Software Developer & Web Developer"
	description="Senior Software Developer from Estonia specializing in modern web applications, mobile development, and full-stack solutions. Experience with TypeScript, React, Kotlin, Swift, and more."
	url="/"
	keywords="Jaagop Janson, senior software developer, web developer, Estonia, TypeScript, React, Kotlin, Swift, full-stack, mobile development"
/>

<HeroSection />

<main id="main-content" class="main-content">
	<div class="content-wrapper">
		<!-- About Section -->
		<section class="about-section" id="about">
			<h3>About</h3>
			<p class="lead">
				I'm a senior software engineer passionate about creating elegant solutions to complex
				problems. With expertise in modern web technologies and a focus on clean, maintainable code.
			</p>
		</section>

		<!-- Skills Section -->
		<section class="skills-section">
			<h3>Core Technologies</h3>
			<div class="skills-grid">
				<div class="skill-item">
					<h4>Frontend</h4>
					<p>SvelteKit, React, TypeScript, CSS Architecture</p>
				</div>
				<div class="skill-item">
					<h4>Backend</h4>
					<p>Node.js, Python, Database Design, API Development</p>
				</div>
				<div class="skill-item">
					<h4>Tools & Methods</h4>
					<p>Git, CI/CD, Testing, Performance Optimization</p>
				</div>
			</div>
		</section>

		<WorkExperience />

		<ProjectsSection />

		<BlogSection />

		<ContactSection />
	</div>
</main>

<SiteFooter />

<style>
	/* Main content styling */
	.main-content {
		min-height: 100vh;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.05) 15%,
			rgba(0, 0, 0, 0.1) 30%,
			rgba(0, 0, 0, 0.15) 50%,
			rgba(0, 0, 0, 0.2) 100%
		);
		position: relative;
		z-index: 5;
		margin-top: 0;
	}

	.content-wrapper {
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--spacing-2xl) var(--spacing-md);
	}

	/* Desktop Layout - Side-by-side titles and content */
	@media (min-width: 1024px) {
		.content-wrapper {
			max-width: 1400px;
			padding: var(--spacing-2xl) var(--spacing-xl);
		}

		/* Section layout for desktop */
		.about-section,
		.skills-section {
			display: grid;
			grid-template-columns: 280px 1fr;
			gap: var(--spacing-2xl);
			align-items: center; /* Center titles with content */
			margin-bottom: var(--spacing-3xl);
		}

		section:last-child {
			margin-bottom: var(--spacing-2xl);
		}

		/* Title column styling - remove sticky positioning for better alignment */
		.about-section h3,
		.skills-section h3 {
			margin-bottom: 0;
			text-align: left;
		}

		/* Content positioning for two-column sections */
		.about-section .lead {
			margin-bottom: 0;
		}

		.skills-grid {
			margin-top: 0;
		}
	}

	/* Section spacing */
	section {
		margin-bottom: var(--spacing-2xl);
	}

	section:last-child {
		margin-bottom: 0;
	}

	h3 {
		font-size: 1.75rem;
		font-variation-settings: 'wght' 600;
		margin-bottom: var(--spacing-md);
		color: var(--color-text);
	}

	h4 {
		font-size: 1.25rem;
		font-variation-settings: 'wght' 500;
		margin-bottom: var(--spacing-sm);
		color: var(--color-text);
	}

	.lead {
		font-size: 1.25rem;
		line-height: 1.6;
		color: var(--color-text-paragraph);
		margin-bottom: var(--spacing-xl);
	}

	p {
		line-height: 1.6;
		color: var(--color-text-paragraph);
		margin-bottom: var(--spacing-md);
	}

	/* Skills Grid */
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-lg);
		margin-top: var(--spacing-lg);
	}

	.skill-item {
		padding: var(--spacing-lg);
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		border-radius: var(--radius-md);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.skill-item:hover {
		transform: translateY(-2px);
		background: rgba(255, 255, 255, 0.1);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
	}

	.skill-item h4 {
		margin-bottom: var(--spacing-xs);
		color: var(--color-primary);
	}

	.skill-item p {
		margin: 0;
		font-size: 0.95rem;
	}

	/* Mobile and Tablet Responsive Design */
	@media (max-width: 1023px) {
		.content-wrapper {
			max-width: 800px;
			padding: var(--spacing-xl) var(--spacing-md);
		}

		/* Reset desktop grid for mobile - ensure normal block layout */
		.about-section,
		.skills-section {
			display: block;
		}

		h3 {
			font-size: 1.5rem;
			margin-bottom: var(--spacing-md);
		}

		.lead {
			font-size: 1.125rem;
		}

		.skills-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-md);
			margin-top: var(--spacing-lg);
		}
	}
</style>
