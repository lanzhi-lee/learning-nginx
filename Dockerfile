FROM nginx

WORKDIR /workspace

# Package Manager
ENV NODE_VERSION 14
ENV NPM_REGISTRY "https://registry.npmmirror.com"
ENV NVM_NODEJS_ORG_MIRROR "https://mirrors.ustc.edu.cn/node/"
ENV NVM_DIR "/root/.nvm"
ENV NPM_CACHE_DIR "/root/.npm"
ENV PNPM_CACHE_DIR "/root/.pnpm-store"

RUN apt update -y && \
  apt install -y git curl zsh && \
  rm -rf /var/lib/apt/lists/* && \
  sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" && \
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash && \
  echo "source ~/.bashrc" >> ~/.zshrc && \
  . $NVM_DIR/nvm.sh && \
  nvm install $NODE_VERSION && \
  # npm相关包
  npm set unsafe-perm true && \
  npm config set registry $NPM_REGISTRY && \
  npm install -g pnpm && \
  pnpm config set store-dir $PNPM_CACHE_DIR

CMD ["nginx", "-g", "daemon off;"]
