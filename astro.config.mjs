// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism-plus';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://lele394.github.io',
	base: '/',
	integrations: [mdx(), sitemap()],
	markdown: {
		syntaxHighlight: {
			type: 'shiki',
			excludeLangs: ['mermaid', 'math'],
		},
		shikiConfig: {
			langAlias: {
				fortran: 'fortran-free-form',
			},
		},
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex, rehypePrism, rehypeMermaid],
	},
});