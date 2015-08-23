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

Create `font.json` file with the containing data: 

```json
{
  "name": "Font Name",
  "version": "1.0.0"
}
```

* *`name` will be used in .css files as a `font-family` and etc.*
* *`version` will be used in package manager configuration file (`bower.json`, `package.json`). default is: 1.0.0.  Uses [Semantic Versioning](http://semver.org/).*


Place font files in `fonts` directory and run the following commands:

(it does not matter, what you'll call the font files, after running the `create` command it will rename it correspondingly )

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

To publish package on [Bower](http://bower.io) run the following command:

```
$ web-fonts publish bower
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

To override the `version`, you can pass the [semver](http://semver.org/) object, as a second argument to the `init` method:

```
$ web-fonts init "My Font Name" 1.2.3
```

**Note:** *The order of arguments does matter.*
 
If you have already initialized or created `font.json` file and want to replace it's options, add the `-f` or `--force` flag at the end of the command:

```
$ web-fonts init "My Font Name" 1.2.4 -f
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

The MIT License (MIT)

Copyright (c) 2015 Lado Lomidze

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.