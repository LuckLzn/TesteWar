function fillAlemanha(){
    var DE = document.getElementById('DE');
    if(DE.classList[0] == "fill_svg"){
        DE.classList.remove("fill_svg");
        return
    }
    DE.classList.add("fill_svg");
}
var mapa = document.querySelector(".mapa");
if(mapa){
    mapa.addEventListener('click', function(e) {  
        if(e.target.classList[0] == "mapa"){
            return
        }
        if(e.target.id){
            var pais = (e.target.id);
            var pais = document.getElementById(pais)
            if(pais.classList[0] == "fill_svg"){
                pais.classList.remove("fill_svg");
            }
            else{
                pais.classList.add("fill_svg");
            }
        }
        else{
            var pais = e.target.classList[0];
            var pais = "." + pais;
            var pais = document.querySelectorAll(pais)
            for(var i=0; i < pais.length; i++){
                if(pais[i].classList[1] == "fill_svg"){
                    pais[i].classList.remove("fill_svg");
                    continue
                }
                else{
                    pais[i].classList.add("fill_svg");
                }
            }
            
        }
    });
    console.log('ok')
}
else{
    console.log(";-;")
}