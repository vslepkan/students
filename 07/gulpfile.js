"use strict";

let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task("css", function() {
  return gulp
    .src("src/sass/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("build"));
});

gulp.task("start", function() {
  gulp.watch("src/sass/**", gulp.series("css"));
});
