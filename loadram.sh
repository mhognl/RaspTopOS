mount -t tmpfs -o size=64m tmpfs /os-ram
cp -r /os/* /os-ram
chown -R www-data:www-data /os-ram