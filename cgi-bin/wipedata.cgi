#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Recovery Completed!</h1>"
echo "<pre> $(sudo rm -rf /os/* /usr/lib/cgi-bin/* && cd /recovery && sudo cp -r ./* /os && sudo rm -rf /os/cgi-bin && sudo cp -r ./cgi-bin/* /usr/lib/cgi-bin && sudo chmod a+x /usr/lib/cgi-bin/* && sudo chown -R www-data:www-data /os && sudo chown -R www-data:www-data /os && sudo systemctl stop ssh && sudo systemctl disable ssh && sudo systemctl restart apache2) </pre>"