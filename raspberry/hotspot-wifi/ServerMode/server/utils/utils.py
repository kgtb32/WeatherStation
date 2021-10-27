def write_file(file_to_write, data):
    open(file_to_write, 'w').close()
    f = open(file_to_write, "a")
    f.write(data)
    f.close()

def convert_nmcli_to_obj(nmcli_result):
    wifi_networks = []
    network = {}
    nb_items = 0
    for i in range(0, len(nmcli_result)-1):
        if("SSID:" in nmcli_result[i]):
            network['ssid'] = nmcli_result[i].replace('SSID:', '').strip()
            nb_items += 1
        elif("SECURITY:" in nmcli_result[i]):
            network['security'] = nmcli_result[i].replace('SECURITY:', '').strip()
            nb_items += 1
        elif("SIGNAL:" in nmcli_result[i]):
            network['signal'] = nmcli_result[i].replace('SIGNAL:','').strip()
            nb_items += 1
        if(nb_items == 3):
            wifi_networks.append(network)
            network = {}
            nb_items = 0
        
    return wifi_networks