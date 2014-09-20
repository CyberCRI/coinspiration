var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    lrserver = require('tiny-lr')(),
    clean = require('gulp-clean'),
    refresh = require('gulp-livereload'),
    express = require('express'),
    livereload = require('connect-livereload'),
    copy = require('gulp-copy'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    anotate = require('gulp-ng-annotate'),
    sass = require('gulp-sass'),
    path = require('path'),
    minifyCss = require('gulp-minify-css'),
    minifyHtml = require('gulp-minify-html'),
    livereloadport = 35729,
    serverport = 5000;

var paths = {
    sass: ['./scss/**/*.scss'],
    js : ['./www/**/*.js']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js,['lint']);
});

gulp.task('lint', function() {
    gulp.src('./app/modules/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//express server
var server = express();
server.use(livereload({port: livereloadport}));
server.use(express.static('./www'));
server.all('/*', function(req, res) {
    res.sendFile('index.html', { root: 'www' });
});

// Dev tasks

gulp.task('dev', function() {
    server.listen(serverport);
    lrserver.listen(livereloadport);
    gulp.run('sass');
    gulp.run('watch');
});

gulp.task('serveprod',function(){
    var server = express();
    server.use(livereload({port: livereloadport}));
    server.use(express.static('./dist'));
    server.all('/*', function(req, res) {
        res.sendFile('index.html', { root: 'dist' });
    });
    server.listen(serverport);
    lrserver.listen(livereloadport);
});