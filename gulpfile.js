const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const changed = require('gulp-changed');

const connect = require('gulp-connect');
// let livereload = require('gulp-livereload');

// var wait = require('gulp-wait');
// var waitD1 = 5000;

const distPath = 'dist';

gulp.task('serve', function () {
    connect.server({
        name: 'Hello Wrold',
        root: 'dist',
        port: 8000,
        livereload: true
    });
});

gulp.task( 'watch', function() {
    gulp.watch( 'scss/**/*.scss', ['styles'] );
    gulp.watch( 'js/**/*.js', ['scripts'] );
    gulp.watch( 'index.html', ['views'] );
} );

gulp.task( 'styles', function() {
    return gulp.src('scss/*')
    .pipe( sass() )
    .pipe( gulp.dest(distPath + '/css'))
    .pipe( connect.reload() );        
} );

gulp.task( 'views', function () {
    return gulp.src( 'index.html' )
    .pipe( gulp.dest(distPath + '/') )
    .pipe( connect.reload() );        
} );

gulp.task( 'scripts', function () {
    return gulp.src( 'js/**/*.js' ) // Matches 'client/js/somedir/somefile.js' and resolves `base` to `js/`
    //       .pipe(minify())
    //     .pipe( wait( waitD1 ) )
    .pipe( gulp.dest(distPath + '/js') )
    .pipe( connect.reload() );        
} );


gulp.task( 'reload', function () {
    return ( connect.reload() );
} );

gulp.task( 'build', ['views', 'styles', 'scripts'], function() {
    return 0;
} );

gulp.task( 'default', ['build', 'serve', 'watch'], function() {
    return 0;
} );