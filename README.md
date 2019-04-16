# RaspTop OS - OS for Raspberry Pi and PC

RaspTop OS is a OS for Raspberry Pi and PC. It's focused and well-tested on the Raspberry Pi.

It's tested on PC, but not as well-tested as the Pi. On the Pi it's tested on Raspbian Stretch (Lite). In the future there's a image you can flash for the Pi.

## Installing

To install the OS, just copy and paste the folllowing:

curl https://tomaaien.nl/rasptopos/install | bash

**NOTE: The script must be run as root.**

## Uninstalling

If you're not happy with the OS or want to remove it for some reason, you can run the uninstaller script. It's recommend to take a look at the source code, because it will remove packages you may be using. 

curl https://tomaaien.nl/rasptopos/uninstall | bash

**NOTE: The script must be run as root.**

## Upgrading from v0.4 to v0.5

Please run the upgrade script from v0.4 to v0.5. It will do all the commands for you. You must have enabled SSH or access to the Linux shell.

**NOTE: Recommended to copy and paste the script, because WGET is not working very well. The script must be run as root.**

**NOTE2: USING THIS SCRIPT IS AT YOUR OWN RISK.**

## Upgrading from v0.5 to v0.5.1

Please run the upgrade script from v0.5 to v0.5.1. It will do all the commands for you. You must have enabled SSH or access to the Linux shell.

**NOTE: Recommended to copy and paste the script, because WGET is not working very well. The script must be run as root.**

**NOTE2: USING THIS SCRIPT IS AT YOUR OWN RISK.**

## Upgrading from old 0.5

There are different version of 0.5, the upgrade process is as following: update your OS and copy install.sh source code into install.sh on your storage disk. chmod +x install.sh and run it. Enjoy!

## A note about 0.6...

If you're upgrading from v0.6 to v0.7, you only need to install php. Run the following command:

*sudo apt install php -y*

Then you can normally update the os on the web interface (Settings -> Update Manager -> Update OS).

***That's it!***

## Web Interface login credentials

*Help! I can't login, because previous versions had no username/password!*

***No panic! Here are the credentials:***

**For the web interface:**

*Username:* admin

*Password:* admin

**For the web console:**

*Username:* rasptop

*Password:* rasptop

## Wiki
We have a Wiki where more information can be found about RaspTop OS.
