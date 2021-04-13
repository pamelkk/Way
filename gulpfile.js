const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
const sync = require("browser-sync").create();
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const jsmin = require("gulp-jsmin");

// Styles
gulp.task("styles", () => {
    return gulp.src("source/sass/style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("build/css/"));
});

gulp.task("clean", () => {
    return del([
        "css/main.css",
    ]);
});

// Html
gulp.task("html", () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build/."))
    .pipe(sync.stream());
});


// Js
gulp.task("js", () => {
  return gulp.src("source/js/java.js")
    .pipe(jsmin())
    .pipe(rename("min-js.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
});


gulp.task("clean", () => {
  return del("build");
});

// Images
gulp.task("images", () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
      .pipe(imagemin([
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.mozjpeg({progressive: true}),
        imagemin.svgo()
      ]));
});

// Server
gulp.task("server", (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
});

// Watcher

gulp.task('watcher', () => {
  gulp.watch('source/sass/**/*.scss', (done) => {
      gulp.series(['styles'])(done);
  });
  gulp.watch("source/js/*.js", (done) => {
    gulp.series(['js'])(done);
});
gulp.watch("source/*.html", (done) => {
  gulp.series(['html'])(done);
});
});

gulp.task("copy", () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.ico"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series(["clean", "copy", "styles", "html", "js", "images"]));
gulp.task("start", gulp.series(["clean", "copy", "styles", "html", "js", "images", "server", "watcher"]));
