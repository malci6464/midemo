import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex]
    },
    integrations: [
        mdx({
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex]
        }),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
