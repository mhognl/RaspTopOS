#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Memory usage</h1>"
echo "<pre> $(free -m) </pre>"