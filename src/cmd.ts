#! /usr/bin/env node
// @ts-nocheck
const { Command } = require('commander');
const jsbgl = require('../jsbgl/src/jsbgl');
const utils = require('../utils')
const prompts = require('prompts')

async function main() {
    try {
        await jsbgl.asyncInit(globalThis);
    } catch (error) {
        console.log(error);
    }

    const testnetRegegx = /^(Testnet|tesnet|TestNet|test net|testNet)$/i;
    const mainnetRegex = /^(mainnet|Mainnet|MainNet|main net|nainNet)$/i;

    const program = new Command();
    program
        .name('hdwallet')
        .description(
            'hdwallet, - create hierarchical deterministic wallet for Bitgesell'
        )
        .version('0.1.0');

    /**
     * Command for all the address related operations
     * @param network | tesnet or mainnet
     */
    program
        .command('wallet')
        .description('Generate a wallet (base58 encoded)')
        .argument('--network')
        .action((network) => {
            console.log(network);
            const isTesnet = testnetRegegx.test(network);
            const isMainnet = mainnetRegex.test(network);
            console.log('isMainnet', isMainnet);

            if (isMainnet) {
                // pass in seed phrase option and count(put inside a forloop)
                const address = new globalThis.Wallet({ from: seedphrase, testnet: false, testnet: false });
                console.log('Genertated address for Mainnet(base58):', address.address);
                console.log('Private Key(hex):', address.privateKey.hex);
                utils.exportToJsonFile(address.address, {
                    address,
                    privateKey: address.privateKey.hex,
                    testnet: address.testnet,
                    compressed: address.compressed,
                });
            }
        });
    program.parse();
}

main().catch((err) => {
    console.log(err);
    process.exit(1);
});
