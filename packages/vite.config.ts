import { UserConfig } from 'vite'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import Components from 'vite-plugin-components'
import { VitePWA } from 'vite-plugin-pwa'
import WindiCSS from 'vite-plugin-windicss'
import { functionNames, getFunction } from '../meta/function-indexes'
import { getFunctionHead } from '../scripts/utils'

const config: UserConfig = {
  optimizeDeps: {
    exclude: ['@vueuse/shared', '@vueuse/core'],
    include: [
      'axios',
      'dayjs',
      'js-yaml',
      'nprogress',
      'qrcode',
      'rxjs',
      'tslib',
      'universal-cookie',
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    Components({
      dirs: ['.vitepress/theme/components'],
      customLoaderMatcher: (id) => id.endsWith('.md'),
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Icons(),
    {
      name: 'vueuse-md-transform',
      enforce: 'pre',
      transform(code, id) {
        if (!id.endsWith('.md')) return null

        // linkify function names
        code = code.replace(
          new RegExp(`\`({${functionNames.join('|')}})\`(.)`, 'g'),
          (_, name, ending) => {
            if (ending === ']')
              // already a link
              return _
            const fn = getFunction(name)!
            return `[\`${fn.name}\`](${fn.docs})`
          }
        )
        // convert links to relative
        code = code.replace(/https?:\/\/yuanshen\.site\//g, '/')

        const [pkg, name, i] = id.split('/').slice(-3)

        if (functionNames.includes(name) && i === 'index.md') {
          const frontmatterEnds = code.indexOf('---\n\n') + 4
          let header = ''

          header += getFunctionHead(pkg, name)

          if (header)
            code =
              code.slice(0, frontmatterEnds) +
              header +
              code.slice(frontmatterEnds)
        }

        return code
      },
    },
    VitePWA({
      outDir: '.vitepress/dist',
      manifest: {
        name: 'Ky Design',
        short_name: 'Ky Design',
        theme_color: '#ffffff',
        description: 'The design system that powers Kongying Tavern',
        icons: [
          {
            src: './paimon_off@192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './paimon_off@512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: './maskable_icon_x1.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    WindiCSS({
      preflight: false,
    }),
  ],
}

export default config
