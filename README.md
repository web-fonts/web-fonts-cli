# Web-Fonts CLI

[![npm](https://img.shields.io/npm/v/web-fonts-cli.svg)](https://www.npmjs.com/package/web-fonts-cli)
[![npm](https://img.shields.io/npm/l/web-fonts-cli.svg)](https://www.npmjs.com/package/web-fonts-cli)
[![npm](https://img.shields.io/npm/dm/web-fonts-cli.svg)](https://www.npmjs.com/package/web-fonts-cli)

**Note**: This CLI does not create web font files from `.ttf` or something like that.

This is just a web-font *package* generator for the [Web-Fonts](https://github.com/web-fonts) project, so install it if you are contributor only.


## Installation

```
$ npm install web-fonts-cli -g
```

## Usage

### Create Web Fonts

Create `font.json` file with the containing data (or run the `init` command, see below): 

```json
{
  "name": "Font Name",
  "author": "Font Author",
  "version": "1.0.0"
}
```

* *`name` will be used in .css files as a `font-family` and etc.*
* *`author` will be used in `README.md` as credits.*
* *`version` will be used in package manager configuration file (`bower.json`, `package.json`). default is: 1.0.0.  Uses [Semantic Versioning](http://semver.org/).*


Place font files in `fonts` directory and run the following commands:

(it does not matter, what you'll call the font files, after running the `create` command it will rename it correspondingly)

```
$ cd /fonts_package_dir
$ web-fonts create
```

Optional `-f` flag, *forces* to clean previously created files.

```
$ web-fonts create -f
```


### Remove Generated Files

This command will remove everything, that was generated with the `create` command.

```
$ web-fonts clean
```

### Publishing Package

To publish package on Git run the following command:

**Note:** This command should be called only ONCE and only 1st time, after creating a package.

```
$ web-fonts publish git
```

To publish package on [Bower](http://bower.io) run the following command:

```
$ web-fonts publish bower
```


To publish package on [NPM](https://www.npmjs.com/) run the following command:

```
$ web-fonts publish npm
# or
$ npm publish
```

### Init Package

To automatically create `/fonts` directory and `font.json` file containing the default settings, run the following command:

```
$ web-fonts init
```

You can also pass the font name, as a first argument to the `init` method:

```
$ web-fonts init "My Font Name"
```

It will override the `name` property in the `font.json` file.

To override the `author`, you can pass the author name as a second argument to the `init` method:

```
$ web-fonts init "My Font Name" "Author Name"
```

To override the `version`, you can pass the [semver](http://semver.org/) object, as a third argument to the `init` method:

```
$ web-fonts init "My Font Name" "Author Name" 1.2.3
```

**Note:** *The order of arguments does matter.*
 
If you have already initialized or created `font.json` file and want to replace it's options, add the `-f` or `--force` flag at the end of the command:

```
$ web-fonts init "My Font Name" "Author Name" 1.2.4 -f
```

### Help

Run the following commands to display the help message.

```
$ web-fonts -h
$ # or
$ web-fonts --help
```

If you won't pass any arguments to `web-fonts` command, it will display help information automatically.


## License

The Web-Fonts CLI package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
