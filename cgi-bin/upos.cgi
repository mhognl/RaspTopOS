#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>OS Update Completed!</h1>"
echo "<pre> $(ping google.com -c 2 && sudo git clone https://github.com/mhognl/RaspTopOS.git /tmp && sudo rm -rf /recovery/* /os/* /usr/lib/cgi-bin/* && sudo cp -r /tmp/RaspTopOS/* /recovery && sudo cp -r /tmp/RaspTopOS/* /os && sudo cp -r /tmp/RaspTopOS/cgi-bin/* /usr/lib/cgi-bin && sudo chmod a+x /usr/lib/cgi-bin/* && sudo chown -R www-data:www-data /os && sudo chown -R www-data:www-data /recovery && sudo rm -rf /os/cgi-bin /tmp/RaspTopOS && sudo systemctl restart apache2) </pre>"