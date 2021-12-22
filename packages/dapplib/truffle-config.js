require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain mistake good enroll force split'; 
let testAccounts = [
"0x9aedff3155b1809e2d00da9f41fb49f03e6529acb4a59afb10e257739aa5f66e",
"0xbd3d3869ea3bc4bc9ba6d0b725333ae3660a62b1836ad65bc9b2d5e7d850056b",
"0x0417b7f0a18404bbb6d50b3fc865aac2e6cb097c996ad2a0f8cfb90c911aeea0",
"0xc7251333544de47d7a962b05f179e78c902e3c20ea10fe7b7f47dbf68281109a",
"0xa9f3d383f6722635568fd82bd9fe4af50431617509682fba682aed9474a53c17",
"0x104f6d9c53382d37c71ea6dfff393073e509d218b134517fb37436495c457a21",
"0xd8ede92a09a1e7a75006cdf87d5f470df24bbdd365526f62909621716a129c8f",
"0xbfce36896b0d3bb21552ce065ecaaad23931f0c20a0a153d369648946ab3ff45",
"0xc9f3d4ffb4c1db5633203cf0fc92a07a0cd5f4fcca4004b76f52b832b5f9e53f",
"0xea5822fa597e623b89d100139e64b62456ca98359eb5ba9db178ae014d0732e5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


