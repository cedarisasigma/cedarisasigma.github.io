(function() {
    let style = '#our_logo{display:block;z-index:9999999;position:absolute;user-select:none}#our_logo.size_140{width:140px;height:18px}#our_logo.size_120{width:120px;height:18px}';

    let vse = {
        "size_140": '<div id="our_logo" class="size_140"><a target="_blank" href="https://igru.net/" title="Ð’ÑÐµ Ð˜Ð³Ñ€Ñ‹ - ÐžÐ½Ð»Ð°Ð¹Ð½ | Ð¢Ð¾Ñ‚ Ð¡Ð°Ð¼Ñ‹Ð¹ ÐžÑ€Ð¸Ð³Ð¸Ð½Ð°Ð»"><img src="/dasha1/111_4.png" width="140" height="18" style="cursor: pointer;" title="Ð’ÑÐµ Ð˜Ð³Ñ€Ñ‹ - ÐžÐ½Ð»Ð°Ð¹Ð½ | Ð¢Ð¾Ñ‚ Ð¡Ð°Ð¼Ñ‹Ð¹ ÐžÑ€Ð¸Ð³Ð¸Ð½Ð°Ð»" alt="Ð’ÑÐµ Ð˜Ð³Ñ€Ñ‹ - ÐžÐ½Ð»Ð°Ð¹Ð½ | Ð¢Ð¾Ñ‚ Ð¡Ð°Ð¼Ñ‹Ð¹ ÐžÑ€Ð¸Ð³Ð¸Ð½Ð°Ð»"></a></div>',
        "size_120": '<div id="our_logo" class="size_120"><a target="_blank" href="https://igru.net/" title="Ð’ÑÐµ Ð˜Ð³Ñ€Ñ‹ - ÐžÐ½Ð»Ð°Ð¹Ð½ | Ð¢Ð¾Ñ‚ Ð¡Ð°Ð¼Ñ‹Ð¹ ÐžÑ€Ð¸Ð³Ð¸Ð½Ð°Ð»"><img src="/dasha1/111_4.png" width="120" height="18" style="cursor: pointer;" title="Ð’ÑÐµ Ð˜Ð³Ñ€Ñ‹ - ÐžÐ½Ð»Ð°Ð¹Ð½ | Ð¢Ð¾Ñ‚ Ð¡Ð°Ð¼Ñ‹Ð¹ ÐžÑ€Ð¸Ð³Ð¸Ð½Ð°Ð»" alt="Ð’ÑÐµ Ð˜Ð³Ñ€Ñ‹ - ÐžÐ½Ð»Ð°Ð¹Ð½ | Ð¢Ð¾Ñ‚ Ð¡Ð°Ð¼Ñ‹Ð¹ ÐžÑ€Ð¸Ð³Ð¸Ð½Ð°Ð»"></a></div>'
    };
    let gm = {
        "size_140": '<div id="our_logo" class="size_140"><a target="_blank" href="https://8games.net/" title="All Games Online - Play For Free"><img src="/dasha1/1112.png" width="140" height="18" style="cursor: pointer;" title="All Games Online - Play For Free" alt="All Games Online - Play For Free"></a></div>',
        "size_120": '<div id="our_logo" class="size_120"><a target="_blank" href="https://8games.net/" title="All Games Online - Play For Free"><img src="/dasha1/1112.png" width="120" height="18" style="cursor: pointer;" title="All Games Online - Play For Free" alt="All Games Online - Play For Free"></a></div>'
    };

    let css = (e, styles) => {
        for (const property in styles)
            e.style[property] = styles[property];
    };

    let alertLogo = (size = '140', position) => {
        const sheet = document.createElement('style');
        sheet.innerHTML = style;
        document.body.appendChild(sheet);
        const wrapperLogo = document.createElement('div');
        
        let lang  = (navigator.language || navigator.userLanguage).slice(0, 2);
        let currentLogo = '';
        
        document.referrer.includes(atob("OGdhbWVzLm5ldA==")) && (lang = 'gm');
        document.referrer.includes(atob("aWdydS5uZXQ=")) && (lang = 'vse');
        
        ((lang === 'en' || lang === 'gm') && lang !== 'vse') ? currentLogo = gm['size_' + size] : currentLogo = vse['size_' + size];
        
        wrapperLogo.innerHTML = currentLogo;
        document.body.appendChild(wrapperLogo);
        
        typeof position != 'undefined' && (css(document.getElementById('our_logo'), position));
    };

    window.alertLogo = alertLogo;
})();