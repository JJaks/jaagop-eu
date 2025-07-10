<script>
    const contactMethods = [
        {
            name: "Email",
            value: "dev@jaagop.eu",
            href: "mailto:dev@jaagop.eu",
            icon: "email",
            description: "Best for business inquiries"
        },
        {
            name: "LinkedIn",
            value: "Jaagop Janson",
            href: "https://www.linkedin.com/in/jaagop-janson/",
            icon: "linkedin",
            description: "Professional networking"
        },
        {
            name: "GitHub",
            value: "@JJaks",
            href: "https://github.com/JJaks",
            icon: "github",
            description: "Open source projects"
        }
    ];
</script>

<section class="contact-section" id="contact">
    <div class="contact-header">
        <h3>Get In Touch</h3>
    </div>
    
    <div class="contact-grid">
        {#each contactMethods as method}
            <a href={method.href} class="contact-card" target={method.href.startsWith('http') ? '_blank' : '_self'} rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}>
                <div class="contact-icon">
                    {#if method.icon === 'email'}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                    {:else if method.icon === 'linkedin'}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect x="2" y="9" width="4" height="12"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                    {:else if method.icon === 'github'}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                    {:else if method.icon === 'phone'}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                    {/if}
                </div>
                <div class="contact-info">
                    <h4 class="contact-name">{method.name}</h4>
                    <p class="contact-value">{method.value}</p>
                    <p class="contact-description">{method.description}</p>
                </div>
                <div class="contact-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
            </a>
        {/each}
    </div>
</section>

<style>
    .contact-section {
        margin-bottom: var(--spacing-2xl);
    }

    .contact-header {
        text-align: center;
        margin-bottom: var(--spacing-xl);
    }

    .contact-header h3 {
        font-size: 1.75rem;
        font-weight: 600;
        margin-bottom: var(--spacing-md);
        color: var(--color-text);
    }

    .contact-intro {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--color-text-paragraph);
        max-width: 600px;
        margin: 0 auto;
    }

    .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--spacing-lg);
        margin-top: var(--spacing-xl);
    }

    .contact-card {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
        padding: var(--spacing-lg);
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: var(--radius-lg);
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .contact-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
        );
        transition: left 0.5s ease;
    }

    .contact-card:hover::before {
        left: 100%;
    }

    .contact-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
        border-color: rgba(96, 165, 250, 0.3);
        background: rgba(255, 255, 255, 0.08);
    }

    .contact-icon {
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, var(--color-primary), #4f46e5);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transition: transform 0.3s ease;
    }

    .contact-card:hover .contact-icon {
        transform: scale(1.1) rotate(5deg);
    }

    .contact-icon svg {
        width: 24px;
        height: 24px;
    }

    .contact-info {
        flex: 1;
        min-width: 0; /* Allow text to wrap properly */
    }

    .contact-name {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-text);
        margin: 0 0 var(--spacing-xs);
    }

    .contact-value {
        font-size: 0.95rem;
        color: var(--color-primary);
        margin: 0 0 var(--spacing-xs);
        font-weight: 500;
    }

    .contact-description {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        margin: 0;
        line-height: 1.4;
    }

    .contact-arrow {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        color: var(--color-text-muted);
        transition: all 0.3s ease;
    }

    .contact-card:hover .contact-arrow {
        color: var(--color-primary);
        transform: translateX(4px);
    }

    .contact-arrow svg {
        width: 100%;
        height: 100%;
    }

    /* Desktop Layout */
    @media (min-width: 1024px) {
        .contact-section {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--spacing-2xl);
            align-items: start;
            margin-bottom: var(--spacing-3xl);
        }

        .contact-header {
            text-align: left;
            margin-bottom: 0;
        }

        .contact-header h3 {
            margin-bottom: var(--spacing-sm);
        }

        .contact-grid {
            margin-top: 0;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
        .contact-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
        }

        .contact-card {
            padding: var(--spacing-md);
        }

        .contact-icon {
            width: 40px;
            height: 40px;
        }

        .contact-icon svg {
            width: 20px;
            height: 20px;
        }

        .contact-name {
            font-size: 1rem;
        }

        .contact-value {
            font-size: 0.9rem;
        }

        .contact-description {
            font-size: 0.8rem;
        }
    }
</style>
