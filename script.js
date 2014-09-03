function load(target){
  
  if(target = 'dashboard'){
    $.get('/Dashboard/page.html', function(data){
       var html = $.parseHTML(data);
       
       $.each( html, function(i, el ) {
         
         if(el.nodeName === 'DIV'){
           $('.nav-sidebar').append("<li><a href=\"#\" onclick=\"navigate('"+el.id+"')\">"+el.id+"</a></li>");
         }
       });
       
       
        $("#container").append(html);

    });
  }
}




function navigate(id){

  console.log($(this));



  $('#container div').removeClass()
  $('#container div').addClass("contentHidden");

  
  $("#"+id).removeClass("contentHidden");
  $("#"+id).addClass("contentVisible");
  
}



