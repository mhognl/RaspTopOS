#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>OS Update Completed!</h1>"
echo "<pre> $(cd /tmp && sudo git clone https://github.com/mhognl/RaspTopOS.git && sudo rm -rf /recovery/* /os/* /usr/lib/cgi-bin/* && sudo cp -r /tmp/RaspTopOS/* /recovery && sudo cp -r /recovery/* /os && sudo cp -r /recovery/cgi-bin/* /usr/lib/cgi-bin && sudo chmod a+x /usr/lib/cgi-bin/* && sudo chown -R www-data:www-data /os && sudo chown -R www-data:www-data /recovery && sudo rm -rf /tmp/RaspTopOS && sudo systemctl restart apache2) </pre>"