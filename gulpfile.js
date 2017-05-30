const gulp=require('gulp')
const less=require('gulp-less')
const watch=require('gulp-watch')
const livereload=require('gulp-livereload')
const nodemon=require('gulp-nodemon')
 

gulp.task('less',function(){
	return gulp.src('./public/less/*.less')
	 	.pipe(less())
		.pipe(gulp.dest('./public/css'))
		.pipe(livereload())
})

gulp.task('start', function () {
  nodemon({
    script: './app.js'
  , ext: 'js'
  , env: { 'NODE_ENV': 'development' }
  })
})
 
gulp.task('watch', function() {
  livereload.listen()
  gulp.watch('./public/less/*.less',['less'])
  gulp.watch('./views/**/*.ejs',['less'])
});

gulp.task('default', ['start','watch'])
