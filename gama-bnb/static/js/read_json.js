(function readyJS(win, doc){

    'use strict'; 

    let btn = doc.querySelector("#btnDb");
    //show database json
    function showDb(){
        let ajax=new XMLHttpRequest();
        ajax.open('GET','https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72');
        ajax.onreadystatechange = function(){
            let res = JSON.parse(ajax.responseText);
            if(ajax.status === 200 && ajax.readyState === 4){
                console.log(res[4]['price'])
                // let i;
                // for(i = 0; i < res.length; i++){
                //     console.log(res[i].photo)
                // }
            }
        };
        ajax.send();
    }
    btn.addEventListener('click', showDb, false);

})(window, document);