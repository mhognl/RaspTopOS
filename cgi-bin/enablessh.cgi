#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>SSH Enabled!</h1>"
echo "<pre>$(sudo systemctl start ssh && sudo systemctl enable ssh)</pre>"
