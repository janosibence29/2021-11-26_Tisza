function turizmus(melyik){
    document.getElementById('turizmusszovegkeret').style.display='none';
    document.getElementById('kepek').src=melyik+'.jpg';
    document.getElementById('turizmuskepkeret').style.display='block';   
}

function keprejt(melyik){
  document.getElementById('turizmuskepkeret').style.display='none';
  document.getElementById('turizmusszovegkeret').style.display='block';    
}