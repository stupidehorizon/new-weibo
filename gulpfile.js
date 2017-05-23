const gulp=require('gulp')
const less=require('gulp-less')
const watch=require('gulp-watch')
const livereload=require('gulp-livereload')
 
gulp.task('server', function() {
  gulp.src('./app.js')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true,
      port:3000
    }));
})

gulp.task('less',function(){
	return gulp.src('./public/less/*.less')
	 	.pipe(less())
		.pipe(gulp.dest('./public/css'))
		.pipe(livereload())
})


 
gulp.task('watch', function() {
  livereload.listen()
  gulp.watch('./public/less/*.less',['less'])
  gulp.watch('./views/**/*.ejs',['less'])
});
