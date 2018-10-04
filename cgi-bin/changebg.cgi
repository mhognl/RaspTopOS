#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Background Changed!</h1>"
echo "<pre> $(mv /os/bg_desktop.jpg /os/bg_desktop.old.jpg && mv /os/bg_desktop2.jpg /os/bg_desktop.jpg && mv /os/bg_desktop.old.jpg /os/bg_desktop2.jpg) </pre>"