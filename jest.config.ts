import type { Config } from '@jest/types'
import { resolve } from 'path'
import fs from 'fs'

const config: Config.InitialOptions = {
  rootDir: resolve(__dirname),
  collectCoverage: true,
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^dayjs/esm/(.*)$': 'dayjs/$1',
  },
  projects: fs.readdirSync('./packages').map((folder) => ({
    displayName: folder,
    preset: 'ts-jest/presets/js-with-babel',
    transformIgnorePatterns: ['node_modules/(?!(dayjs)/)'],
    testMatch: [`<rootDir>/packages/${folder}/__tests__/**/*.spec.{js,ts}`],
  })),
}

export default config
