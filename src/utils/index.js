const os = require('os')
const fs = require('fs')


const utils = {
    exportWalletToJsonFile: (fileName, options) => {
        try {
            const homeDir = os.homedir();
            const fileContents = JSON.stringify(options, null, 2)
            fs.writeFileSync(
                `${homeDir}/${fileName}.json`,
                fileContents
            );
            console.info('Saved to :', `${homeDir}/${fileName}.json`);
        } catch (error) {
            console.error(error);
        }
    },
};

module.exports = utils
