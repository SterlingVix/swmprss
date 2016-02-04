var icegram_pre_data = {
    "ajax_url": "http://www.sleepwithmepodcast.com/wp-admin/admin-ajax.php",
    "post_obj": {
        "is_home": false,
        "page_id": null,
        "action": "display_messages",
        "shortcodes": [],
        "cache_compatibility": "no",
        "device": "laptop"
    }
};
var icegram_data = {
    "messages": [{
        "post_title": "Don\u2019t want email, just want you to sleep (popup permanent dismiss on CTA click)",
        "type": "popup",
        "theme": "air-mail",
        "animation": "appear",
        "headline": "",
        "icon": "",
        
        
        
        "message": "<p><script>
        window.onload = function() {
        window.setTimeout(function() {
        var animatedElement = document.querySelector('.ig_anim_appear_in');
        var modalFadeElement = document.querySelector('.mfp-bg');
        var modalFadeReadyElement = document.querySelector('.mfp-bg.mfp-ready');
        console.log(animatedElement);
        console.log(modalFadeElement);
        console.log(modalFadeReadyElement);
    }, 1500);
                 }; // end window.onload
                 </script></p>
                 <style id=\"popup-styles\">
                 div.header-div {
                 text-align: center;
                 margin: 0.5em auto 1em auto;
                 }
                     h3.popup-cta-header-item {
                 margin: 0.33em auto;
                 color: rgb(147, 106, 105);
                 }
                     h1.popup-cta-header-item {
                 margin: 0.66em auto 0.33em;
                 font-weight: 600;
                 color: rgb(152, 110, 182);
                 }
                     .popup-cta-flex-container {
                 display: flex;
                 flex-flow: row wrap;
                 justify-content: center;
                 align-content: space-between;
                 align-items: center;
                 }
                     .popup-cta-flex-item {
                 flex: 0 1 auto;
                 align-self: auto;
                 min-width: 0;
                 min-height: auto;
                 }
                     .popup-cta-btn {
                 border: none;
                 cursor: pointer;
                 padding: 0.8em 1.4em;
                 margin: 0.8em 1.6em;
                 outline: none;
                 position: relative;
                 color: #fff;
                 background: rgb(68, 140, 202);
                 box-shadow: 0 6px rgb(62, 120, 171);
                 -webkit-transition: none;
                 -moz-transition: none;
                 transition: none;
                 border-radius: 0.66em;
                 }
                     .popup-cta-btn:after {
                 content: '';
                 position: absolute;
                 z-index: -1;
                 -webkit-transition: all 0.3s;
                 -moz-transition: all 0.3s;
                 transition: all 0.3s;
                 }
                     .popup-cta-btn:hover {
                 top: 2px;
                 box-shadow: 0 4px rgb(56, 105, 147);
                 }
                     .popup-cta-btn:active {
                 top: 6px;
                 box-shadow: 0 0 rgb(56, 105, 147);
                 }
                     .ig_popup.ig_air-mail div.ig_button,
                 .ig_popup.ig_air-mail input[type=\"submit\"],
                 .ig_popup.ig_air-mail input[type=\"button\"] {
                 text-transform: none;
                 border-radius: 0.6em;
                 margin: 1.5em auto 1.25em auto;
                 padding: 0.33em .15em 0.33em;
                 background: rgb(151, 109, 182);
                 color: rgb(255, 255, 255);
                 box-shadow: 0 6px rgb(123, 84, 152);
                 font-weight: normal;
                 font-family: 'Poly', serif;
                 font-size: 1.66em;
                 border-top: none;
                 border-bottom: none;
                 }
                     .ig_popup.ig_air-mail div.ig_button:hover,
                 .ig_popup.ig_air-mail input[type=\"submit\"]:hover,
                 .ig_popup.ig_air-mail input[type=\"button\"]:hover {
                 box-shadow: 0 4px rgb(107, 73, 141);
                 top: 2px;
                 }
                     .ig_popup.ig_air-mail div.ig_button:active,
                 .ig_popup.ig_air-mail input[type=\"submit\"]:active,
                 .ig_popup.ig_air-mail input[type=\"button\"]:active {
                 box-shadow: 0 0 rgb(112, 79, 145);
                 top: 6px;
                 }
                     div.ig_anim_appear_in {
                 -webkit-animation: IgFadeIn 0.3s;
                 -moz-animation: IgFadeIn 0.3s;
                 animation: IgFadeIn 0.3s;
                 visibility: visible
                 }
                     div.ig_anim_appear_out {
                 -webkit-animation: IgFadeOut 0.3s;
                 -moz-animation: IgFadeOut 0.3s;
                 animation: IgFadeOut 0.3s
                 }
                     media=\"all\" .mfp-bg {}
                 media=\"all\" mfp-bg.mfp-ready {}
                 media=\"all\" .mfp-bg {
                     }
                 </style>
                 <div class=\"header-div\">
                 <h3 class=\"popup-cta-header-item\">Hey, I don&#8217;t want your e-mail</h3>
                 <h1 class=\"popup-cta-header-item\">I just want to put you to sleep</h1>
                 </div>
                 <div class=\"popup-cta-flex-container\">
                 <button type=\"button\" onclick=\"(document.querySelector('.ig_close')).click();\" class=\"popup-cta-btn popup-cta-flex-item\" title=\"Updated Sundays, Tuesdays, and Thursdays\">Newest episodes</button>
                 </div>
                 <div class=\"popup-cta-flex-container\">
                 <button type=\"button\" onclick=\"window.open('https://itunes.apple.com/podcast/id740675898?mt=2&#038;ls=1', '_blank');\" class=\"popup-cta-btn popup-cta-flex-item\" title=\"To help uSleep\">Subscribe on iTunes</button><br />
                 <button type=\"button\" onclick=\"window.open('http://subscribeonandroid.com/sleepwithmepodcast.libsyn.com/rss', '_blank');\" class=\"popup-cta-btn popup-cta-flex-item\" title=\"And dream of electric sheep\">Subscribe on Android</button>
                 </div>
                 <div class=\"popup-cta-flex-container\">
                 <button type=\"button\" onclick=\"window.location.assign('http://www.sleepwithmepodcast.com/contact/');\" class=\"popup-cta-btn popup-cta-flex-item\" title=\"Unless you're a brain-bot\">Contact Scooter</button>
                 </div>
                 <div class=\"popup-cta-flex-container\">
                 <button type=\"button\" onclick=\"window.open('https://www.youtube.com/watch?v=l17QMqQpbZE', '_blank');\" class=\"popup-cta-btn popup-cta-flex-item\" title=\"Yes, and we're 65% subliminal message-free\">Does this really work?</button><br />
                 <button type=\"button\" onclick=\"window.open('http://podcasting.about.com/od/basics101/a/PodcastListen.htm', '_blank');\" class=\"popup-cta-btn popup-cta-flex-item\" title=\"It's easy!\">How do I listen to a podcast?</button>
                 </div>
                 <div class=\"popup-cta-flex-container\">
                 <button type=\"button\" onclick=\"window.open('http://www.amazon.com/?tag=slewitmepod-20', '_blank');\" class=\"popup-cta-btn popup-cta-flex-item\" title=\"Don't tell James Cash Penny and Richard Warren Sears!\">Amazon.com affiliate link</button>
                 </div>
                 ",
        "form_style": "style_0",
        "form_layout": "left",
        "form_bg_color": "",
        "form_text_color": "",
        "form_header": "",
        "form_html_original": "",
        "form_footer": "",
        "label": "I'm ready for lullzzz...",
        "link": "",
        "use_theme_defaults": "yes",
        "bg_color": "",
        "text_color": "",
        "cta_bg_color": "",
        "cta_text_color": "",
        "position": "21",
        "id": "3656",
        "delay_time": "5",
        "retargeting": "",
        "campaign_id": 3655,
        "expiry_time": "",
        "retargeting_clicked": "",
        "expiry_time_clicked": ""
    }],
    "ajax_url": "http://www.sleepwithmepodcast.com/wp-admin/admin-ajax.php",
    "defaults": {
        "icon": "http://www.sleepwithmepodcast.com/wp-content/plugins/icegram/assets/images/icegram-logo-branding-64-grey.png",
        "powered_by_logo": "",
        "powered_by_text": ""
    },
    "scripts": ["http://www.sleepwithmepodcast.com/wp-content/plugins/icegram/assets/js/icegram.js", "http://www.sleepwithmepodcast.com/wp-content/plugins/icegram/message-types/popup/main.js"],
    "css": ["http://www.sleepwithmepodcast.com/wp-content/plugins/icegram/assets/css/frontend.css", "http://www.sleepwithmepodcast.com/wp-content/plugins/icegram/message-types/popup/default.css", "http://www.sleepwithmepodcast.com/wp-content/plugins/icegram/message-types/popup/themes/air-mail.css"]
}