#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>OS Update Completed!</h1>"
echo "<pre> $(cd /tmp; sudo git clone https://github.com/mhognl/RaspTopOS.git; sudo rm -rf /recovery/* /os/* /usr/lib/cgi-bin/*; sudo cp -r /tmp/RaspTopOS/* /recovery; sudo cp -r /recovery/* /os; sudo cp -r /recovery/cgi-bin/* /usr/lib/cgi-bin; sudo chmod a+x /usr/lib/cgi-bin/*; sudo chown -R www-data:www-data /os; sudo chown -R www-data:www-data /os-ram; sudo chown -R www-data:www-data /recovery; sudo rm -rf /tmp/RaspTopOS; sudo mount -t tmpfs -o size=64m tmpfs /os-ram; sudo cp -r /os/* /os-ram; sudo systemctl restart apache2) </pre>"