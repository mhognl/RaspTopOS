#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Version information</h1>"
echo "<p><i>Build number: </i><b>$(cat current)</b></p>"
echo "<p><i>Linux kernel: </i><b>$(uname -r)</b></p>"