const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const del = require("del");
const babel = require("gulp-babel");
const useref = require("gulp-useref");
const gulpif = require("gulp-if");
const uglify = require("gulp-uglify");

const clean = () => del(["dist"]);

async function css() {
    return gulp
        .src("css/!(*.min)*.css")
        .pipe(
            autoprefixer({
                cascade: false
            })
        )
        .pipe(cleanCSS())
        .pipe(
            rename({
                suffix: ".min"
            })
        )
        .pipe(gulp.dest("dist/css"));
}

async function img() {
    gulp.src("img/!(*.min).*")
        .pipe(imagemin())
        .pipe(
            rename({
                suffix: ".min"
            })
        )
        .pipe(gulp.dest("dist/img"));
}

async function serve() {
    browserSync.init({
        server: "./dist"
    });
}

async function reload() {
    browserSync.reload();
}

async function html() {
    return gulp
        .src("**/*.html")
        .pipe(useref())
        .pipe(
            gulpif(
                "*.js",
                babel({
                    compact: false,
                    presets: ["@babel/env"]
                })
            )
        )
        .pipe(gulpif("*.js", uglify()))
        .pipe(gulp.dest("dist"));
}

async function watch() {
    gulp.watch("css/!(*.min)*.css", gulp.series(css, reload));
    gulp.watch("img/!(*.min).*", gulp.series(img, reload));
    gulp.watch("*.html", reload);
}

async function pdf() {
    gulp.src("*.pdf").pipe(gulp.dest("dist"));
}

exports.default = gulp.series(html, css, img, pdf, serve, watch);
exports.build = gulp.series(html, css, pdf, img);
