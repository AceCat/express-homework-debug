var gulp  = require('gulp');
var less  = require('gulp-less');
var watch = require('gulp-watch');

// watch task listen for saves on a specific file
//then runs, the task you want

gulp.task('watch', function(){
  // first argument is an array of files
  // second argument is an array of tasks to run
  // * is telling gulp to watch every file
  // in the folder with an extension of .less
  gulp.watch(['./server/public/styles/*.less'], ['compile-less'])
})

gulp.task('compile-less', function(){
  // ./ starts you at the same level as whatever
  // file you are in
  gulp.src('./server/public/styles/style.less')
  .pipe(less())
  .pipe(gulp.dest('./server/public/styles/'))
})


// default task we are not making up the
// default name, second arg is an array of tasks to be run
gulp.task('default', ['compile-less', 'watch'])



