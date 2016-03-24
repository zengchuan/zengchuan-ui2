var requireDir = require('require-dir');

// Require all tasks in tools/gulp/tasks, including sub folders
requireDir('./gulp/tasks', { recurse: true });
