#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>OS loaded in RAM</h1>"
echo "<p><b>Click <a href='/'>here</a> to continue</b></p>"
echo "$(mount -t tmpfs -o size=64m tmpfs /os-ram; cp -r /os/* /os-ram)"
