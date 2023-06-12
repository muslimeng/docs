import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'MES Docs',
      sidebar: [
        {
          label: 'Welcome to MES Docs!',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'What is this?', link: '/welcome/the-what' },
            { label: 'How to Contribute', link: '/welcome/contribute' },
            { label: 'MES on Social Media', link: '/welcome/socials' },
          ],
        }
      ],
    }),
  ],
});
