# Hello World, Boilermaker style

This repo contains all official `Hello World` templates for [Boilermaker](https://github.com/yeajustmars/boilermaker).

This is the most basic template that Boilermaker has to offer. It demonstrates the following:

- How to set up a proper `boilermaker.toml` template configuration
- How directory structure is copied into your new project
- How basic variable interpolation works by rendering a `welcome_message` variable when run.

# Template Structure

- Branches are versions.
- Subdirectories are languages.
- The `main` branch is the latest development version.

# Usage

## Templates

See individual templates for instructions on how to install and run that language.

### TIP

If you want to install all languages, you can run the following BASH code:

> _NOTE_: Make sure to `cd /path/to/this/repo` before running the code below.

```bash
for lang in $(ls -d */); do boil install https://github.com/yeajustmars/boil-hello-world --lang=${lang%/}; done
```

## Source

If you want to add the source to your local cache, you can run the following:

```bash
boil sources add https://raw.githubusercontent.com/yeajustmars/boil-hello-world/refs/heads/main/boilermaker_source.toml

# boil sources list
# boil sources templates list <SOURCE_ID>
# boil sources templates install <TEMPLATE_ID_OR_NAME>
```
