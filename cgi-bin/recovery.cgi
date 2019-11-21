#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<pre>$(rm -r /os/* && rsync --progress /recovery/* /os)</pre>"