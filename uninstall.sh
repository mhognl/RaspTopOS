if [ ! "`whoami`" = "root" ]
then
    echo "You must run this script as root."
    exit 1
fi

systemctl stop loados
systemctl disable loados
rm -rf /usr/local/bin/loados.sh
rm -rf /etc/systemd/system/loados.service

umount /os-ram
apt purge git apache2 openssh-server net-tools -y
apt autoremove -y
rm -rf /etc/sudoers.d/web /etc/apache2 /usr/lib/cgi-bin /os /recovery /os-ram /etc/fstab
mv /etc/fstab.orig /etc/fstab