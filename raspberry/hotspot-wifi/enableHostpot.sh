#/bin/bash
sudo sh deletenmcliconnections.sh
nmcli device disconnect wlan0
sudo systemctl disable wpa_supplicant
sudo systemctl stop wpa_supplicant
sleep 5
sudo /etc/raspap/hostapd/servicestart.sh