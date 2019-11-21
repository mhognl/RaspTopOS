#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<pre>$(systemctl stop ssh && systemctl disable ssh)</pre>"