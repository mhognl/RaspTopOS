#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Background Changed!</h1>"
echo "<pre> $(mv /os/bg_current.jpg /os/bg_current-old.jpg; mv /os/bg_desktop1.jpg /os/bg_current.jpg; mv /os/bg_desktop2.jpg /os/bg_desktop1.jpg; mv /os/bg_desktop3.jpg /os/bg_desktop2.jpg; mv /os/bg_current-old.jpg /os/bg_desktop3.jpg) </pre>"