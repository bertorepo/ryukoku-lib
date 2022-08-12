const { series } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
}

function watch() {
  gulp.watch("./sass/**/*.scss", series(buildStyles));
}

exports.buildStyles = buildStyles;
exports.watch = watch;
exports.default = series(watch);
