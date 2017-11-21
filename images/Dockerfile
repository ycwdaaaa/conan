FROM centos:7

ADD entrypoint.sh /root


WORKDIR /root
USER root
    RUN yum install -y wget git\
    && wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-x64.tar.xz \
    && tar xvJf node-v8.9.0-linux-x64.tar.xz \
    && cd node-v8.9.0-linux-x64 \
    && ln -s /root/node-v8.9.0-linux-x64/bin/npm /usr/bin/ \
    && ln -s /root/node-v8.9.0-linux-x64/bin/node /usr/bin/ \
    && chmod 777 -R /root/node-v8.9.0-linux-x64 \
#    && alias cnpm="npm --registry=https://registry.npm.taobao.org --cache=$HOME/.npm/.cache/cnpm --disturl=https://npm.taobao.org/dist --userconfig=$HOME/.cnpmrc" \
#    && npm --registry=https://registry.npm.taobao.org --cache=$HOME/.npm/.cache/cnpm --disturl=https://npm.taobao.org/dist --userconfig=$HOME/.cnpmrc i -g @angular/cli
    && npm install -g cnpm --registry=https://registry.npm.taobao.org \
    && export PATH=$(npm prefix -g)/bin:$PATH \
    && cnpm i -g @angular/cli

ENTRYPOINT ["/root/entrypoint.sh"]
