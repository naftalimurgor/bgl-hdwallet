import os from 'os'
import fs from 'fs';


const utils = {
    exportWalletToJsonFile: <U>(fileName: string, options: U) => {
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

export default utils
