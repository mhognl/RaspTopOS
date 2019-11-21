#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<pre>$(systemctl start ssh && systemctl enable ssh)</pre>"