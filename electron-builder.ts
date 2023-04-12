import { Configuration } from 'electron-builder'

const config: Configuration = {
  appId: 'YourAppID',
  asar: true,
  directories: {
    output: 'release/${version}',
  },
  extraResources: [
    'node_modules/@prisma/engines/migration-engine*',
    'node_modules/@prisma/engines/query*',
    'node_modules/@prisma/engines/libquery*',
  ],
  files: ['dist-electron', 'dist', 'resources'],
  mac: {
    artifactName: '${productName}_${version}.${ext}',
    target: ['dmg', 'zip'],
    asarUnpack: 'prisma',
  },
  win: {
    target: [
      {
        target: 'nsis',
        arch: ['x64'],
      },
    ],
    artifactName: '${productName}_${version}.${ext}',
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false,
  },
  publish: {
    provider: 'generic',
    channel: 'latest',
    url: 'https://github.com/electron-vite/electron-vite-react/releases/download/v0.9.9/',
  },
}

export default config
