function changeTab(active, total, tab, content) {  

    for (var i=1; i < total+1; i++) {  
      document.getElementById(content+i).style.display = 'none';  
      document.getElementById(tab+i).className = '';  
    }  
    document.getElementById(content+active).style.display = 'block';  
    document.getElementById(tab+active).className = 'selected';
    setTabid(active);
	updateShareLink();
}