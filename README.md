# sample_typescript_dev_tools
prepare development for Typescript

## Enviroment
Setup in the following environment.

* Typescript
* eslint
* prettier
* webpack

## Quick start

### Run node.js by docker-conpose

```
$ docker-compose build
$ docker-compose up -d
$ node -v
v15.14.0
```

### Check style format

```
$ docker-compose build
$ docker-compose up -d

# check style
$ docker-compose exec app yarm fmt

# fix style
$ docker-compose exec app yarm fmt:fix
```

### Check lint

```
$ docker-compose build
$ docker-compose up -d

# check lint
$ docker-compose exec app yarm lint

# fix lint
$ docker-compose exec app yarm lint:fix
```

### Build Typescript

Output build file to `dist` directory.

```
$ docker-compose build
$ docker-compose up -d

# build target is development
$ docker-compose exec app build

# build target is production
$ docker-compose exec app build:production
```
