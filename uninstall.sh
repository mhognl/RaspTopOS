if [ ! "`whoami`" = "root" ]
then
    echo "You must run this script as root."
    exit 1
fi

umount /os-ram
apt purge git apache2 openssh-server net-tools -y
apt autoremove -y
rm -rf /etc/sudoers.d/web /etc/apache2 /usr/lib/cgi-bin /os /recovery /os-ram /etc/fstab
mv /etc/fstab.orig /etc/fstab