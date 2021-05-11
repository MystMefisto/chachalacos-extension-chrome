var App = App || {};

App.Popup = ( () =>{
    function init(){
        setVersion();
        addEventHandlers();
    }

    function setVersion(){
        const version = chrome.app.getDetails().version_name;
        const div_version = document.getElementById("version");
        div_version.innerHTML="®Extensión chachacalacos v " + version;
    }

    function addEventHandlers(){
        const 
    }
    init();
})()