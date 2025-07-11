<script>
	import BackgroundBeams from './ui/BackgroundBeams/BackgroundBeams.svelte';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="hero-section">
	<div class="hero-background">
		<BackgroundBeams className="background-beams extended-beams" />
	</div>

	<div class="hero-content">
		<div class="hero-navigationbar">
			<!-- Desktop Navigation -->
			<div class="nav-expandable desktop-nav">
				<span class="nav-start">&lt;Jaagop</span>
				<div class="nav-links">
					<a href="#about">About</a>
					<a href="#experience">Experience</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
					<a href="/blog">Blog</a>
				</div>
				<span class="nav-end">/&gt;</span>
			</div>

			<!-- Mobile Navigation -->
			<div class="mobile-nav">
				<button
					class="nav-brand-button"
					on:click={toggleMobileMenu}
					aria-label="Toggle navigation menu"
					aria-expanded={mobileMenuOpen}
				>
					&lt;Jaagop{mobileMenuOpen ? ' ×' : ''}/&gt;
				</button>

				{#if mobileMenuOpen}
					<nav class="mobile-menu">
						<a href="#about" on:click={closeMobileMenu}>About</a>
						<a href="#experience" on:click={closeMobileMenu}>Experience</a>
						<a href="#projects" on:click={closeMobileMenu}>Projects</a>
						<a href="#contact" on:click={closeMobileMenu}>Contact</a>
						<a href="/blog" on:click={closeMobileMenu}>Blog</a>
					</nav>
				{/if}
			</div>
		</div>
		<div class="hero-text">
			<h1 class="hero-title">Jaagop Janson</h1>
			<h2 class="hero-subtitle">Senior Software Developer</h2>
			<div class="hero-location">
				<svg
					class="location-icon"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
					<circle cx="12" cy="10" r="3" />
				</svg>
				<span class="location-text">Tallinn, Estonia</span>
			</div>
		</div>
		<div class="hero-cta">
			<a href="#main-content" class="scroll-indicator">
				<span class="scroll-text">Scroll to explore</span>
				<svg class="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path d="M12 5v14M5 12l7 7 7-7" />
				</svg>
			</a>
		</div>
	</div>
</header>

<style>
	.hero-section {
		position: relative;
		height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1 1 auto;
		overflow: visible;
		color: white;
	}

	.hero-background {
		position: absolute;
		inset: 0;
		z-index: 0;
		overflow: visible;
	}

	/* Extended background beams */
	:global(.extended-beams) {
		height: 150vh !important;
		top: 0 !important;
	}

	.hero-content {
		position: relative;
		z-index: 1;
		text-align: center;
		padding: var(--spacing-xl) var(--spacing-md) var(--spacing-2xl);
		display: flex;
		flex-direction: column;
		flex: 1 1 100%;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		overflow: visible;
	}

	.hero-navigationbar {
		flex: 0 0 auto;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: var(--font-family-mono);
		position: relative;
		z-index: 10;
		overflow: visible;
	}

	.nav-expandable {
		display: flex;
		align-items: center;
		font-family: var(--font-family-mono);
		font-size: 1.2rem;
		font-weight: 500;
		color: white;
		cursor: pointer;
		transition: all 0.3s ease;
		position: relative;
		height: 1.5rem;
		min-width: fit-content;
		z-index: 10;
	}

	.nav-start {
		color: #60a5fa;
		font-weight: 600;
		transition: color 0.3s ease;
		position: relative;
		z-index: 3;
		white-space: nowrap;
	}

	.nav-end {
		color: #60a5fa;
		font-weight: 600;
		transition: all 0.4s ease;
		position: relative;
		z-index: 3;
		white-space: nowrap;
		margin-left: 0;
		letter-spacing: 0.05em;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		max-width: 0;
		opacity: 0;
		transition: all 0.4s ease;
		overflow: hidden;
		white-space: nowrap;
		z-index: 2;
		position: relative;
	}

	.nav-links a {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		padding: var(--spacing-xs) var(--spacing-sm);
		border-radius: var(--radius-sm);
		transition: all 0.3s ease;
		font-weight: 400;
	}

	.nav-links a:hover {
		color: white;
		background: rgba(255, 255, 255, 0.1);
		transform: translateY(-1px);
	}

	.nav-expandable:hover .nav-links {
		max-width: 40rem;
		opacity: 1;
	}

	.nav-expandable:hover .nav-end {
		margin-left: var(--spacing-sm);
	}

	.nav-expandable:hover .nav-start,
	.nav-expandable:hover .nav-end {
		color: #93c5fd;
	}

	.hero-text {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.hero-title {
		font-size: clamp(3rem, 10vw, 10rem);
		margin-bottom: var(--spacing-md);
		line-height: 0.9;
		text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
		font-weight: 700;
		text-transform: uppercase;
	}

	.hero-subtitle {
		font-size: clamp(1.25rem, 3vw, 2rem);
		margin-bottom: var(--spacing-xl);
		margin-top: var(--spacing-l);
		opacity: 0.9;
		color: var(--color-text-muted);
		text-shadow: 0 2px 10px rgba(187, 187, 187, 0.2);
		text-transform: uppercase;
		font-weight: 500;
	}

	.hero-location {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-xs);
		font-size: clamp(1rem, 2vw, 1.2rem);
		color: rgba(255, 255, 255, 0.7);
		font-weight: 400;
		margin-top: var(--spacing-sm);
		animation: locationFloat 4s ease-in-out infinite 0.5s;
		will-change: transform;
	}

	.location-icon {
		width: 20px;
		height: 20px;
		opacity: 0.8;
	}

	.location-text {
		letter-spacing: 0.02em;
	}

	.hero-cta {
		flex: 0 0 auto;
		animation: ctaFloat 3s ease-in-out infinite 1s;
		will-change: transform;
	}

	.scroll-indicator {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		color: white;
		text-decoration: none;
		transition: all 0.3s ease;
		opacity: 0.8;
		will-change: transform;
	}

	.scroll-indicator:hover {
		opacity: 1;
		transform: translateY(-5px);
	}

	.scroll-text {
		font-size: 0.9rem;
		font-variation-settings: 'wght' 500;
		margin-bottom: var(--spacing-sm);
		letter-spacing: 0.05em;
	}

	.scroll-arrow {
		width: 24px;
		height: 24px;
		animation: bounce 2s infinite;
		will-change: transform;
	}

	/* Animations */
	@keyframes patternFloat {
		0% {
			transform: translate(0, 0) scale(1);
			opacity: 0.8;
		}
		33% {
			transform: translate(-20px, -15px) scale(1.05);
			opacity: 1;
		}
		66% {
			transform: translate(-10px, -25px) scale(0.95);
			opacity: 0.9;
		}
		100% {
			transform: translate(0, 0) scale(1);
			opacity: 0.8;
		}
	}

	@keyframes titleFloat {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes subtitleFloat {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-5px);
		}
	}

	@keyframes locationFloat {
		0%,
		100% {
			transform: translateY(0px);
			opacity: 0.7;
		}
		50% {
			transform: translateY(-3px);
			opacity: 0.9;
		}
	}

	@keyframes ctaFloat {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-3px);
		}
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}

	/* Mobile optimizations */
	@media (max-width: 768px) {
		.hero-section {
			height: 100dvh; /* Use dynamic viewport height on mobile */
		}

		.hero-content {
			padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-xl);
		}

		/* Hide desktop nav on mobile */
		.desktop-nav {
			display: none;
		}

		/* Show mobile nav */
		.mobile-nav {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			position: relative;
		}

		.nav-brand-button {
			background: none;
			border: none;
			color: #60a5fa;
			font-family: var(--font-family-mono);
			font-size: 1.1rem;
			font-weight: 600;
			cursor: pointer;
			padding: var(--spacing-sm);
			border-radius: var(--radius-sm);
			transition: all 0.3s ease;
			min-height: 44px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.nav-brand-button:hover {
			background: rgba(255, 255, 255, 0.1);
			color: #93c5fd;
			transform: translateY(-1px);
		}

		.mobile-menu {
			position: absolute;
			top: calc(100% + var(--spacing-sm));
			left: 50%;
			transform: translateX(-50%);
			background: rgba(0, 0, 0, 0.95);
			backdrop-filter: blur(10px);
			border: 1px solid rgba(255, 255, 255, 0.1);
			border-radius: var(--radius-md);
			padding: var(--spacing-md);
			display: flex;
			flex-direction: column;
			gap: var(--spacing-sm);
			min-width: 200px;
			box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
			z-index: 20;
			animation: mobileMenuFadeIn 0.2s ease-out;
		}

		@keyframes mobileMenuFadeIn {
			from {
				opacity: 0;
				transform: translateX(-50%) translateY(-10px);
			}
			to {
				opacity: 1;
				transform: translateX(-50%) translateY(0);
			}
		}

		.mobile-menu a {
			color: rgba(255, 255, 255, 0.9);
			text-decoration: none;
			padding: var(--spacing-md) var(--spacing-lg);
			border-radius: var(--radius-sm);
			transition: all 0.2s ease;
			font-weight: 400;
			text-align: center;
			min-height: 44px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.mobile-menu a:hover {
			color: white;
			background: rgba(255, 255, 255, 0.1);
			transform: translateY(-1px);
		}

		.scroll-text {
			font-size: 0.8rem;
		}
	}

	/* Hide mobile nav on desktop */
	@media (min-width: 769px) {
		.mobile-nav {
			display: none;
		}

		.desktop-nav {
			display: flex;
		}
	}
</style>
