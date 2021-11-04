#/bin/sh
sudo hotspot stop
sudo systemctl start network-manager
sudo killall wpa_supplicant
sudo wpa_supplicant -c /etc/wpa_supplicant/wpa_supplicant.conf -i wlan0 -B
sudo systemctl start weatherstation