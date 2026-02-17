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

See individual templates for instructions on how to run that language.

## TIP

If you want to install all languages, you can run the following BASH code:

```bash
for lang in $(ls -d */); do boil install https://github.com/yeajustmars/boil-hello-world --lang=${lang%/} done
```
