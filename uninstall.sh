if [ ! "`whoami`" = "root" ]
then
    echo "You must run this script as root."
    exit 1
fi

apt purge git apache2 libapache2-mod-perl2 libcgi-session-perl libapache-htpasswd-perl php -y
apt autoremove -y
rm -rf /etc/sudoers.d/web /etc/apache2 /os /recovery
