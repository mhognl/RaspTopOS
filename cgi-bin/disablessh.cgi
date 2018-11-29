#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>SSH Disabled!</h1>"
echo "<pre>$(sudo systemctl stop ssh && sudo systemctl disable ssh)</pre>"
