import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';

function remarkCustomHeadingId() {
  return (tree) => {
    function walk(node) {
      if (node.type === 'heading' && Array.isArray(node.children)) {
        // Trailing HTML comments (e.g. `## Title {#id} <!-- /old-anchor -->`)
        // parse as separate `html` nodes, so scan back to the last text node
        // instead of only checking the final child.
        for (let i = node.children.length - 1; i >= 0; i--) {
          const child = node.children[i];
          if (child.type !== 'text') continue;
          const match = child.value.match(/\s*\{#([a-zA-Z0-9_-]+)\}\s*$/);
          if (match) {
            const id = match[1];
            child.value = child.value.replace(/\s*\{#([a-zA-Z0-9_-]+)\}\s*$/, '');
            node.data = node.data || {};
            node.data.hProperties = node.data.hProperties || {};
            node.data.hProperties.id = id;
          }
          break;
        }
      }
      if (node.children) {
        node.children.forEach(walk);
      }
    }
    walk(tree);
  };
}

function rehypeTableWrap() {
  return (tree) => {
    function walk(node, parent, index) {
      if (node.type === 'element' && node.tagName === 'table') {
        if (parent && !(parent.type === 'element' && parent.properties?.className?.includes('table-wrapper'))) {
          const wrapper = {
            type: 'element',
            tagName: 'div',
            properties: { className: ['table-wrapper', 'overflow-x-auto', 'my-6', 'rounded-xl', 'border', 'border-stone-800/80', 'bg-stone-900/30'] },
            children: [node],
          };
          parent.children[index] = wrapper;
          return;
        }
      }
      if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
          walk(node.children[i], node, i);
        }
      }
    }
    walk(tree, null, 0);
  };
}

// Set to your real domain before deploying; used by sitemap and canonical URLs
const SITE_URL = process.env.SITE_URL?.trim() ? process.env.SITE_URL.trim() : 'https://lastasylum.pages.dev';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  // Astro 7 defaults to 'jsx' whitespace handling, which can glue inline
  // elements together. Keep the HTML-aware behaviour this site was built with.
  compressHTML: true,
  markdown: {
    // Astro 7 switched the default Markdown pipeline to Sätteri. Our custom
    // heading IDs ({#...}) and table wrappers are remark/rehype plugins, so
    // explicitly opt back into the unified pipeline.
    processor: unified({
      remarkPlugins: [remarkCustomHeadingId],
      rehypePlugins: [rehypeTableWrap],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  },
});