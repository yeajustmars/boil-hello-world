# Template

boil-hello-world

Boilermaker Hello World in Clojure.

# Install

> If not done already, [install Boilermaker](https://boilermaker.dev/docs/install).

```bash
boil install https://github.com/yeajustmars/boil-hello-world --lang=clojure --rename=hello-world
```


# Usage

```bash
boil new hello-world -l clojure -Od /tmp -n boil-clj

cd /tmp/boil-clj

clojure -M -m hello-world

# Or, alternatively, if you have Babashka installed:
# bb -cp src -m hello-world
```

