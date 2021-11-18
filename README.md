# learning-nginx

docker 启动时增加以下映射

```text
/Users/lee/development/_learn/learning-nginx/src/conf.d /etc/nginx/conf.d
/Users/lee/development/_learn/learning-nginx/src/nginx.conf /etc/nginx/nginx.conf
/Users/lee/development/_learn/learning-nginx/src/html /usr/share/nginx/html
```

##### 增加基本工具

```bash
apt update && \
apt install -y git curl zsh && \
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

##### 进入容器

```bash
docker exec -it learning-nginx /usr/bin/zsh
```

##### 从容器中复制文件

```
docker cp learning-nginx:/usr/share/nginx/html/. ./src/html/.
```

##### 参考教程

- [Nginx 从入门到实践，万字详解！](https://juejin.cn/post/6844904144235413512)
- [Nginx 容器教程](https://www.ruanyifeng.com/blog/2018/02/nginx-docker.html)
