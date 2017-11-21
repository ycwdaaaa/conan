#!/bin/bash
mkdir -p /root/.ssh
cp -r /root/sshkeys/..data/* /root/.ssh
chmod 600 -R /root/.ssh

mkdir -p /opt/web
cd /opt/web
git clone https://github.com/ycwdaaaa/conan.git
cd conan
cnpm install
ng serve  --proxy-config proxy.config.json --host 0.0.0.0 --disableHostCheck true

# keep container run
while true
do
   sleep 10
done
