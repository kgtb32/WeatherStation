#/bin/sh

sudo systemctl enable wpa_supplicant
sudo systemctl start wpa_supplicant
sleep 5
sudo /etc/raspap/hostapd/servicestart.sh  --action stop
