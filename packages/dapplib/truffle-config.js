require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember method hover enroll bridge giant'; 
let testAccounts = [
"0x341974ca51d912cc2c425e258177ba068eecd21414ed95015031a3d9ce356b67",
"0x03247554670d8f55c1f84354821756b82f45df8d41275ac9e339258606961b00",
"0x735e7fc5621531c2a8ccecf31dca9187ee8ab369364dedabe2541e697116b093",
"0x2adb47e7badb856588875ce594717fd86815e0d0338210b8809a719a07ac3cc6",
"0xb737014e813800fe181fcb2d2e9f4765020c79da22532f49deb795f4a889d4c2",
"0xa86b4a7fb3287a04f2650131d6e2e42a05a8c5ee0852d78b642b820441ca08e5",
"0x3e56e4401a88f84975ac296cf48c617f004cff8671bc189a774273a54a7dcd2b",
"0x6abf3c05ccfc4fbd0460d5c2ab7adaa39fbaafec356197f596327aabc539f624",
"0x3412048e58c30ebcda4c63b675abaff8c01f9046b11eb5edd899f574c30dfc2a",
"0xd8a147ea2cfb8f6ccd6284673057e1ad30001e0e5f90b455de58bb42301906e6"
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


