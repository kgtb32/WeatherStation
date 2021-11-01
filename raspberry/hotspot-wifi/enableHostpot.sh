#/bin/bash
sudo sh deletenmcliconnections.sh
nmcli device disconnect wlan0
sudo systemctl disable wpa_supplicant
sudo systemctl stop wpa_supplicant
sudo systemctl enable hostspot-wifi
sudo systemctl start hotspot-wifi
sleep 5
sudo /etc/raspap/hostapd/servicestart.sh