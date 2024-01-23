function proximaImgIframeImg(){
    if(document.getElementById("imagem").className.slice(-1) < 9){
        document.getElementById("imagem").src = "../../Img/Manual/Padrinhos_Completo/" + (parseFloat(document.getElementById("imagem").className.slice(-1)) + 1) + ".png";

        document.getElementById("imagem").className = "imagem imagem" + (parseFloat(document.getElementById("imagem").className.slice(-1)) + 1);

        document.getElementById("linkImagem").href = "../../Img/Manual/Padrinhos_Completo/" + (parseFloat(document.getElementById("imagem").className.slice(-1)) + 1) + ".png";
    }
    else{
        document.getElementById("imagem").src = "../../Img/Manual/Padrinhos_Completo/1.png";

        document.getElementById("imagem").className = "imagem imagem1";

        document.getElementById("linkImagem").href = "../../Img/Manual/Padrinhos_Completo/1.png";
    }

}
function voltarImgIframeImg(){
    if(document.getElementById("imagem").className.slice(-1) > 1){
        document.getElementById("imagem").src = "../../Img/Manual/Padrinhos_Completo/" + (parseFloat(document.getElementById("imagem").className.slice(-1)) - 1) + ".png";

        document.getElementById("imagem").className = "imagem imagem" + (parseFloat(document.getElementById("imagem").className.slice(-1)) - 1);
        
        document.getElementById("linkImagem").href = "../../Img/Manual/Padrinhos_Completo/" + (parseFloat(document.getElementById("imagem").className.slice(-1)) - 1) + ".png";
    }
    else{
        document.getElementById("imagem").src = "../../Img/Manual/Padrinhos_Completo/9.png";

        document.getElementById("imagem").className = "imagem imagem9";
        
        document.getElementById("linkImagem").href = "../../Img/Manual/Padrinhos_Completo/9.png";
    }

}