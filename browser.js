function back() {
	
	document.getElementById("iframe").src=history.back();
	
}

function forward() {
	
	document.getElementById("iframe").src=history.forward();
	
}

function refresh() {
	
	document.getElementById("iframe").src=history.go(0);
	
}

function go() {
	
	document.getElementById("iframe").src=document.getElementById("url").value;
	
}