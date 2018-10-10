#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<i>OS loading in RAM now... Please wait...!</i>"
echo "$(mount -t tmpfs -o size=64m tmpfs /os-ram; cp -r /os/* /os-ram)"