#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Recovery Completed!</h1>"
echo "<pre> $(sudo rm -rf /os/* /usr/lib/cgi-bin/* /os-ram/*; sudo cp -r /recovery/* /os; sudo cp -r /recovery/cgi-bin/* /usr/lib/cgi-bin; sudo chmod a+x /usr/lib/cgi-bin/*; sudo chown -R www-data:www-data /recovery; sudo chown -R www-data:www-data /os; sudo chown -R www-data:www-data /os-ram; sudo systemctl stop ssh; sudo systemctl disable ssh; sudo systemctl restart apache2; sudo mount -t tmpfs -o size=64m tmpfs /os-ram; sudo cp -r /os/* /os-ram) </pre>"