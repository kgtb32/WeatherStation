#/bin/sh
sudo hotspot stop
sudo systemctl disable hotspot-wifi
sudo systemctl stop hotspot-wifi
sudo systemctl start network-manager

if [ $1 ]
then
    sudo killall wpa_supplicant
    sudo wpa_supplicant -c /etc/wpa_supplicant/wpa_supplicant.conf -i wlan0 -B
    sudo systemctl start weatherstation
fi