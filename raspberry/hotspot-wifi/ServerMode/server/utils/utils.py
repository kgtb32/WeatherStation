def write_file(file_to_write, data):
    open(file_to_write, 'w').close()
    f = open(file_to_write, "a")
    f.write(data)
    f.close()