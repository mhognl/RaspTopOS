#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Disk usage</h1>"
echo "<pre> $(df -h) </pre>"