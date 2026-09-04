import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

function remarkCustomHeadingId() {
  return (tree) => {
    function walk(node) {
      if (node.type === 'heading' && Array.isArray(node.children)) {
        const last = node.children[node.children.length - 1];
        if (last && last.type === 'text') {
          const match = last.value.match(/\s*\{#([a-zA-Z0-9_-]+)\}\s*$/);
          if (match) {
            const id = match[1];
            last.value = last.value.replace(/\s*\{#([a-zA-Z0-9_-]+)\}\s*$/, '');
            node.data = node.data || {};
            node.data.hProperties = node.data.hProperties || {};
            node.data.hProperties.id = id;
          }
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
const SITE_URL = process.env.SITE_URL?.trim() ? process.env.SITE_URL.trim() : 'https://lastasylum.netlify.app';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkCustomHeadingId],
    rehypePlugins: [rehypeTableWrap],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});