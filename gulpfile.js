var gulp = require('gulp'),
	gutil = require('gulp-util'),
	gulpwebserver = require('gulp-webserver'),
	nodemon = require('gulp-nodemon');

gulp.task('start', function(){
	nodemon({
		script: 'server.js'
	});
});

gulp.task('js', function(){
	gulp.src('public/js/**/*');
});

gulp.task('css', function(){
	gulp.src('public/css/**/*');
});

gulp.task('html', function(){
	gulp.src('public/views/*.html');
});

gulp.task('watch', function(){
	gulp.watch(['public/js/**/*','*.js'], ['js']);
	gulp.watch('public/css/**/*', ['css']);
	gulp.watch('public/views/*.html', ['html']);
});

gulp.task('gulpwebserver', function(){
	gulp.src('')
		.pipe(gulpwebserver({
			livereload: true,
			open: true
		}));
});

gulp.task('default',['watch','start','html','css','js','gulpwebserver']);