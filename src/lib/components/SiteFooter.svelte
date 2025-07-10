<script>
	// Get version from Vite's define
	const version = __APP_VERSION__;
</script>

<footer class="site-footer">
	<div class="footer-content">
		<div class="footer-left">
			<p class="footer-text">
				Built with <span class="heart">♥</span> using SvelteKit
			</p>
		</div>
		<div class="footer-right">
			<span class="version-tag">
				v{version}
			</span>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding: var(--spacing-lg) 0;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--spacing-md);
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
	}

	.footer-text {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		margin: 0;
		display: flex;
		align-items: center;
		gap: calc(var(--spacing-xs) * 0.5);
	}

	.heart {
		color: #ef4444;
		font-size: 1.1em;
		animation: heartbeat 2s ease-in-out infinite;
	}

	.version-tag {
		font-size: 0.8rem;
		color: var(--color-text-muted);
		padding: calc(var(--spacing-xs) * 0.5) var(--spacing-xs);
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-sm);
		font-family: var(--font-family-mono);
		font-weight: 500;
		transition: all 0.2s ease;
	}

	.version-tag:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.2);
		color: var(--color-text);
	}

	@keyframes heartbeat {
		0%,
		50%,
		100% {
			transform: scale(1);
		}
		25%,
		75% {
			transform: scale(1.1);
		}
	}

	/* Desktop layout */
	@media (min-width: 1024px) {
		.footer-content {
			max-width: 1400px;
			padding: 0 var(--spacing-xl);
		}
	}

	/* Mobile layout */
	@media (max-width: 768px) {
		.footer-content {
			flex-direction: column;
			text-align: center;
			gap: var(--spacing-sm);
		}

		.footer-text {
			justify-content: center;
		}
	}
</style>
