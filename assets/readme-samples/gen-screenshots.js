const {spawnSync} = require('child_process');
const {readdirSync, readFileSync, existsSync, writeFileSync} = require('fs');
const {createHash} = require('crypto');

const HASH_MAP_PATH = 'file-hash-map.json';

function run() {
    const hashMap = readHashMap();

    const snippetFiles = readdirSync('src');

    const not = fn => (...args) => !fn(...args);
    const filenameHasLeadingDot = file => file.startsWith('.');
    const tackFileHash = file => [file, createHashForFile(file)];
    const tackExistingHash = ([file, _]) => [file, _, hashMap[file]];
    const hasHashChanged = ([_, hash, existingHash]) => !existingHash || hash !== existingHash;
    const updateScreenshotAndHash = ([file, hash, _]) => {
            try {
                genScreenshot(file);
                hashMap[file] = hash;
            } catch(e) {
                console.error(e.message);
            }
        };

    snippetFiles
        .filter(not(filenameHasLeadingDot))
        .map(tackFileHash)
        .map(tackExistingHash)
        .filter(hasHashChanged)
        .forEach(updateScreenshotAndHash);

    saveHashMap(hashMap);
}

run();

function genScreenshot(fileName) {
    const fileSansExt = fileName.replace('.ts', '');
    const args = [
        'carbon-now',
        `src/${fileName}`,
        '-p', 'matchbook',
        '--target', `static/${fileSansExt}`
    ];

    const process = spawnSync('npx', args, {encoding: 'utf8'});

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
