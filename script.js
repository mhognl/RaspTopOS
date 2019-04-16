var buildnr="20191604"

document.title="RaspTop OS " + buildnr;

document.write("<html>");
document.write("<head>");
document.write("<link href='style.css' rel='stylesheet' type='text/css' />");
document.write("<link href='background.css' rel='stylesheet' type='text/css' />");
document.write("</head>");
document.write("<body>");
document.write("<div class='menu'>");
document.write("<div class='taskbar'>");
document.write("<button onclick='menu()'>Menu</button>");
document.write("<p style='float:right;'><b id='time'></b></p>");
document.write("</div>");
document.write("</div>");
document.write("</body>");
document.write("</html>");

function menu() {
	location.search="?q=menu";
}

if (location.search=="?q=menu") {
	document.write("<div class='menuList'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("<button onclick='sysstate()'>System State</button>");
	document.write("<p><a onclick='infocenter()'>Info Center</a></p>");
	document.write("<p><a onclick='settings()'>Settings</a></p>");
	document.write("<p><a onclick='console()'>Console</a></p>");
	document.write("<p><a onclick='run()'><i>Run...</i></a></p>");
	document.write("</div>");
}

function sysstate() {
	location.search="?q=systemstate";
}

if (location.search=="?q=systemstate") {
	document.write("<div class='menuList'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("<button onclick='sysstate()'>System State</button>");
	document.write("<p><a onclick='infocenter()'>Info Center</a></p>");
	document.write("<p><a onclick='settings()'>Settings</a></p>");
	document.write("<p><a onclick='console()'>Console</a></p>");
	document.write("<p><a onclick='run()'><i>Run...</i></a></p>");
	document.write("</div>");
	document.write("<div class='menuListSysOpt'>");
	document.write("<button onclick='menu()' class='close'>x</button>");
	document.write("<button onclick='shutdown()'>Shutdown</button>");
	document.write("<button onclick='reboot()'>Reboot</button>");
	document.write("</div>");
}

function infocenter() {
	location.search="?q=infocenter";
}

if (location.search=="?q=infocenter") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<h1>Information Center</h1>");
	document.write("<p><a onclick='memusage()'>Memory Usage</a></p>");
	document.write("<p><a onclick='diskinfo()'>Disk Information</a></p>");
	document.write("<p><a onclick='netinfo()'>Network Information</a></p>");
	document.write("<p><a onclick='verinfo()'>Version Information</a></p>");
	document.write("</div>");
}

function memusage() {
	location.search="?q=memusage";
}

if (location.search=="?q=memusage") {
	document.write("<div class='window'>");
	document.write("<button onclick='infocenter()' class='close'>x</button>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/memusage.cgi'></iframe>");
	document.write("</div>");
}

function diskinfo() {
	location.search="?q=diskinfo";
}

if (location.search=="?q=diskinfo") {
	document.write("<div class='window'>");
	document.write("<button onclick='infocenter()' class='close'>x</button>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/diskinfo.cgi'></iframe>");
	document.write("</div>");
}

function netinfo() {
	location.search="?q=netinfo";
}

if (location.search=="?q=netinfo") {
	document.write("<div class='window'>");
	document.write("<button onclick='infocenter()' class='close'>x</button>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/netinfo.cgi'></iframe>");
	document.write("</div>");
}

function verinfo() {
	location.search="?q=verinfo";
}

if (location.search=="?q=verinfo") {
	document.write("<div class='window'>");
	document.write("<button onclick='infocenter()' class='close'>x</button>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<h1>Version Information</h1>");
	document.write("<p><b>Build Number: </b>" + buildnr + "</p>");
	document.write("<p><i id='tz' onclick='timezone()' style='cursor:pointer;'>Show timezone</i></p>");
	document.write("</div>");
}

function settings() {
	location.search="?q=settings";
}

if (location.search=="?q=settings") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<h1>Settings</h1>");
	document.write("<p><a onclick='theming()'>Theming</a></p>");
	document.write("<p><a onclick='sshset()'>SSH Settings</a></p>");
	document.write("<p><a onclick='usrmng()'>User Management</a></p>");
	document.write("<p><a onclick='upmng()'>Update Manager</a></p>");
	document.write("<p><a onclick='recovery()'>Recovery</a></p>");
	document.write("</div>");
}

function theming() {
	location.search="?q=theming";
}

if (location.search=="?q=theming") {
	document.write("<div class='window'>");
	document.write("<button onclick='settings()' class='close'>x</button>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<h1>Theming</h1>");
	document.write("<p><button onclick='themingbg0()'><img src='/img/bg_current.jpg' width='150' height='150'><br>0. Africa (Default)</button><button onclick='themingbg1()'><img src='/img/bg_desktop1.jpg' width='150' height='150'><br>1. Jungle Bridge</button></p>");
	document.write("<p><button onclick='themingbg2()'><img src='/img/bg_desktop2.jpg' width='150' height='150'><br>2. Car</button><button onclick='themingbg3()'><img src='/img/bg_desktop3.jpg' width='150' height='150'><br>3. Stone</button></p>");
	document.write("<p><button onclick='themingbg5()'><img src='/img/bg_desktop5.jpg' width='150' height='150'><br>5. Ocean</button><button onclick='themingbg6()'><img src='/img/bg_desktop6.jpg' width='150' height='150'><br>6. Space</button></p>");
	document.write("<p><button onclick='themingbg5()'><img src='/img/bg_desktop7.jpg' width='150' height='150'><br>7. Space</button></p>");
	document.write("</div>");
}

function themingbg0() {
	location.search="?q=themingbg0";
}

if (location.search=="?q=themingbg0") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/changebg0.cgi'></iframe>");
	document.write("</div>");
}

function themingbg1() {
	location.search="?q=themingbg1";
}

if (location.search=="?q=themingbg1") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/changebg1.cgi'></iframe>");
	document.write("</div>");
}

function themingbg2() {
	location.search="?q=themingbg2";
}

if (location.search=="?q=themingbg2") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/changebg2.cgi'></iframe>");
	document.write("</div>");
}

function themingbg3() {
	location.search="?q=themingbg3";
}

if (location.search=="?q=themingbg3") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/changebg3.cgi'></iframe>");
	document.write("</div>");
}

function themingbg4() {
	location.search="?q=themingbg4";
}

if (location.search=="?q=themingbg4") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/changebg4.cgi'></iframe>");
	document.write("</div>");
}

function themingbg5() {
	location.search="?q=themingbg5";
}

if (location.search=="?q=themingbg5") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/changebg5.cgi'></iframe>");
	document.write("</div>");
}

function themingbg6() {
	location.search="?q=themingbg6";
}

if (location.search=="?q=themingbg6") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/changebg6.cgi'></iframe>");
	document.write("</div>");
}

function themingbg7() {
	location.search="?q=themingbg7";
}

if (location.search=="?q=themingbg7") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/changebg7.cgi'></iframe>");
	document.write("</div>");
}

function sshset() {
	location.search="?q=sshset";
}

if (location.search=="?q=sshset") {
	document.write("<div class='window'>");
	document.write("<button onclick='settings()' class='close'>x</button>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<h1>SSH Settings</h1>");
	document.write("<p><button onclick='sshdis()'>Disable SSH</button><button onclick='sshena()'>Enable SSH</button>");
	document.write("</div>");
}

function sshdis() {
	location.search="?q=sshdis";
}

if (location.search=="?q=sshdis") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/disablessh.cgi'></iframe>");
	document.write("</div>");
}

function sshena() {
	location.search="?q=sshena";
}

if (location.search=="?q=sshena") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/enablessh.cgi'></iframe>");
	document.write("</div>");
}

function usrmng() {
	location.search="?q=usrmng";
}

if (location.search=="?q=usrmng") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/usrmng.pl'></iframe>");
	document.write("</div>");
}

function upmng() {
	location.search="?q=upmng";
}

if (location.search=="?q=upmng") {
	document.write("<div class='window'>");
	document.write("<button onclick='settings()' class='close'>x</button>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<h1>Update Manager</h1>");
	document.write("<p><button onclick='upsys()'>Update System</button><button onclick='upos()'>Update OS</button></p>");
	document.write("</div>");
}

function upsys() {
	location.search="?q=upsys";
}

if (location.search=="?q=upsys") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/upsys.cgi'></iframe>");
	document.write("</div>");
}

function upos() {
	location.search="?q=upos";
}

if (location.search=="?q=upos") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/upos.cgi'></iframe>");
	document.write("</div>");
}

function recovery() {
	location.search="?q=recovery";
}

if (location.search=="?q=recovery") {
	document.write("<div class='window'>");
	document.write("<button onclick='settings()' class='close'>x</button>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<h1>Recovery</h1>");
	document.write("<p><b>Note: THIS WILL WIPE ALL YOUR DATA!!!</b><br><i>Are you sure to continue?</i></p>");
	document.write("<p><button onclick='recoveryval()'>Yes!</button><button onclick='settings()'>No!</button>");
	document.write("</div>");
}

function recoveryval() {
	location.search="?q=recoveryval";
}

if (location.search=="?q=recoveryval") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<h1>Recovery Validation</h1>");
	document.write("<p><b>Type <i>wipemydata</i> to continue.</b></p>");
	document.write("<p><input type='text' id='val' placeholder='Type the sentence above'><button onclick='recoverychk()'>Go</button>");
	document.write("</div>");
}

function recoverychk() {
	if (document.getElementById("val").value=="wipemydata") {
		location.href="?q=recoverycontinue";
	}
}

if (location.search=="?q=recoverycontinue") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/wipedata.cgi'></iframe>");
	document.write("</div>");
}

function console() {
	location.search="?q=console";
}

if (location.search=="?q=console") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<iframe src='/apps/webconsole.php'></iframe>");
	document.write("</div>");
}

function run() {
	location.search="?q=run";
}

if (location.search=="?q=run") {
	document.write("<div class='menuList'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("<button onclick='sysstate()'>System State</button>");
	document.write("<p><a onlclick='infocenter()'>Info Center</a></p>");
	document.write("<p><a onclick='settings()'>Settings</a></p>");
	document.write("<p><a onclick='console()'>Console</a></p>");
	document.write("<p><a onclick='run()'><i>Run...</i></a></p>");
	document.write("</div>");
	document.write("<div class='menuListRun'>");
	document.write("<button onclick='menu()' class='close'>x</button>");
	document.write("<p><input type='text' id='command' placeholder='Type a command' size='10'><button onclick='runC()'>Send</button></p>");
	document.write("</div>");
}

if (location.search=="?q=helpcom") {
	document.write("<div class='window'>");
	document.write("<form>");
	document.write("<button formaction='index.html' class='close'>x</button>");
	document.write("</form>");
	document.write("</div>");
	document.write("<div class='frame'>");
	document.write("<h1>Help Commands</h1>");
	document.write("<p><i>help</i> - View a list Of Commands</p>");
	document.write("<p><i>ver</i> - View version information</p>");
	document.write("<p><i>up</i> - Update Management</p>");
	document.write("<p><i>upos</i> - Update OS</p>");
	document.write("<p><i>infcen</i> - Information Center</p>");
	document.write("<p><i>meminf</i> - Memory Usage</p>");
	document.write("<p><i>dinf</i> - Disk Information</p>");
	document.write("<p><i>ninf</i> - Network Information</p>");
	document.write("<p><i>shut</i> - Shutdown the system</p>");
	document.write("<p><i>reb</i> - Reboot the system</p>");
	document.write("</div>");
}

function shutdown() {
	location.href="?q=shutdown";
}

if (location.search=="?q=shutdown") {
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/shutdown.cgi'></iframe>");
	document.write("</div>");
}

function reboot() {
	location.href="?q=reboot";
}

if (location.search=="?q=reboot") {
	document.write("<div class='frame'>");
	document.write("<iframe src='/cgi-bin/reboot.cgi'></iframe>");
	document.write("</div>");
}

function timezone() {
	var d = new Date();
	document.getElementById("tz").innerHTML = d;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

function runC() {
	var C=document.getElementById("command").value;
	
	if (C=="help") {
		location.href="?q=helpcom";
	}
	
	if (C=="ver") {
		location.href="?q=verinfo";
	}
	
	if (C=="up") {
		location.href="?q=upmng";
	}
	
	if (C=="upos") {
		location.href="?q=upos";
	}
	
	if (C=="infcen") {
		location.href="?q=infocenter";
	}
	
	if (C=="meminf") {
		location.href="?q=memusage";
	}
	
	if (C=="dinf") {
		location.href="?q=diskinfo";
	}
	
	if (C=="ninf") {
		location.href="?q=netinfo";
	}
	
	if (C=="shut") {
		location.href="?q=shutdown";
	}
	
	if (C=="reb") {
		location.href="?q=reboot";
	}
}