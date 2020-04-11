const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ()=>
    gulp.src('./css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
);