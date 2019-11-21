#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Network information</h1>"
echo "<pre> $(ifconfig) </pre>"