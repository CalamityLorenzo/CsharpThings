var gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var webpack = require('webpack');
var path = require('path');
var argv = require('yargs').argv;

var distJs = ["./code/dist/*.js"]


/**
 * Webpack bundling
 */
gulp.task('webpack', (callback) => {
    var webpackConfig = require(process.cwd() + '/webpack.config')
    webpack(webpackConfig, function (err, stats) {
        if (err) throw new PluginError("webpack", err);

        var jsonStats = stats.toJson();
        if (jsonStats.errors.length > 0) {
            jsonStats.errors.map(function (e) {
                console.log('[Webpack error] ' + e);
            });
            throw new PluginError("webpack", "Webpack errors, see log");
        }
        if (jsonStats.warnings.length > 0) {
            jsonStats.warnings.map(function (e) {
                console.log('[Webpack warning] ' + e);
            });
        }
        // console.log(stats);
        callback();
    });
});

gulp.task("copyAssets", ()=>{
        return gulp.src(distJs)
            .pipe(gulp.dest('../wwwroot/js/'));
});

gulp.task('build', gulp.series('webpack', 'copyAssets'));

/**
 * Watches source files and invokes the build task
 */
gulp.task('watch', () => {
    gulp.watch("./code/src/**/*.*", gulp.series('build'));
});

gulp.task('start', gulp.series('webpack', 'copyAssets', 'watch'));