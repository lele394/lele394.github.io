// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism-plus';

// https://astro.build/config
export default defineConfig({
	site: 'https://lele394.github.io',
	base: '/',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			langAlias: {
				fortran: 'fortran-free-form',
			},
		},
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex, rehypePrism],
	},
});