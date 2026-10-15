
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	base: '/',
	integrations: [
    starlight({
      title: "Frank's Literature",

      // Idioma principal
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },

      // Estilos personalizados
      customCss: ['./src/styles/custom.css'],

      // Navegación
      sidebar: [
        {
          label: 'Inicio',
          link: '/',
        },
        {
          label: 'Biblioteca',
          items: [
            {
              autogenerate: {
                directory: 'libros',
              },
            },
          ],
        },
        {
          label: 'Sobre el autor',
          link: '/sobre-el-autor/',
        },
      ],
    }),
  ],
});
