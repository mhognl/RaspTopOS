#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Network Information</h1>"
echo "<pre> $(sudo ifconfig) </pre>"