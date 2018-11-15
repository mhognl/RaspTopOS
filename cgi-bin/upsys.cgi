#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>System Update Completed!</h1>"
echo "<pre> $(sudo apt update && sudo apt dist-upgrade -y && sudo apt upgrade -y) </pre>"