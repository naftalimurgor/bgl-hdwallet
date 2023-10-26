#! /usr/bin/env node
// @ts-nocheck
const { Command } = require('commander');
const jsbgl = require('./jsbgl/src/jsbgl')
const utils = require('./utils')
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
            'hdwallet, - create hierarchical deterministic wallets for Bitgesell'
        )
        .version('0.1.0');

    /**
     * Command for all the address related operations
     * @param network | tesnet or mainnet
     */
    program
        .command('hdwallet')
        .description('Generate a hierarchical deterministic wallet (base58 encoded)')
        .argument('--network')
        .action(async (network) => {
            const isTesnet = testnetRegegx.test(network);
            const isMainnet = mainnetRegex.test(network);

            const response = await prompts({
                type: 'number',
                name: 'count',
                message: 'How many wallets do you want to generate?'
            })

            let { count } = response

            if (isMainnet) {

                while (count) {
                    const hdwallet = new globalThis.Wallet({
                        path_type: 'BIP84',
                        testnet: false,
                    });

                    console.log(`Successfully generated wallet for ${network}: \n`);
                    console.log('Wallet PrivateKey:', hdwallet.accountXPrivateKey);
                    console.log('Wallet PrivateKey:', hdwallet.accountXPublicKey);
                    console.log('Wallet seedphrase:', hdwallet.mnemonic);

                    utils.exportWalletToJsonFile(`wallet-${count}`, { wallet: hdwallet });
                    count--;
                }
            }
        });
    program.parse();
}

main().catch((err) => {
    console.log(err);
    process.exit(1);
});
