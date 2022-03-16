function lookUrl (){
    let now = new Date();
    let time = now.getTime();
    now.setTime(259200000 + time);
    let field = "ref";
    if (window.location.href.indexOf("?" + field + '=') != -1){
        let url_string = window.location.href;
        let url = new URL(url_string);
        let ref = url.searchParams.get("ref");
        document.cookie = 'ref =' + ref + '; expires=' +  now;

    }else{
        document.cookie = "ref = ref_dante" + '; expires=' + now;
    }
    let decodedCookie = decodeURIComponent(document.cookie);
    decodedCookie = decodedCookie.replace('ref=','');
    document.getElementById("token").innerHTML = "let g_referrer=" + decodedCookie;
    alert(decodedCookie);
}