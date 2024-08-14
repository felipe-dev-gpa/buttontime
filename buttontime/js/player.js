function vTurbChangePlayer() {
    if (!vTurbOriginalPlayerIsMobile && vTurbDeviceIsMobile || vTurbOriginalPlayerIsMobile && !vTurbDeviceIsMobile) {
        vTurbPlayer = vTurbAlternativePlayer;
        vTurbSrcId = vTurbPlayer.id;
    } else {
        vTurbPlayer = vTurbOriginalPlayer;
    }

    var e = document.getElementById(`vid_${vTurbOriginalPlayer.id}`);
    if (e) e.remove();

    var r = document.getElementById(`scr_${vTurbOriginalPlayer.id}`);
    if (r) r.setAttribute("id", `scr_${vTurbSrcId}`);
}

function vTurbCreateSmartVdsElements() {
    var e, r, t;

    if ("1.7.9" === vTurbPlayer.version) {
        if (!document.getElementById(`vid_${vTurbPlayer.id}`)) {
            e = document;
            r = e.getElementById(`scr_${vTurbSrcId}`);
            t = e.createElement("DIV");
            t.id = `vid_${vTurbPlayer.id}`;
            t.style.position = "relative";
            t.style.width = "100%";
            t.style.padding = `${vTurbPlayer.video_aspect_ratio}% 0 0`;
            r.parentElement.insertBefore(t, r);
        }
    } else {
        if (!document.getElementById(`vid_${vTurbPlayer.id}`)) {
            e = document;
            r = e.getElementById(`scr_${vTurbSrcId}`);
            t = e.createElement("DIV");
            t.id = `vid_${vTurbPlayer.id}`;
            t.style.position = "relative";
            t.style.width = "100%";
            t.style.padding = `${vTurbPlayer.video_aspect_ratio}% 0 0`;
            r.parentElement.insertBefore(t, r);
        }

        if (!document.getElementById(`thumb_${vTurbPlayer.id}`)) {
            e = document;
            r = e.getElementById(`vid_${vTurbPlayer.id}`);
            t = e.createElement("IMG");
            t.id = `thumb_${vTurbPlayer.id}`;
            t.style.top = "0";
            t.style.left = "0";
            t.style.width = "100%";
            t.style.height = "100%";
            t.style.position = "absolute";
            t.style.objectFit = "cover";
            t.src = `https://images.converteai.net/${vTurbPlayer.thumbnail_key}`;
            r.appendChild(t);
        }

        if (!document.getElementById(`backdrop_${vTurbPlayer.id}`)) {
            e = document;
            r = e.getElementById(`vid_${vTurbPlayer.id}`);
            t = e.createElement("DIV");
            t.id = `backdrop_${vTurbPlayer.id}`;
            t.style.top = "0";
            t.style.left = "0";
            t.style.width = "100%";
            t.style.height = "100%";
            t.style.position = "absolute";
            t.style.backdropFilter = "none"; // Remover o desfoque
            t.style.webkitBackdropFilter = "none"; // Remover o desfoque para Safari
            r.appendChild(t);
        }
    }
}

function vTurbLoadSmrtvds() {
    var e, r, t, i;
    e = window;
    r = document;
    if (!e.smrtvds) {
        t = e.smrtvds = function () {
            t.callMethod ? t.callMethod.apply(t, arguments) : t.queue.push(arguments);
        };
        e._smrtvds = t;
        t.push = t;
        t.loaded = !0;
        t.version = "1.1";
        t.queue = [];
        i = r.createElement("script");
        i.async = !0;
        i.src = `https://scripts.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`;
        r.getElementsByTagName("head")[0].appendChild(i);
    }
    window.smrtvds(`vid_${vTurbPlayer.id}`, vTurbPlayer.org_id, vTurbPlayer.video_id, vTurbPlayer.options);
}

function vTurbSmrtvds() {
    vTurbCreateSmartVdsElements();
    vTurbLoadSmrtvds();
}

var vTurbOriginalPlayer = {
    "id": "669ef021268488000b491528",
    "org_id": "148062d6-7a4e-4ba5-be57-1bd0e43b6360",
    "name": "lead_01_-_ts01_glicemix_-_v2_at",
    "device_type": "desktop",
    "video_aspect_ratio": "56.25",
    "thumbnail_key": "148062d6-7a4e-4ba5-be57-1bd0e43b6360/players/669ef021268488000b491528/thumbnail.jpg",
    "cover_key": "148062d6-7a4e-4ba5-be57-1bd0e43b6360/players/669ef021268488000b491528/cover.jpg",
    "version": "v1",
    "video_id": "669eef28268488000b491443",
    "options": {
        "autoplay": "smartplay",
        "smart_autoplay_template": "image",
        "theme": "#A70C0C",
        "foreground_color": "#FFFFFF",
        "video": {
            "width": 1920,
            "height": 1080
        },
        "cdn": "cdn.converteai.net",
        "displays": {
            "big_play": false,
            "play_pause": true,
            "backward": false,
            "forward": false,
            "volume": false,
            "volume_bar": true,
            "time": false,
            "fullscreen": false,
            "seekbar": false,
            "seekbar_time": true,
            "speed_control": false
        },
        "callAction": [],
        "pixels": [],
        "thumbs": [],
        "headlines": [],
        "turbos": [],
        "smart_autoplay_elements": [{
            "id": "smart_autoplay_element_669ef021268488000b491528_0",
            "height": 911.4569626309685,
            "width": 911.4569626309684,
            "x": 504,
            "y": 84,
            "order": 1,
            "opacity": 1,
            "rotation": 0,
            "type": "image",
            "properties": {
                "alt": "Smart AutoPlay",
                "src": "https://cdn.converteai.net/148062d6-7a4e-4ba5-be57-1bd0e43b6360/2024/01/30/65b8cae654ff6d00010c0535.png"
            }
        }],
        "mini_hooks": false,
        "mini_hooks_elements": [],
        "resume": true,
        "fake_bar": true,
        "headline": false,
        "turbo": true,
        "turbo_speed": 1.2,
        "turbo_auto_test": false,
        "smartplay_options": {
            "top_text": "Seu vídeo já começou",
            "bottom_text": "Clique para ouvir",
            "foreground_color": "#FFFFFF",
            "background_color": "rgba(82,25,135,0.81)",
            "start_at": 0,
            "end_at": 2944,
            "animation": {
                "animation": "pulse",
                "properties": {
                    "speed": 4
                }
            },
            "custom_preview": null
        },
        "resume_options": {
            "play": "Continuar assistindo?",
            "title": "Você já começou a assistir esse vídeo",
            "replay": "Assistir do início?",
            "disable_pause": false,
            "foreground_color": "#FFFFFF",
            "background_color": "rgba(167,12,12,0.8)"
        },
        "fake_bar_options": {
            "height": 5,
            "alpha": 2,
            "vbar_height": true,
            "vbar_end": true,
            "vbar_network": true,
            "vbar_color": null
        }
    }
};

var vTurbSrcId = "669ef021268488000b491528";
var vTurbPlayer = vTurbOriginalPlayer;
var vTurbDeviceIsMobile = window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/);
vTurbOriginalPlayerIsMobile = "mobile" === vTurbOriginalPlayer.device_type;
vTurbDeviceIsMobile = vTurbDeviceIsMobile && vTurbDeviceIsMobile[0];

vTurbSmrtvds();
