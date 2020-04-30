# test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Online access

- https://xianshenglu.xyz

Which is proxied by NGINX to https://xianshenglu.github.io/dist/.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### TODOS

- [ ] optimize iconfont size
- [x] cache `index.html`, `iconfont`, `vue.min.js`, etc.
- [ ] fix `ServiceWorker` not work at some devices.
- [ ] add server push
- [ ] customize install notification in desktop and other platforms.
- [x] replace static files path to jsdelivr
- [x] let service worker take control of static resources
- [x] replace `publicPath` to `/` and modify nginx config
- [x] add refresh button when there is new version.
- [ ] add network status bar.
- [x] avoid server 301
- [ ] reduce server waiting time.
