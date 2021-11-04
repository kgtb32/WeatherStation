#/bin/bash
sudo systemctl stop weatherstation
sudo systemctl stop network-manager
sudo hotspot start
sudo ifconfig ap0 10.3.141.1/24
sudo systemctl restart dnsmasq.service