if [ ! "`whoami`" = "root" ]
then
    echo "You must run this script as root."
    exit 1
fi

ping google.com -c 2 && apt update && apt install git apache2 openssh-server sudo net-tools -y && a2enmod cgi && echo 'www-data ALL=(ALL) NOPASSWD: ALL' > /etc/sudoers.d/web

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
		<Directory /usr/lib/cgi-bin>
				SSLOptions +StdEnvVars
		</Directory>
	</VirtualHost>
</IfModule>' > /etc/apache2/sites-available/default-ssl.conf

mkdir -p /os && mkdir -p /recovery && mkdir -p /tmp/RaspTopOS.download && git clone https://github.com/mhognl/RaspTopOS.git /tmp/RaspTopOS.download && cp -r /tmp/RaspTopOS.download/RaspTopOS/* /recovery && cp -r /tmp/RaspTopOS.download/RaspTopOS/cgi-bin/* /usr/lib/cgi-bin && chmod a+x /usr/lib/cgi-bin/* && cp -r /tmp/RaspTopOS.download/RaspTopOS/* /os && rm -rf /os/cgi-bin && chown -R www-data:www-data /os && chown -R www-data:www-data /recovery && systemctl stop ssh && systemctl disable ssh && systemctl restart apache2 && rm -rf /tmp/RaspTopOS.download/RapTopOS
