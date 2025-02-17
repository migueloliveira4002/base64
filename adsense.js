// Adiciona o código de integração com o Google AdSense no rodapé
window.onload = function() {
    let footer = document.querySelector("footer");
    let adScript = document.createElement("script");
    adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    adScript.async = true;
    footer.appendChild(adScript);
    
    let adDiv = document.createElement("ins");
    adDiv.className = "adsbygoogle";
    adDiv.style = "display:block; text-align:center;";
    adDiv.setAttribute("data-ad-client", "ca-pub-XXXXX"); // Substitua pelo seu ID de editor
    adDiv.setAttribute("data-ad-slot", "XXXXXXX"); // Substitua pelo seu ID de slot de anúncio
    adDiv.setAttribute("data-ad-format", "auto");
    
    footer.appendChild(adDiv);
    (adsbygoogle = window.adsbygoogle || []).push({});
}
