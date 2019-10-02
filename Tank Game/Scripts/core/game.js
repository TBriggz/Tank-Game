// Immediate Invoked Anonymous Function
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    function Init() {
        console.log("Initialization Start");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();

    }
    function Main() {
        console.log("Game Start...");
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map