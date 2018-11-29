#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Recovery Completed!</h1>"
echo "<pre> $(sudo rm -rf /os/* && sudo cp -r /recovery/* /os && sudo chmod +x /os/cgi-bin/* && sudo chown -R www-data:www-data /recovery && sudo chown -R www-data:www-data /os && sudo rm -r /etc/apache2/.htpasswd && sudo touch /etc/apache2/.htpasswd && sudo htpasswd -db /etc/apache2/.htpasswd admin admin && sudo chown www-data:www-data /etc/apache2/.htpasswd && sudo chmod 600 /etc/apache2/.htpasswd && sudo systemctl stop ssh && sudo systemctl disable ssh && sudo systemctl restart apache2) </pre>"
