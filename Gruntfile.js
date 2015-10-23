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
    app: 'app',
    dist: 'dist'
  };
  //Dynamically create list of files in a folder to bundle for webpack
  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      babel: {
        files: ['<%= config.app %>/Forms/js/*.js','<%= config.app %>/Forms/**/*.html']
        //tasks: ['webpack:build']
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        //tasks: ['webpack:build']
      },
      sass: {
        files: ['<%= config.app %>/**/*.{scss,sass}'],
        tasks: ['compass']
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
            baseDir: ['<%= config.app %>/Forms'],
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
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: '<%= config.app %>/',
          cssDir: '.tmp',
          imagesDir: '<%= config.app %>/',
          environment: 'production'
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
          cwd: '.tmp/',
          src: '**/*.css',
          dest: '<%= config.app %>/styles/'
        }]
      }
    },
    webpack: {
      build: {
        entry:{
          bundle1:'D:\\demo2\\app\\Forms\\js\\main.js'
        },
        output: {
          path: "<%= config.app %>/Forms",
          filename: "[name].js"
        },
        module: {
          loaders:[
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(jpg|png)$/, loader: 'url-loader?limit=8192' }  //inline base64 URLs for <=8k images, direct URLs for the rest
          ]
        },
        externals: {
          // require('data') is external and available
          //  on the global var data
          'data': 'data2'
        },
        plugins:[
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
          })
        ]

      }
    }

  });
  grunt.registerTask('grunt-webpack',['webpack:build']);


  grunt.registerTask('serve', 'start the server and preview your app', function (target) {

    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      //'clean:server',
      //'wiredep',
      //'concurrent:server',
      //'compass',
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
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    //'postcss',
    'concat',
    //'sass',
    'cssmin',
    'uglify',
    'copy:dist',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:eslint',
    'build'
  ]);


};
