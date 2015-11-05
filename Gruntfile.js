// Generated on 2015-09-15 using
// generator-webapp 1.0.1
'use strict';

var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var devFlagPlugin = new webpack.DefinePlugin({
  _DEV_:JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});
var commonPlugins =  require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required grunt tasks
  require('jit-grunt')(grunt, {
      useminPrepare: 'grunt-usemin'
  });

  // Configurable paths
  var config = {
    app: 'wanke',
    dist: 'dist'
  };
  //Dynamically create list of files in a folder to bundle for webpack
  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      //bower: {
      //  files: ['bower.json'],
      //  tasks: ['wiredep']
      //},
      //babel: {
      //  files: ['<%= config.app %>/js/*.js','<%= config.app %>/**/*.html'],
        //tasks: ['webpack:build']
      //},
      gruntfile: {
        files: ['Gruntfile.js'],
        //tasks: ['webpack:build']
      },
      sass: {
        files: ['<%= config.app %>/**/*.{scss,sass}'],
        tasks: ['sass']
      }
      //styles: {
      //  files: ['<%= config.app %>/styles/**/*.css'],
      //  tasks: ['newer:autoprefixer']
      //}
    },

    browserSync: {
      options: {
        notify: false,
        background: true
      },
      livereload: {
        options: {
          files: [
            '<%= config.app %>/**/*.html',
            '<%= config.app %>/**/*.css',
            '<%= config.app %>/**/*',
            '<%= config.app %>/**/*.js'
          ],
          port: 9000,
          hostname: '192.168.1.146',
          server: {
            baseDir: ['<%= config.app %>/'],
            routes: {
              '/bower_components': './bower_components'
            }
          }
        }
      },
      dist: {
        options: {
          background: false,
          server: '<%= config.dist %>'
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '[.tmp,dest,dist]',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    useminPrepare: {
      options: {
        dest: 'dist/'   //最终需修改引用路径的html文件所在的目录,预先通过 copy:dist 把html复制到此目录下
      },
      html: '<%= config.app %>/**/*.html'  //原始html路径 文件引用部分使用 <!--build:{type} <path> --> <!--end build-->来创建block
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: [  //检测此目录下的被引用文件是否被修改
          'dist/styles',
          'dist/',
          'dist/scripts'
        ]
      },
      html:['dist/**/*.html']  // 需修改引用路径的html文件
    },

    uglify: {
      "my_target": {
        "files": [{
          'dist/scripts/app_signup.js': ['<%= config.app %>/scripts/jquery.js',
            '<%= config.app %>/scripts/validation.js',
            '<%= config.app %>/scripts/signup.js']
        },{
          'dist/scripts/app_signto.js': ['<%= config.app %>/scripts/jquery.js',
            '<%= config.app %>/scripts/validation.js',
            '<%= config.app %>/scripts/signto.js']
        },{
          'dist/scripts/app_activity.js': ['<%= config.app %>/scripts/jquery.js',
            '<%= config.app %>/scripts/signto.js']
        }]
      }
    },
    sass: {
      //options: {
      //  sourceMap: true
      //},
      dist: {
        files: {
          '.tmp/styles/main.css': '<%= config.app %>/sass/main.scss'
        }
      },
      server: {
        files: {
          '<%= config.app %>/styles/main.css': '<%= config.app %>/sass/main.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        map: true,
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '**/*.css',
          dest: 'dest/styles/'
        }]
      }
    },
    cssmin: {
      /*压缩 CSS 文件为 .min.css */
      options: {
        keepSpecialComments: 0 /* 移除 CSS 文件中的所有注释 */
      },
      minify: {
        expand: true,
        cwd: 'dest/styles/',
        src: '**/*.css',
        dest: 'dist/styles/',
        ext: '.min.css'
      }
    },
    concurrent: {
      dist: [
        'uglify',
        'cssmin'
      ]
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>/',
          src: '**/*.html',
          dest: 'dist/'
        }]
      },
      server: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'dist/',
          src: ['**'],
          dest: 'D:\\mywork\\server\\web\\activity'
        }]
      }
    },
    //webpack: {
    //  build: {
    //    entry:{
    //      bundle1:'D:\\demo2\\app\\webpackDemo\\js\\main.js'
    //    },
    //    output: {
    //      path: "<%= config.app %>/webpackDemo",
    //      filename: "[name].js"
    //    },
    //    module: {
    //      loaders:[
    //        //{ test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
    //        {test: /\.css$/, loader: "style!css"},
    //        {test: /\.(jpg|png)$/, loader: "url?limit=8192"},//inline base64 URLs for <=8k images, direct URLs for the rest
    //        {test: /\.scss$/, loader: "style!css!sass"}   //对于scss文件，先用sass-loader,再用css-loader,再用style-loader，使用时 -loader可省略
    //      ]
    //    },
    //    externals: {
    //      // require('data') is external and available
    //      //  on the global var data
    //      'data': 'data2'
    //    },
    //    plugins:[
    //      new webpack.ProvidePlugin({
    //        $: "jquery",
    //        jQuery: "jquery",
    //        "window.jQuery": "jquery"
    //      })
    //    ]
    //
    //  }
    //}

  });
  //grunt.registerTask('grunt-webpack',['webpack:build']);


  grunt.registerTask('serve', 'start the server and preview your app', function (target) {

    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      //'clean:server',
      //'wiredep',
      //'concurrent:server',
      'sass:server',
      //'autoprefixer',
      //'webpack:build',
      'browserSync:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });

  grunt.registerTask('build', [
    'clean:dist',
    //'wiredep',
     'copy:dist',
    'useminPrepare',
    'sass:dist',
    'autoprefixer',
    'concurrent:dist',
    'usemin',
    'copy:server'
  ]);

  grunt.registerTask('default', [
    'newer:eslint',
    'build'
  ]);


};
