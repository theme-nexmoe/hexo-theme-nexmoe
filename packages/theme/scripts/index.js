/* global hexo */

/**
 * Print welcome message
 */
console.info(`===============================================
███    ██ ███████ ██   ██ ███    ███  ██████  ███████ 
████   ██ ██       ██ ██  ████  ████ ██    ██ ██      
██ ██  ██ █████     ███   ██ ████ ██ ██    ██ █████   
██  ██ ██ ██       ██ ██  ██  ██  ██ ██    ██ ██      
██   ████ ███████ ██   ██ ██      ██  ██████  ███████
=====================================================`);

/**
 * Check if all dependencies are installed
 */
require('../include/dependency')(hexo);

/**
 * Configuration file checking and migration
 */
require('../include/config')(hexo);

/**
 * Register Hexo extensions and remove Hexo filters that could cause OOM
 */
// require('../include/register')(hexo);
