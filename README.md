# RaspTop OS - OS for Raspberry Pi and PC

RaspTop OS is a OS for Raspberry Pi and PC. It's focused and well-tested on the Raspberry Pi.

It's tested on PC, but not as well-tested as the Pi. On the Pi it's tested on Raspbian Stretch (Lite). In the future there's a image you can flash for the Pi.

## Installing

To install the OS, you can run the install-[distro].sh.

**NOTE: Recommended to copy and paste the script, because WGET is not working very well. The script must be run as root.**

## Uninstalling

If you're not happy with the OS or want to remove it for some reason, you can run the uninstaller script. It's recommend to take a look at the source code, because it will remove packages you may be using. 


**NOTE: Recommended to copy and paste the script, because WGET is not working very well. The script must be run as root.**

## Upgrading from v0.4 to v0.5

Please run the upgrade script from v0.4 to v0.5. It will do all the commands for you. You must have enabled SSH or access to the Linux shell.

**NOTE: Recommended to copy and paste the script, because WGET is not working very well. The script must be run as root.**


## Loading the OS

The OS is loaded to RAM with a service with the name 'loados.service'. One requirement is that you have Debian and a Debian/Ubuntu-based distro.
