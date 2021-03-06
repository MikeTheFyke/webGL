
// Three base ThreeJS elements 1.Scene 2.Camera 3.Renderer
var scene = new THREE.Scene ();

var camera = new THREE.PerspectiveCamera (75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 5; // Lower number will zoom the camera in, higher zoom out

var renderer = new THREE.WebGLRenderer ({antialias: true});

renderer.setClearColor("#e5e5e5"); // background color light grey;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var textOutput = "Three JS Shapes!";

function newText(){
    textOutput = document.getElementById("ThreeJsInput").value;
    console.log(textOutput);
    document.getElementById("ThreeJsInput").value = "";

    var loader = new THREE.FontLoader();

    loader.load( '../fonts/helvetiker_regular.typeface.json', function ( font ) {

        var material = new THREE.MeshPhongMaterial({ color: 0xdddddd });

        var geometry = new THREE.TextGeometry( textOutput, {
            font: font,
            size: 0.5,
            height: 1,

        });
        
        var textMesh = new THREE.Mesh( geometry, material );
        textMesh.position.set(-3,0,0);
        textMesh.rotation.set(0,-0.05,0);
        scene.add( textMesh );
    });
}

// Allow renderer and camera to adjust dynamically with browser window adjustment
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

var raycaster = new THREE.Raycaster(); // Added to specify where click must be performed to activate animation.
var mouse = new THREE.Vector2();

var loader = new THREE.FontLoader();

loader.load( '../fonts/helvetiker_regular.typeface.json', function ( font ) {

var material = new THREE.MeshPhongMaterial({ color: 0xdddddd });

var geometry = new THREE.TextGeometry( textOutput, {
    font: font,
    size: 0.5,
    height: 1,

} );
var textMesh = new THREE.Mesh( geometry, material );
textMesh.position.set(-3,2,0);
textMesh.rotation.set(0,-0.05,0);
scene.add( textMesh );
});

var light = new THREE.PointLight (0xFFFFFF, 1, 500); // Color (white), Intensity, Distance
light.position.set(0,30,0); //light.position.set(10,0,25)
scene.add(light);

var light = new THREE.PointLight (0xFFFFFF, 2, 1000); // Color (white), Intensity, Distance
light.position.set(0,10,25);
scene.add(light);

var render = function () { // Fixes rendering issues when browser frame is resized
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}


render();