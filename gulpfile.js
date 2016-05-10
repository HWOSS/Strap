var fs          = require('fs')
  , gulp 				= require('gulp')

  , npmPkg      = JSON.parse(fs.readFileSync('./package.json'))
  ;

/**
 *
 * Tasks required for the project
 *
 */
require('./tasks/eslint');


/**
 *
 * Development tasks
 * Run when changes are detected
 *
 */
gulp.task('watch-js', ['eslint']);
gulp.task('watch-sass', []);
gulp.task('dev', ['watch'], function() {
  var jsFiles = [npmPkg.paths.scripts.src]
    , sassFiles = []
    ;

  gulp.watch(jsFiles, ['watch-js']);
  gulp.watch(sassFiles, ['watch-sass'])
});


/**
 *
 * Production tasks
 *
 */
gulp.task('prod', []);
