#/bin/bash
sudo systemctl stop weatherstation
sudo systemctl stop network-managers
sudo hotspot start
sudo ifconfig ap0 10.3.141.1/24
sudo systemctl restart dnsmasq.service
sudo systemctl start hotspot-wifi