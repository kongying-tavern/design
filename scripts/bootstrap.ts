import { existsSync, writeFileSync, readdirSync } from 'fs'
import { join, resolve } from 'path'
import { version } from '../package.json'

const packagesDir = resolve(__dirname, '../packages/')
const files = readdirSync(packagesDir)

files.forEach((pkgName) => {
  if (pkgName.charAt(0) === '.') return

  const desc = `${pkgName} plugin for VuePress`
  const pkgPath = join(packagesDir, pkgName, 'package.json')

  // generate package.json
  if (!existsSync(pkgPath)) {
    const pkgJSON = {
      name: `@kongying-tavern/${pkgName}`,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      version,
      description: desc,
      main: 'node/index.js',
      types: 'node/index.d.ts',
      publishConfig: {
        access: 'public',
      },
      repository: {
        type: 'git',
        url: 'git+https://github.com/kongying-tavern/design.git',
        directory: `packages/${pkgName}`,
      },
      keywords: ['kongying-tavern', 'yuanshen', pkgName, 'genshin'],
      author: {
        email: 'jiazengp@gmail.com',
        name: 'Jia Zeng',
        url: 'https://github.com/jiazengp',
      },
      license: 'MIT',
      bugs: {
        url: 'https://github.com/kongying-tavern/design/issues',
      },
      homepage: `https://github.com/kongying-tavern/design/packages/${pkgName}#README`,
    }

    writeFileSync(pkgPath, `${JSON.stringify(pkgJSON, null, 2)}\n`)
  }

  const readmePath = join(packagesDir, pkgName, 'readme.md')

  // generate readme.md
  if (!existsSync(readmePath))
    writeFileSync(readmePath, `# @kongying-tavern/${pkgName}`)
})
