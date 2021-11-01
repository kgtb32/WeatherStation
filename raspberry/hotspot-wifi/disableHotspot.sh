#/bin/sh

sudo systemctl enable wpa_supplicant
sudo systemctl start wpa_supplicant
sleep 5
sudo systemctl disable hostspot-wifi
sudo systemctl stop hotspot-wifi
sudo /etc/raspap/hostapd/servicestart.sh  --action stop
