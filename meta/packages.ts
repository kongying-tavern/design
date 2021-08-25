import { PackageManifest } from './types'

export const packages: PackageManifest[] = [
  {
    name: 'normalize.css',
    display: 'Normalize CSS',
    description: 'Kongying Tavern a modern alternative to CSS resets',
    addon: true,
  },
  {
    name: 'prettier-config',
    display: 'Prettier Config',
    description: ' Prettier config for kongyingTavern Team',
    addon: true,
  },
]

export const activePackages = packages.filter((i) => !i.deprecated)
