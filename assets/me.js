if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 350);

}

var x = 0;

<script type="text/javascript">
                var msg  = document.title ="Edgy Title";
                var speed = 150;
                var endChar = " ";
                var pos = 0;
                
                function moveTitle()
                {
                     var ml = msg.length;
                        
                    title = msg.substr(pos,ml) + endChar + msg.substr(0,pos);
                  document.title = title;
                    
                  pos++;
                  if (pos > ml) pos=0;
                  window.setTimeout("moveTitle()",speed);
                }
            
                moveTitle();
            </script>



}
