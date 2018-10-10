#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<pre> $(sudo rm -rf /os/*; sudo cp -r /os-ram/* /os; sudo chown -R www-data:www-data /os; sudo chown -R www-data:www-data /os-ram; sudo shutdown -P now) </pre>"