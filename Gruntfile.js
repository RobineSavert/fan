module.exports = function(grunt) {

    require('time-grunt')(grunt);
	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    imagemin: {
          peter:{
              files: [{
                  expand: true,
                  cwd: 'peter/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'peter/img'
              }]
          },
          sots:{
              files: [{
                  expand: true,
                  cwd: 'sots/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'sots/img'
              }]
          },
          islam:{
              files: [{
                  expand: true,
                  cwd: 'islam/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'islam/img'
              }]
          },
          feminism:{
              files: [{
                  expand: true,
                  cwd: 'feminism/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'feminism/img'
              }]
          },
          brown:{
              files: [{
                  expand: true,
                  cwd: 'brown/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'brown/img'
              }]
          },
          scl:{
              files: [{
                  expand: true,
                  cwd: 'scl/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'scl/img'
              }]
          },
          nanny:{
              files: [{
                  expand: true,
                  cwd: 'nanny/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'nanny/img'
              }]
          },
          bohemian:{
              files: [{
                  expand: true,
                  cwd: 'bohemian/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'bohemian/img'
              }]
          },
          hxb:{
              files: [{
                  expand: true,
                  cwd: 'hxb/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'hxb/img'
              }]
          },
          kells:{
              files: [{
                  expand: true,
                  cwd: 'kells/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'kells/img'
              }]
          },
          ride:{
              files: [{
                  expand: true,
                  cwd: 'ride/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'ride/img'
              }]
          },
          tigerseye:{
              files: [{
                  expand: true,
                  cwd: 'tigerseye/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'tigerseye/img'
              }]
          },
          wildflowers:{
              files: [{
                  expand: true,
                  cwd: 'wildflowers/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'wildflowers/img'
              }]
          },
          exo:{
              files: [{
                  expand: true,
                  cwd: 'exo/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'exo/img'
              }]
          },
          vwbus:{
              files: [{
                  expand: true,
                  cwd: 'vwbus/img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'vwbus/img'
              }]
          },
          efteling:{
              files: [{
                  expand: true,
                  cwd: 'efteling/img2/',
                  src: ['**/*.{png,jpg,gif,JPG}'],
                  dest: 'efteling/img'
              }]
          },
          cony:{
              files: [{
                  expand: true,
                  cwd: 'cony/img2/',
                  src: ['**/*.{png,jpg,gif,JPG}'],
                  dest: 'cony/img'
              }]
          },
          pirates:{
              files: [{
                  expand: true,
                  cwd: 'pirates/img2/',
                  src: ['**/*.{png,jpg,gif,JPG}'],
                  dest: 'pirates/img'
              }]
          },
          ondine:{
              files: [{
                  expand: true,
                  cwd: 'ondine/img2/',
                  src: ['**/*.{png,jpg,gif,JPG}'],
                  dest: 'ondine/img'
              }]
          },
          nostalgia:{
              files: [{
                  expand: true,
                  cwd: 'nostalgia/img2/',
                  src: ['**/*.{png,jpg,gif,JPG}'],
                  dest: 'nostalgia/img'
              }]
          },
          wes:{
              files: [{
                  expand: true,
                  cwd: 'wes/img2/',
                  src: ['**/*.{png,jpg,gif,JPG}'],
                  dest: 'wes/img'
              }]
          },
          charles:{
              files: [{
                  expand: true,
                  cwd: 'charles/img2/',
                  src: ['**/*.{png,jpg,gif,JPG}'],
                  dest: 'charles/img'
              }]
          },
        mermaids:{
            files: [{
                expand: true,
                cwd: 'mermaids/img2/',
                src: ['**/*.{png,jpg,gif,JPG}'],
                dest: 'mermaids/img'
            }]
        },
        lisa:{
            files: [{
                expand: true,
                cwd: 'lisa/img2/',
                src: ['**/*.{png,jpg,gif,JPG}'],
                dest: 'lisa/img'
            }]
        },
          ships:{
              files: [{
                  expand: true,
                  cwd: 'ships/img2/',
                  src: ['**/*.{png,jpg,gif,JPG}'],
                  dest: 'ships/img'
              }]
          },
        dandelions:{
            files: [{
                expand: true,
                cwd: 'dandelions/img2/',
                src: ['**/*.{png,jpg,gif,JPG}'],
                dest: 'dandelions/img'
            }]
        },
        girl:{
            files: [{
                expand: true,
                cwd: 'girl/img2/',
                src: ['**/*.{png,jpg,gif,JPG}'],
                dest: 'girl/img'
            }]
        },
        hook:{
            files: [{
                expand: true,
                cwd: 'hook/img2/',
                src: ['**/*.{png,jpg,gif,JPG}'],
                dest: 'hook/img'
            }]
        },
        hyperbole:{
            files: [{
                expand: true,
                cwd: 'hyperbole/img2/',
                src: ['**/*.{png,jpg,gif,JPG}'],
                dest: 'hyperbole/img'
            }]
        },
        blacksails:{
            files: [{
                expand: true,
                cwd: 'blacksails/img2/',
                src: ['**/*.{png,jpg,gif,JPG}'],
                dest: 'blacksails/img'
            }]
        },
        selkies:{
            files: [{
                expand: true,
                cwd: 'selkies/img2/',
                src: ['**/*.{png,jpg,gif,JPG}'],
                dest: 'selkies/img'
            }]
        },
        facilier:{
            files: [{
                expand: true,
                cwd: 'facilier/img2/',
                src: ['**/*.{png,jpg,gif,JPG}'],
                dest: 'facilier/img'
            }]
        },
        baymax:{
            files: [{
                expand: true,
                cwd: 'baymax/img2/',
                src: ['**/*.{png,jpg,gif,JPG}'],
                dest: 'baymax/img'
            }]
        },
          dynamic: {
              files: [{
                  expand: true,
                  cwd: 'img2/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'img'
              }]
          }
      },



    sass: {
        peter: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'peter/css2/',
                src: ['**/*.scss'],
                dest: 'peter/',
                ext: '.css'
            }]
        },
        sots: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'sots/css2/',
                src: ['**/*.scss'],
                dest: 'sots/',
                ext: '.css'
            }]
        },
        islam: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'islam/css2/',
                src: ['**/*.scss'],
                dest: 'islam/',
                ext: '.css'
            }]
        },
        feminism: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'feminism/css2/',
                src: ['**/*.scss'],
                dest: 'feminism/',
                ext: '.css'
            }]
        },
        brown: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'brown/css2/',
                src: ['**/*.scss'],
                dest: 'brown/',
                ext: '.css'
            }]
        },
        scl: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'scl/css2/',
                src: ['**/*.scss'],
                dest: 'scl/',
                ext: '.css'
            }]
        },
        nanny: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'nanny/css2/',
                src: ['**/*.scss'],
                dest: 'nanny/',
                ext: '.css'
            }]
        },
        bohemian: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'bohemian/css2/',
                src: ['**/*.scss'],
                dest: 'bohemian/',
                ext: '.css'
            }]
        },
        hxb: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'hxb/css2/',
                src: ['**/*.scss'],
                dest: 'hxb/',
                ext: '.css'
            }]
        },
        kells: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'kells/css2/',
                src: ['**/*.scss'],
                dest: 'kells/',
                ext: '.css'
            }]
        },
        ride: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'ride/css2/',
                src: ['**/*.scss'],
                dest: 'ride/',
                ext: '.css'
            }]
        },
        tigerseye: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'tigerseye/css2/',
                src: ['**/*.scss'],
                dest: 'tigerseye/',
                ext: '.css'
            }]
        },
        wildflowers: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'wildflowers/css2/',
                src: ['**/*.scss'],
                dest: 'wildflowers/',
                ext: '.css'
            }]
        },
        exo: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'exo/css2/',
                src: ['**/*.scss'],
                dest: 'exo/',
                ext: '.css'
            }]
        },
        vwbus: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'vwbus/css2/',
                src: ['**/*.scss'],
                dest: 'vwbus/',
                ext: '.css'
            }]
        },
        efteling: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'efteling/css2/',
                src: ['**/*.scss'],
                dest: 'efteling/',
                ext: '.css'
            }]
        },
        cony: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'cony/css2/',
                src: ['**/*.scss'],
                dest: 'cony/',
                ext: '.css'
            }]
        },
        pirates: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'pirates/css2/',
                src: ['**/*.scss'],
                dest: 'pirates/',
                ext: '.css'
            }]
        },
        ondine: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'ondine/css2/',
                src: ['**/*.scss'],
                dest: 'ondine/',
                ext: '.css'
            }]
        },
        nostalgia: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'nostalgia/css2/',
                src: ['**/*.scss'],
                dest: 'nostalgia/',
                ext: '.css'
            }]
        },
        wes: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'wes/css2/',
                src: ['**/*.scss'],
                dest: 'wes/',
                ext: '.css'
            }]
        },
        charles: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'charles/css2/',
                src: ['**/*.scss'],
                dest: 'charles/',
                ext: '.css'
            }]
        },
        mermaids: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'mermaids/css2/',
                src: ['**/*.scss'],
                dest: 'mermaids/',
                ext: '.css'
            }]
        },
        lisa: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'lisa/css2/',
                src: ['**/*.scss'],
                dest: 'lisa/',
                ext: '.css'
            }]
        },
        ships: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'ships/css2/',
                src: ['**/*.scss'],
                dest: 'ships/',
                ext: '.css'
            }]
        },
        dandelions: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'dandelions/css2/',
                src: ['**/*.scss'],
                dest: 'dandelions/',
                ext: '.css'
            }]
        },
        girl: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'girl/css2/',
                src: ['**/*.scss'],
                dest: 'girl/',
                ext: '.css'
            }]
        },
        hook: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'hook/css2/',
                src: ['**/*.scss'],
                dest: 'hook/',
                ext: '.css'
            }]
        },
        hyperbole: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'hyperbole/css2/',
                src: ['**/*.scss'],
                dest: 'hyperbole/',
                ext: '.css'
            }]
        },
        blacksails: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'blacksails/css2/',
                src: ['**/*.scss'],
                dest: 'blacksails/',
                ext: '.css'
            }]
        },
        selkies: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'selkies/css2/',
                src: ['**/*.scss'],
                dest: 'selkies/',
                ext: '.css'
            }]
        },
        facilier: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'facilier/css2/',
                src: ['**/*.scss'],
                dest: 'facilier/',
                ext: '.css'
            }]
        },
        baymax: {
            options: {
                compress: false,
                sourcemap: 'none'
            },
            files: [{
                expand: true,
                cwd: 'baymax/css2/',
                src: ['**/*.scss'],
                dest: 'baymax/',
                ext: '.css'
            }]
        },
      
      dist: {
    options: {
        style: 'compressed' 
      }
     
      }
    },

      copy: {
          main: {
              files: [
                  // Fonts.
                  {
                      expand: true,
                      filter: 'isFile',
                      flatten: true,
                      cwd: 'bower_components/',
                      src: ['components-font-awesome/fonts/**'],
                      dest: '../fonts'
                  }
              ]
          }
      }


  });

    // 3. Where we tell Grunt we plan to use this plug-in.

 grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-newer');
    


    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['newer:imagemin', 'sass', 'build']);
}


