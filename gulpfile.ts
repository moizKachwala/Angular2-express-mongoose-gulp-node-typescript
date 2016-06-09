/**
 * Created by Moiz.Kachwala on 08-06-2016.
 */


"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["build"], cb);
});

gulp.task('build:server', function () {
    var tsProject = tsc.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject))
    return tsResult.js
        .pipe(concat('server.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'))
});

gulp.task('build:client', function(){
    var tsProject = tsc.createProject('client/tsconfig.json');
    var tsResult = gulp.src('client/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject))
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'))
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("client/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("client/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["client/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
        'angular2/bundles/angular2-polyfills.js',
        'systemjs/dist/system.src.js',
        'rxjs/bundles/Rx.js',
        'angular2/bundles/angular2.dev.js',
        'angular2/bundles/router.dev.js'
    ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/libs"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["client/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["client/**/*.html", "client/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});

/**
 * Build the project.
 */

gulp.task("build", function (callback) {
    runSequence('clean', 'build:server', 'build:client', 'resources', 'libs', callback);
});
