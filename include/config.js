/* eslint no-process-exit: "off" */
const fs = require('fs');
const path = require('path');
// const util = require('util');
// const crypto = require('crypto');
// const yaml = require('hexo-component-inferno/lib/util/yaml');
// const { Migrator } = require('hexo-component-inferno/lib/core/migrate');
// const { SchemaLoader } = require('hexo-component-inferno/lib/core/schema');
const { yellow } = require('./util/console');

// function loadThemeConfig(hexo, cfgPaths) {
//     const configs = cfgPaths.map(cfgPath => fs.readFileSync(cfgPath))
//         .map(cfgPath => yaml.parse(cfgPath));
//     return Object.assign({}, ...configs, hexo.config.theme_config);
// }

// function generateThemeConfigFile(schema, cfgPath) {
//     const defaultValue = schema.getDefaultValue();
//     fs.writeFileSync(cfgPath, defaultValue.toYaml());
// }

// function hashConfigFile(cfgPath) {
//     const content = fs.readFileSync(cfgPath);
//     return crypto.createHash('md5').update(content).digest('hex');
// }

function checkConfig(hexo) {
    if (!process.argv.includes('--nexmoe-dont-check-config')) {
        console.info('[Nexmoe] Checking theme configurations');

        const themeSiteCfg = path.join(hexo.base_dir, '_config.nexmoe.yml');
        const themeDirCfg = path.join(hexo.theme_dir, '_config.yml');
        const themeCfgPaths = [themeDirCfg, themeSiteCfg].filter(cfgPath => fs.existsSync(cfgPath));
        // const themeSiteCfgExample = themeSiteCfg + '.example';

        // const schemaDir = path.join(hexo.theme_dir, 'include/schema/');
        // const loader = SchemaLoader.load(require(path.join(schemaDir, 'config.json')), schemaDir);
        // const schema = loader.getSchema('/config.json');

        if (!process.argv.includes('--nexmoe-dont-generate-config')) {
            if (!themeCfgPaths.length) {
                console.warn('None of the following configuration files is found:');
                console.warn(`- ${yellow(themeSiteCfg)}`);
                console.warn(`- ${yellow(themeDirCfg)}`);
                console.info('Generating theme configuration file...');
                // generateThemeConfigFile(schema, themeSiteCfg);
                fs.writeFileSync(themeSiteCfg, fs.readFileSync(path.join(hexo.theme_dir, 'source/_config.yml')));
                themeCfgPaths.push(themeSiteCfg);
                console.info(`${yellow(themeSiteCfg)} created successfully.`);
                console.info('To skip configuration generation, use "--nexmoe-dont-generate-config".');
            }
        }

        // let cfg = loadThemeConfig(hexo, themeCfgPaths);

        // if (!process.argv.includes('--nexmoe-dont-upgrade-config')) {
        //     const migrator = new Migrator(require(path.join(hexo.theme_dir, 'include/migration/head')));
        //     if (cfg.version && migrator.isOudated(cfg.version)) {
        //         console.warn(`Your theme configuration is outdated (${cfg.version} < ${migrator.getLatestVersion()}).`);
        //         console.info('To skip the configuration upgrade, use "--nexmoe-dont-upgrade-config".');

        //         console.info('Backing up theme configuration files...');
        //         for (const cfgPath of themeCfgPaths) {
        //             const backupPath = cfgPath + '.' + hashConfigFile(cfgPath);
        //             const relCfgPath = path.relative(hexo.base_dir, cfgPath);
        //             const relBackupPath = path.relative(hexo.base_dir, backupPath);
        //             fs.renameSync(cfgPath, backupPath);
        //             console.info(`${yellow(relCfgPath)} => ${yellow(relBackupPath)}`);
        //         }

        //         console.info('Upgrading theme configurations...');
        //         cfg = migrator.migrate(cfg);
        //         fs.writeFileSync(themeSiteCfg, yaml.stringify(cfg));
        //         console.info(`Theme configurations are written to ${yellow(themeSiteCfg)}.`);

        //         generateThemeConfigFile(schema, themeSiteCfgExample);
        //         console.info(`Example configurations is at ${yellow(themeSiteCfgExample)}.`);
        //     }
        // }

        // const validation = schema.validate(cfg);
        // if (validation !== true) {
        //     console.warn('Theme configurations failed one or more checks.');
        //     console.warn('nexmoe may still run, but you will encounter unexcepted results.');
        //     console.warn('Here is some information for you to correct the configuration file.');
        //     console.warn(util.inspect(validation));
        // }

    }
}

module.exports = hexo => {
    try {
        checkConfig(hexo);
    } catch (e) {
        console.error(e);
        console.error('Theme configuration checking failed.');
        console.info('You may use \'--nexmoe-dont-check-config\' to skip configuration checking.');
        process.exit(-1);
    }
};
