'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// configurable paths
	var yeomanConfig = {
		app: 'app',
		dist: 'dist',
		tmp: '.tmp',
		host: 'http://localhost:8080/coletor'
	};

	try {
		yeomanConfig.app = require('./component.json').appPath || yeomanConfig.app;
	} catch (e) {}

	grunt.initConfig({
		yeoman: yeomanConfig,
		connect: {
			options: {
				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: 'localhost',
			},
			dist: {
				options: {
					base: '<%= yeoman.dist %>'
				}
			},
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, yeomanConfig.tmp),
							mountFolder(connect, yeomanConfig.app)
						];
					}
				}
			},
			test: {
				options: {
					middleware: function (connect) {
						return [
							mountFolder(connect, yeomanConfig.tmp),
							mountFolder(connect, 'test')
						];
					}
				}
			}
		},
		open: {
			server: {
				url: 'http://localhost:<%= connect.options.port %>'
			}
		},
		clean: {
			predist: '<%= yeoman.tmp %>',
			dist: '<%= yeoman.dist %>'
		},
		copy: {
			predist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.tmp %>',
					src: '**/*'
				}]
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/scripts/{,*/}*.js'
			]
		},
		replace: {
			dist: {
				src: ['<%= yeoman.tmp %>/scripts/**/*.js'],
				overwrite: true,
				replacements: [{
					from: '@@host',
					to: '<%= yeoman.host %>'
				}]
			}
		},
		compass: {
			options: {
				sassDir: '<%= yeoman.tmp %>/styles',
				cssDir: '<%= yeoman.tmp %>/styles',
				imagesDir: '<%= yeoman.tmp %>/images',
				javascriptsDir: '<%= yeoman.tmp %>/scripts',
				fontsDir: '<%= yeoman.tmp %>/styles/fonts',
				relativeAssets: true
			},
			dist: {},
		},
		useminPrepare: {
			html: '<%= yeoman.tmp %>/index.html',
			options: {
				dest: '<%= yeoman.dist %>'
			}
		},
		concat: {},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.tmp %>/images',
					src: '{,*/}*.{png,jpg,jpeg}',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		cssmin: {
		},
		htmlmin: {
			views: {
				options: {
					useShortDoctype: true,
					collapseBooleanAttributes: true,
					removeRedundantAttributes: true,
					removeComments: true,
					collapseWhitespace: true
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.tmp %>',
					src: ['views/*.html'],
					dest: '<%= yeoman.dist %>'
				}]
			},
			index: {
				options: {
					useShortDoctype: true,
					collapseBooleanAttributes: true,
					removeRedundantAttributes: true
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.tmp %>',
					src: ['*.html'],
					dest: '<%= yeoman.dist %>'
				}]
			}
		},
		cdnify: {
			dist: {
				html: ['<%= yeoman.dist %>/*.html']
			}
		},
		groundskeeper: {
			options: {
				console: false,
				debugger: false
			},
			files: {
				expand: true,
				cwd: '<%= yeoman.dist %>/scripts',
				src: '*.js',
				dest: '<%= yeoman.dist %>/scripts'
			}
		},
		ngmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.dist %>/scripts',
					src: '*.js',
					dest: '<%= yeoman.dist %>/scripts'
				}]
			}
		},
		uglify: {
		},
		rev: {
			dist: {
				files: {
					src: [
						'<%= yeoman.dist %>/scripts/{,*/}*.js',
						'<%= yeoman.dist %>/components/{,*/}*.js',
						'<%= yeoman.dist %>/styles/{,*/}*.css',
						'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
						'<%= yeoman.dist %>/styles/fonts/*'
					]
				}
			}
		},
		usemin: {
			html: ['<%= yeoman.dist %>/{,*/}*.html'],
			css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
			options: {
				dirs: ['<%= yeoman.dist %>']
			}
		},
		watch: {
			livereload: {
				files: [
					'<%= yeoman.app %>/{,*/}*.html',
					'<%= yeoman.app %>/styles/{,*/}*.{scss,sass}',
					'<%= yeoman.app %>/scripts/{,*/}*.js',
					'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				],
				tasks: [
					'copy',
					'jshint',
					'replace',
					'compass',
					'livereload'
				]
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			},
			unitContinuous: {
				configFile: 'karma.conf.js',
				browsers: ['PhantomJS'],
				autoWatch: true
			}
		}
	});

	grunt.registerTask('test', function(target) {
		if (target === 'continuous') {
			return grunt.task.run([
				'jshint',
				'clean:predist',
				'copy',
				'replace',
				'compass',
				'connect:test',
				'karma:unitContinuous'
			]);
		}

		grunt.task.run([
			'jshint',
			'clean:predist',
			'copy',
			'replace',
			'compass',
			'connect:test',
			'karma:unit'
		]);
	});

	grunt.registerTask('build', [
		'jshint',
		'test',
		'clean',
		'copy',
		'replace',
		'compass',
		'useminPrepare',
		'concat',
		'imagemin',
		'cssmin',
		'htmlmin',
		'cdnify',
		'groundskeeper',
		'ngmin',
		'uglify',
		'rev',
		'usemin',
		'clean:predist'
	]);

	grunt.registerTask('default', ['build']);

	grunt.renameTask('regarde', 'watch');

	grunt.registerTask('buildWithoutTest', [
		'clean',
		'jshint',
		'copy',
		'replace',
		'compass',
		'useminPrepare',
		'concat',
		'imagemin',
		'cssmin',
		'htmlmin',
		'cdnify',
		'groundskeeper',
		'ngmin',
		'uglify',
		'rev',
		'usemin'
	]);

	grunt.registerTask('server', function(target) {
		if (target === 'dist') {
			return grunt.task.run(['buildWithoutTest', 'open', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:predist',
			'jshint',
			'copy',
			'replace',
			'compass',
			'livereload-start',
			'connect:livereload',
			'open',
			'watch'
		]);
	});
};
