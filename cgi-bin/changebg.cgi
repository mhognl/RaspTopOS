#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Background Changed!</h1>"
echo "<pre> $(mv /os-ram/bg_current.jpg /os-ram/bg_current-old.jpg; mv /os-ram/bg_desktop1.jpg /os-ram/bg_current.jpg; mv /os-ram/bg_desktop2.jpg /os-ram/bg_desktop1.jpg; mv /os-ram/bg_desktop3.jpg /os-ram/bg_desktop2.jpg; mv /os-ram/bg_current-old.jpg /os-ram/bg_desktop3.jpg) </pre>"