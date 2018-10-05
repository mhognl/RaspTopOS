if [ ! "`whoami`" = "root" ]
then
    echo "You must run this script as root."
    exit 1
fi

ping google.com -c 2 && apt purge git apache2 openssh-server net-tools -y && rm -rf /etc/sudoers.d/web /etc/apache2 /usr/lib/cgi-bin /os /recovery