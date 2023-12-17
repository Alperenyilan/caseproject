import gulp from "gulp";
const { src, dest, series, watch } = gulp;

import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import cssMinify from "gulp-clean-css";
import jsMinify from "gulp-terser";
import * as sass from "sass";
const scss = gulpSass(sass);

function styles() {
  return src("./src/components/headers/**/*.scss")
    .pipe(scss())
    .pipe(autoPrefixer("last 2 versions"))
    .pipe(cssMinify())
    .pipe(dest("./src/dist/styles/"));
}
function scripts() {
  return src("./src/components/footer/**/*.js")
    .pipe(jsMinify())
    .pipe(dest("./src/dist/scripts/"));
}

function watchTask() {
  watch(
    ["./frontend/src/styles/**/*.scss", "./frontend/src/scripts/**/*.js"],
    series(styles, scripts)
  );
}

export default series(styles, scripts, watchTask);
