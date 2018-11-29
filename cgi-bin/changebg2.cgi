#!/bin/bash
echo "Content-type: text/html"
echo ""
echo "<h1>Background Changed!</h1>"
echo "$(sudo echo 'html {background: url("/img/bg_desktop2.jpg") no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;}' > /os/background.css)"