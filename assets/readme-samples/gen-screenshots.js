const {spawnSync} = require('child_process');
const {readdirSync, readFileSync, existsSync, writeFileSync} = require('fs');
const {createHash} = require('crypto');

const HASH_MAP_PATH = 'file-hash-map.json';

function run() {
    const hashMap = readHashMap();

    const snippetFiles = readdirSync('src');
    snippetFiles
        .filter(file => !file.startsWith('.'))
        .forEach(file => {
            const hash = createHashForFile(file);
            const hashFromMap = hashMap[file];

            if (!hashFromMap || hashFromMap !== hash) {
                try {
                    genScreenshot(file);
                    hashMap[file] = hash;
                } catch(e) {
                    console.error(e.message);
                }
            }
        });

    saveHashMap(hashMap);
}

run();

function genScreenshot(fileName) {
    const fileSansExt = fileName.replace('.ts', '');
    const script = `carbon-now src/${fileName} -p matchbook --target static/${fileSansExt}`;

    const process = spawnSync('cmd', ['/k', script], {encoding: 'utf8'});

    if (process.stderr) throw new Error(process.stderr);
}

function createHashForFile(file) {
    const contents = readFileSync(`src/${file}`, 'utf8');
    const hash = createHash('md5')
        .update(contents)
        .digest('hex');
    
    return hash;
}

function readHashMap() {
    const exists = existsSync(HASH_MAP_PATH);
    if (!exists) saveHashMap();

    const json = readFileSync(HASH_MAP_PATH, 'utf8');
    const map = JSON.parse(json);
    
    return map;
}

function saveHashMap(data) {
    writeFileSync(HASH_MAP_PATH, JSON.stringify(data || {}));
}
