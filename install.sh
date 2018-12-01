if [ ! "`whoami`" = "root" ]
then
    echo "You must run this script as root."
    exit 1
fi

apt update && apt install git apache2 openssh-server sudo net-tools libapache2-mod-perl2 libcgi-session-perl libapache-htpasswd-perl php ufw -y
a2enmod cgi
echo 'www-data ALL=(ALL) NOPASSWD: ALL' > /etc/sudoers.d/web

rm -rf /etc/apache2/apache2.conf

echo 'DefaultRuntimeDir ${APACHE_RUN_DIR}
PidFile ${APACHE_PID_FILE}
Timeout 300
KeepAlive On
MaxKeepAliveRequests 100
KeepAliveTimeout 5
User ${APACHE_RUN_USER}
Group ${APACHE_RUN_GROUP}
HostnameLookups Off
ErrorLog ${APACHE_LOG_DIR}/error.log
LogLevel warn
IncludeOptional mods-enabled/*.load
IncludeOptional mods-enabled/*.conf
Include ports.conf
<Directory />
	Options FollowSymLinks
	AllowOverride None
	Require all denied
</Directory>
<Directory /usr/share>
	AllowOverride None
	Require all granted
</Directory>
<Directory /os>
	Options Indexes FollowSymLinks
	AllowOverride None
	Require all granted
</Directory>
AccessFileName .htaccess
<FilesMatch "^\.ht">
	Require all denied
</FilesMatch>
LogFormat "%v:%p %h %l %u %t \"%r\" %>s %O \"%{Referer}i\" \"%{User-Agent}i\"" vhost_combined
LogFormat "%h %l %u %t \"%r\" %>s %O \"%{Referer}i\" \"%{User-Agent}i\"" combined
LogFormat "%h %l %u %t \"%r\" %>s %O" common
LogFormat "%{Referer}i -> %U" referer
LogFormat "%{User-agent}i" agent
IncludeOptional conf-enabled/*.conf
IncludeOptional sites-enabled/*.conf' > /etc/apache2/apache2.conf

rm -rf /etc/apache2/sites-enabled/000-default.conf

echo '<VirtualHost *:80>
	ServerAdmin webmaster@localhost
	DocumentRoot /os
	ErrorLog ${APACHE_LOG_DIR}/error.log
	CustomLog ${APACHE_LOG_DIR}/access.log combined
	<Directory "/os">
		AuthType Basic
		AuthName "Please login! Default: admin/admin"
		AuthUserFile /etc/apache2/.htpasswd
		Require valid-user
	</Directory>
	<Directory "/os/cgi-bin">
		AuthType Basic
		AuthName "Please login! Default: admin/admin"
		AuthUserFile /etc/apache2/.htpasswd
		Require valid-user
	</Directory>
</VirtualHost>' > /etc/apache2/sites-enabled/000-default.conf

rm -rf /etc/apache2/sites-available/default-ssl.conf

echo '<IfModule mod_ssl.c>
	<VirtualHost _default_:443>
		ServerAdmin webmaster@localhost
		DocumentRoot /os
		ErrorLog ${APACHE_LOG_DIR}/error.log
		CustomLog ${APACHE_LOG_DIR}/access.log combined
		SSLEngine on
		SSLCertificateFile	/etc/ssl/certs/ssl-cert-snakeoil.pem
		SSLCertificateKeyFile /etc/ssl/private/ssl-cert-snakeoil.key
		<FilesMatch "\.(cgi|shtml|phtml|php)$">
				SSLOptions +StdEnvVars
		</FilesMatch>
		<Directory "/os/cgi-bin">
				SSLOptions +StdEnvVars
				AuthType Basic
				AuthName "Please login! Default: admin/admin"
				AuthUserFile /etc/apache2/.htpasswd
				Require valid-user
		</Directory>
		<Directory "/os">
			AuthType Basic
			AuthName "Please login! Default: admin/admin"
			AuthUserFile /etc/apache2/.htpasswd
			Require valid-user
		</Directory>
	</VirtualHost>
</IfModule>' > /etc/apache2/sites-available/default-ssl.conf

echo '<IfModule mod_alias.c>
	<IfModule mod_cgi.c>
		Define ENABLE_USR_LIB_CGI_BIN
	</IfModule>

	<IfModule mod_cgid.c>
		Define ENABLE_USR_LIB_CGI_BIN
	</IfModule>

	<IfDefine ENABLE_USR_LIB_CGI_BIN>
		ScriptAlias /cgi-bin/ /os/cgi-bin/
		<Directory "/os/cgi-bin">
			AllowOverride None
			Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
			Require all granted
		</Directory>
	</IfDefine>
</IfModule>

# vim: syntax=apache ts=4 sw=4 sts=4 sr noet' > /etc/apache2/conf-enabled/serve-cgi-bin.conf

mkdir -p /os
mkdir -p /recovery
cd /tmp
git clone https://github.com/mhognl/RaspTopOS.git
cp -r /tmp/RaspTopOS/* /recovery
cp -r /recovery/* /os
chmod +x /os/cgi-bin/*
chown -R www-data:www-data /os
chown -R www-data:www-data /recovery
touch /etc/apache2/.htpasswd
htpasswd -db /etc/apache2/.htpasswd admin admin
chown www-data:www-data /etc/apache2/.htpasswd
chmod 600 /etc/apache2/.htpasswd
systemctl stop ssh
systemctl disable ssh
systemctl enable apache2
systemctl restart apache2
rm -rf /tmp/RaspTopOS
ufw allow 22
ufw allow 80
ufw enable
