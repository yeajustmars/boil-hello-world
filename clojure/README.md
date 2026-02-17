# Template

boil-hello-world

Boilermaker Hello World in Clojure.

# Install

> If not done already, [install Boilermaker](https://boilermaker.dev/docs/install).

```bash
boil install https://github.com/yeajustmars/boil-hello-world --lang=clojure
```


# Usage

```bash
# boil install https://github.com/yeajustmars/boil-hello-world --lang=clojure

boil new boil-hello-world -Od /tmp -n boil-clj

cd /tmp/boil-clj

clj -M src/hello_world.clj

# Alternatively, if you have Babashka installed:
# bb src/hello_world.clj
```

