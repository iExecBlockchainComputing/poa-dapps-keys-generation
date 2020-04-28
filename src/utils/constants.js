let constants = {}

constants.organization = 'iExecBlockchainComputing'
constants.repoName = 'poa-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json'
}
constants.userDeniedTransactionPattern = 'User denied transaction'
constants.baseURL = '/poa-dapps-keys-generation'

constants.NETWORKS = {
  '42': {
    NAME: 'Kovan',
    BRANCH: 'kovan',
    TESTNET: true
  },
  '77': {
    NAME: 'Sokol',
    BRANCH: 'sokol',
    TESTNET: true
  },
  '99': {
    NAME: 'Core',
    BRANCH: 'core',
    TESTNET: false
  },
  '100': {
    NAME: 'Dai',
    BRANCH: 'dai',
    TESTNET: false
  },
  '133': {
    NAME: 'vRLC',
    BRANCH: 'viviani',
    TESTNET: true
  },
  '134': {
    NAME: 'xRLC',
    BRANCH: 'bellecour',
    TESTNET: false
  },
  '138': {
    NAME: 'test',
    BRANCH: 'sandbox',
    TESTNET: true
  }
}

module.exports = {
  constants
}
