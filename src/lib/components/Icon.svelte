<script lang="ts">
	import { icons, type IconProps } from '$lib/icons';

	interface Props extends IconProps {
		name: keyof typeof icons;
	}

	let { name, size = 24, class: className = '', 'stroke-width': strokeWidth = 2 }: Props = $props();
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html icons[name]({ size, class: className, 'stroke-width': strokeWidth })}
