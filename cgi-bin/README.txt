Put the files in this folder in /usr/lib/cgi-bin and chmod a+x /usr/lib/cgi-bin/* and a2enmod cgi and systemctl restart apache2

add www-data to /etc/sudoers.d/users:

www-data	ALL=(ALL) NOPASSWD: ALL