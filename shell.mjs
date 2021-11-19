import { $, argv, chalk } from 'zx'

switch (argv._[0]) {
  case 'build': {
    await $`docker build . -t lanzhi/learning-nginx`
    // await $`docker tag learning-nginx-local lanzhi/learning-nginx`

    break
  }
  case 'run': {
    await $`docker run -itd -p 0.0.0.0:80:80 \
      --name learning-nginx \
      -v $PWD/src/conf.d:/etc/nginx/conf.d \
      -v $PWD/src/nginx.conf:/etc/nginx/nginx.conf \
      -v $PWD/src/html:/usr/share/nginx/html \
      -v $PWD:/workspace/learning-nginx \
      lanzhi/learning-nginx:latest nginx "-g daemon off;"
    `

    break
  }
  case 'login': {
    await $`docker exec -it learning-nginx /usr/bin/zsh`

    break
  }
  default: {
    chalk.red('尚不支持当前命令~')
    break
  }
}
