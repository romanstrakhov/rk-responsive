var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task( 'watch', function() {
    gulp.watch( 'scss/**/*.scss', ['styles'] );
} );

gulp.task( 'styles', function() {
    return gulp.src('scss/*')
        .pipe( sass() )
        .pipe( gulp.dest('../css'));
} );

gulp.task( 'default', function() {
    return 0;
} );
