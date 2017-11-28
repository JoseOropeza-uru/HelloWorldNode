let xhr = new XHR();
function $(id) {
    return document.getElementById(id);
};
function sendGet(){
     xhr.get(`../hello/${$('inp').value===''?'Blank':$('inp').value}`,{},{}).then((data)=>{
         console.log(data);
     });
};
function sendPost(){
    let a = $('numa').value===''?0:parseInt($('numa').value);
    let b = $('numb').value===''?0:parseInt($('numb').value);
    console.log($('numa').value);
    xhr.post(`../hello/sum`,{a:a,b:b},{'Content-Type':'application/json'}).then((data)=>{
        console.log(data);
    });  
};
function filterGet(){
    xhr.get(`../filters/hello/${$('inp').value===''?'Blank':$('inp').value}`,{},{}).then((data)=>{
        console.log(data);
    });
}
function filterPost() {
    let a = $('numa').value===''?0:parseInt($('numa').value);
    let b = $('numb').value===''?0:parseInt($('numb').value);
    console.log($('numa').value);
    xhr.post(`../filters/sum`,{a:a, b:b},{'Content-Type':'application/json'}).then((data)=>{
        console.log(data);
    }); 
}
$('button').addEventListener('click',sendGet);
$('butPost').addEventListener('click',sendPost);
$('filtGet').addEventListener('click',filterGet);
$('filtPost').addEventListener('click',filterPost);
