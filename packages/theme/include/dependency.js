/* eslint no-process-exit: "off" */
const semver = require('semver');
const packageInfo = require('../package.json');
const { yellow, red, green } = require('./util/console');

module.exports = hexo => {
    function checkDependency(name, reqVer) {
        try {
            require.resolve(name);
            const version = require(name + '/package.json').version;
            if (!semver.satisfies(version, reqVer)) {
                console.error(`Package ${yellow(name)}'s version (${yellow(version)}) does not satisfy the required version (${red(reqVer)}).`);
                return false;
            }
            return true;
        } catch (e) {
            console.error(`Package ${yellow(name)} is not installed.`);
        }
        return false;
    }

    console.info('[Nexmoe] Checking package dependencies');
    const dependencies = Object.assign({}, packageInfo.dependencies);
    const missingDeps = Object.keys(dependencies)
        .filter(name => !checkDependency(name, dependencies[name]));
    if (missingDeps && missingDeps.length) {
        console.error('Please install the missing dependencies your Hexo site root directory:');
        console.error(green('npm install --save ' + missingDeps.map(name => `${name}@${dependencies[name]}`).join(' ')));
        console.error('or:');
        console.error(green('yarn add ' + missingDeps.map(name => `${name}@${dependencies[name]}`).join(' ')));
        process.exit(-1);
    }
};
