import { Configuration } from 'electron-builder'

const config: Configuration = {
  appId: 'YourAppID',
  asar: true,
  directories: {
    output: 'release/${version}',
  },
  files: ['dist-electron', 'dist', 'resources'],
  mac: {
    artifactName: '${productName}_${version}.${ext}',
    target: ['dmg', 'zip'],
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
  linux: {
    target: ['AppImage', 'deb', 'rpm'],
    artifactName: '${productName}_${version}.${ext}',
    maintainer: 'Mayur Panchal',
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
