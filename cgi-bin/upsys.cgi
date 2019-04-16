#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>System Update Completed!</h1>"
echo "$(sudo apt update && sudo apt dist-upgrade && sudo apt upgrade)"