/* stephe/artiste
 *
 * /gulpfile.js - Gulp tasks
 *
 * coded by stephecloutier@gmail.com
 * started at 27/02/2017
 */

var gulp = require("gulp"),
    image = require("gulp-image"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    csso = require("gulp-csso"),
    pug = require("gulp-pug"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

// --- Tasks for images

    gulp.task("images", function() {
        gulp.src("src/images/**")
            .pipe(image())
            .pipe(gulp.dest("assets/images"));
   });

// --- browserSync task

gulp.task("sync", ['css'], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("src/sass/**/*.scss", ['css']);
    gulp.watch("../index.html").on("change", browserSync.reload);
});

// --- Tasks for styles

    gulp.task("css", function() {
        gulp.src("src/sass/**/*.scss")
            .pipe(sourcemaps.init())
                .pipe(sass().on("error", sass.logError))
                .pipe(autoprefixer())
                .pipe(csso())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("assets/css"))
            .pipe(browserSync.stream());
   });

// --- Tasks for pug

    gulp.task("html", function() {
        gulp.src("src/pug/**/*.pug")
            .pipe(sourcemaps.init())
                .pipe(pug({}))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("."))
   });


// --- Watch tasks

    gulp.task("watch", function(){
        gulp.watch("src/images/**", ["images"]);
        gulp.watch("src/sass/**/*.scss", ["css"]);
        gulp.watch("src/pug/**/*.pug", ["html"]);
   });

// --- Aliases

    gulp.task("default", ["images", "sync", "html", "css"]);
    gulp.task("work", ["default", "watch"]);
