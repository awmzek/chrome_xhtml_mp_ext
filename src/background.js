chrome.webRequest.onHeadersReceived.addListener(function(details){
	var headers=details.responseHeaders,d=true;
	headers.forEach(function(header,i){
		switch(header.name.toLowerCase()){
			case 'content-type':header.value=header.value.replace(/application\/vnd\.wap\.xhtml\+xml/gi,'application/xhtml+xml');break;
			case 'content-disposition':d=false;break
		}
	});
	if(d)headers.push({name:'content-disposition',value:'inline'});
	return {responseHeaders:headers};
},{urls:["<all_urls>"],types:["main_frame","sub_frame"]},["blocking","responseHeaders"]);