var gulp = require('gulp');
//加载gulp-load-plugins插件，并马上运行它
var plugins = require('gulp-load-plugins')();
var app = 'laboratory';
//使用connect启动一个Web服务器
gulp.task('connect', function () {
  plugins.connect.server({
    root: app,
    livereload: true
  });
});

gulp.task('default', function() {
  gulp.start('connect', 'watch');
});

gulp.task('build', ['clean'], function() {
  gulp.start('styles', 'scripts','images');
});
//gulp.start开始任务前会先执行清理(clean)任务[task dependencies]-->任务依赖。Gulp中所有的任务都是并行(concurrently)执行，
// 并没有先后顺序哪个任务会先完成，所以我们需要确保clean任务在其他任务开始前完成


gulp.task('styles', function() {
  return plugins.rubySass('gulpDemo/src/styles/main.scss', { style: 'expanded' })
    .pipe(plugins.autoprefixer('last 2 version', 's' +
      'afari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('gulpDemo/dist/assets/css'))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('gulpDemo/dist/assets/css'))
    .pipe(plugins.notify({ message: 'Styles task complete' }))
    .pipe(plugins.livereload());
});

gulp.task('scripts', function() {
  return gulp.src('gulpDemo/src/scripts/**/*.js')
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(plugins.concat('main.js'))
    .pipe(gulp.dest('gulpDemo/dist/assets/js'))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('gulpDemo/dist/assets/js'))
    .pipe(plugins.notify({ message: 'Scripts task complete' }))
    .pipe(plugins.livereload());
});

gulp.task('images', function() {
  return gulp.src('gulpDemo/src/images/**/*')
    .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))  //只有新的或更动的图片会被压缩
    .pipe(gulp.dest('gulpDemo/dist/assets/img'))
    .pipe(plugins.notify({ message: 'Images task complete' }))
    .pipe(plugins.livereload());
});

gulp.task('clean', function() {
  return gulp.src(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], {read: false})
  //加入 read:false 避免读取删除的文档，加快进程
    .pipe(plugins.clean());
});
gulp.task('html', function () {
  gulp.src(app + '/**/*.html')
    .pipe(plugins.livereload());
});
gulp.task('css', function () {
  gulp.src(app + '/**/*.css')
    .pipe(plugins.livereload());
});
gulp.task('watch', function() {
  plugins.livereload.listen();
  gulp.watch(['gulpfile.js']);
  gulp.watch([app + '/**/*.html'], ['html']);
  gulp.watch(app + '/**/*.css',['css']);
  gulp.watch(app + '/**/*.scss', ['styles']);
  gulp.watch(app + '/**/*.js', ['scripts']);
  gulp.watch(app + '/**/*.{jpg,jpeg,gif,png}', ['images']);
  });

  //依然使用 [ task dependencies ]


