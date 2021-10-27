nmcli --pretty --fields UUID,TYPE con show|grep wifi|awk "{print $1}"|while read line; do nmcli con delete uuid $line; done
