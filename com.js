function runC() {
	var C=document.getElementById("command").value;
	
	if (C=="help") {
		location.href="help-com.html";
	}
	
	if (C=="ver") {
		location.href="verinfo.html";
	}
	
	if (C=="up") {
		location.href="updatemng.html";
	}
	
	if (C=="upos") {
		location.href="updatemng-os.html";
	}
	
	if (C=="upsys") {
		location.href="updatemng-system.html";
	}
	
	if (C=="infcen") {
		location.href="infocenter.html";
	}
	
	if (C=="meminf") {
		location.href="memusage.html";
	}
	
	if (C=="dinf") {
		location.href="diskinfo.html";
	}
	
	if (C=="ninf") {
		location.href="netinfo.html";
	}
	
	if (C=="shut") {
		location.href="shutdown.html";
	}
	
	if (C=="reb") {
		location.href="reboot.html";
	}
}