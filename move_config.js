const fs = require('fs')

if (fs.existsSync('../hexo/package.json')){
  const version = JSON.parse(fs.readFileSync('../hexo/package.json')).version
  if (version.split('.')[0] === '5') {
    const oldConfigPath = '../../_config.old.yml'
    const configPath = '../../_config.nexmoe.yml'
    if (!fs.existsSync(configPath) && !fs.existsSync(oldConfigPath)) {
      fs.writeFileSync(configPath, fs.readFileSync('./_config.yml'))
      console.log('Successful installation!');
      console.log('Please modify the file `_config.nexmoe.yml` in the root directory');
    }
    if (fs.existsSync(configPath) && !fs.existsSync(oldConfigPath)){
      fs.writeFileSync(oldConfigPath, fs.readFileSync(configPath))
      console.warn('Please delete the file `_config.old.yml` in the root directory before upgrading!');
    }
    fs.unlinkSync('./_config.yml')
  }
}

// 借鉴自 https://github.com/HCLonely/hexo-theme-webstack/blob/master/move_config.js