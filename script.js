
function carregarConteudo(){
    // Instanciar objeto XHTTP REQUEST
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){

        if(this.status==200 && this.readyState==4){
            
            
            let p=JSON.parse(this.response);
            p=p.pessoas;
            showTabela(p);     
        }
    }
    xhttp.open("GET","exemplo.json",true);

    xhttp.send();  
}
function showTabela(p){
    let divconteudo=document.getElementById("conteudo");
    let tabela=document.createElement("table");
    tabela.setAttribute("border","1");
    tabela.setAttribute("width","100%");

    var linha = document.createElement("tr");
    for (var i in p[0]){
        var coluna = document.createElement("th");
        var texto = document.createTextNode(i);
        coluna.appendChild(texto);
        linha.appendChild(coluna);
        tabela.appendChild(linha)
    }

    for ( var i in p){
        var linha = document.createElement("tr");
        var col1=document.createElement("td");
        var col2=document.createElement("td");
        var col3=document.createElement("td");
        var text1=document.createTextNode(p[i].nome);
        var text2=document.createTextNode(p[i].idade);
        var text3=document.createTextNode(p[i].email);
        col1.appendChild(text1);
        col2.appendChild(text2);
        col3.appendChild(text3);
        linha.appendChild(col1);
        linha.appendChild(col2);
        linha.appendChild(col3);

        tabela.appendChild(linha);
    }
    
    divconteudo.appendChild(tabela);

  
    console.log(p);

}