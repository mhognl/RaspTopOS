#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>OS Update Completed!</h1>"
echo "<pre> $(ping google.com -c 2 && sudo rm -rf /recovery/* /os/* /usr/lib/cgi-bin/* && cd /recovery && sudo git clone https://github.com/mhognl/RaspTopOS.git && sudo mv /recovery/RaspTopOS/* /recovery && sudo rm -rf /recovery/RaspTopOS && sudo rm -rf README.md && sudo cp -r ./* /os && sudo rm -rf /os/cgi-bin && sudo cp -r ./cgi-bin/* /usr/lib/cgi-bin/* && sudo chmod a+x /usr/lib/cgi-bin/* && sudo chown -R www-data:www-data /os && sudo chown -R www-data:www-data /recovery && sudo systemctl restart apache2) </pre>"
