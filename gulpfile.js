const gulp = require('gulp');
// const watch = require('gulp-watch');
const sass = require('gulp-sass');
// const changed = require('gulp-changed');
const connect = require('gulp-connect');
// let livereload = require('gulp-livereload');
// var wait = require('gulp-wait');
// var waitD1 = 5000;

const distPath = 'dist';

gulp.task('serve', () => {
  connect.server({
    name: 'Hello World',
    root: 'dist',
    port: 8000,
    livereload: true,
  });
});

gulp.task('watch', () => {
  gulp.watch('scss/**/*.scss', gulp.series('styles'));
  gulp.watch('js/**/*.js', gulp.series('scripts'));
  gulp.watch('index.html', gulp.series('views'));
});

gulp.task('styles', () => gulp.src('scss/*')
  .pipe(sass())
  .pipe(gulp.dest(`${distPath}/css`))
  .pipe(connect.reload()));

gulp.task('views', () => gulp.src('index.html')
  .pipe(gulp.dest(`${distPath}/`))
  .pipe(connect.reload()));

gulp.task('scripts', () => gulp.src('js/**/*.js') // Matches 'client/js/somedir/somefile.js' and resolves `base` to `js/`
  //       .pipe(minify())
  //     .pipe( wait( waitD1 ) )
  .pipe(gulp.dest(`${distPath}/js`))
  .pipe(connect.reload()));


gulp.task('reload', () => (connect.reload()));
gulp.task('build', gulp.parallel('views', 'styles', 'scripts'), () => 0);
gulp.task('default', gulp.parallel('build', 'serve', 'watch'), () => 0);
