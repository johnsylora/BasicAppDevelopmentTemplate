/* Created by sean olson on 10/24/2015. */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['source/assets/css/*.scss'],
                    dest: 'www/assets/css',
                    ext: '.css'
                }]
            }
        },
        copy: {
            options:{mode: true},
            root: {
                files:[
                    {expand: true, flatten: true, src: 'source/*.html', dest: 'www/', filter: 'isFile'},
                    {expand: true, flatten: true, src: 'source/*.ico', dest: 'www/', filter: 'isFile'}
                ]
            },
            images: {
                files:[
                    {expand: true, flatten: true, src: 'source/assets/img/*.*', dest: 'www/assets/img', filter: 'isFile'},
                ]
            },
            jslibs: {
                files:[
                    {expand: true, flatten: true, src: 'source/assets/js/libs/*.*', dest: 'www/assets/js/libs/', filter: 'isFile'},
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    protocol: 'http',
                    hostname: 'localhost',
                    base: './www',
                    open: true,
                    keepalive: true
                }
            }
        }

    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');


    // Default task(s).
    grunt.registerTask('default', ['sass', 'copy', 'connect']);





};

