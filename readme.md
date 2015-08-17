# Web-Fonts CLI

## Installation

```
$ npm install -g web-fonts-cli
```

## Usage

### Generate Web Fonts

Create `config.json` file with the containing data: 

```json
{
  "name": "Font Name",
  "version": "1.0.0"
}
```

*`version` will be used in `bower.json` file. default is: 0.0.1*


Place font files in `src` directory and run the following commands:

```
$ cd /fonts_example_dir
$ web-fonts create

# or the generate command
$ web-fonts generate
```

### Remove Generated Files

```
web-fonts clean
```

More details coming soon.

