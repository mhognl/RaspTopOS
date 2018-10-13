#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Background Changed!</h1>"
echo "<pre> $(sudo mv /os-ram/bg_current.jpg /os-ram/bg_current-old.jpg; sudo mv /os-ram/bg_desktop1.jpg /os-ram/bg_current.jpg; sudo mv /os-ram/bg_desktop2.jpg /os-ram/bg_desktop1.jpg; sudo mv /os-ram/bg_desktop3.jpg /os-ram/bg_desktop2.jpg; sudo mv /os-ram/bg_current-old.jpg /os-ram/bg_desktop3.jpg) </pre>"