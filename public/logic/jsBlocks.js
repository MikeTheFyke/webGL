// Three base ThreeJS elements 1.Scene 2.Camera 3.Renderer
var scene = new THREE.Scene ();

var camera = new THREE.PerspectiveCamera (75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 5; // Lower number will zoom the camera in, higher zoom out

var renderer = new THREE.WebGLRenderer ({antialias: true});

renderer.setClearColor("#e5e5e5"); // background color light grey;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


// Allow renderer and camera to adjust dynamically with browser window adjustment
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

var raycaster = new THREE.Raycaster(); // Added to specify where click must be performed to activate animation.
var mouse = new THREE.Vector2();

/// Object 1
// Geometry or form of the object + Material of object
var geometry = new THREE.BoxGeometry(1, 1, 1); // (Radius, Width Segments, Height Segments)
// var material = new THREE.MeshLambertMaterial({color: 0xFFCC00}); // Yellow cubes
var material = new THREE.MeshLambertMaterial({color: 0xF7F7F7}); // White Cubes

// var mesh = new THREE.Mesh(geometry, material);

// mesh.position.x = 2; // repositions x cord compared to camera view, y and z can also be repositoned.
                     // repositions move from center of camera.
// mesh.position.set(2,2,-2); // our position can be set all in one line                     
// mesh.rotation.set(45,0,0); // rotation can also be set in much the same way
// mesh.scale.set(1,2,1); // can be used in conjuction with previous mesh propeties

// scene.add(mesh);
/// Object 1 END ///

/// Object 2 ///
// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshLambertMaterial({color: 0xFFCC00}); 
// var mesh = new THREE.Mesh(geometry, material);
// mesh.position.y = 2;
// scene.add(mesh);
/// Object 2 END ///

/// Object 3 ///
// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshLambertMaterial({color: 0xFFCC00}); 
// var mesh = new THREE.Mesh(geometry, material);
// mesh.position.y = -2;
// scene.add(mesh);
/// Object 3 END ///

// Create Random placement for cubes in a loop
meshX = -10;
for (var  i = 0; i < 15; i++){
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (Math.random() - 0.5) * 10; 
    mesh.position.y = (Math.random() - 0.5) * 10;
    mesh.position.z = (Math.random() - 0.5) * 10;
    scene.add(mesh);
    meshX+=1;
}

var light = new THREE.PointLight (0xFFFFFF, 1, 500); // Color (white), Intensity, Distance
light.position.set(0,0,0); //light.position.set(10,0,25)
scene.add(light);

var light = new THREE.PointLight (0xFFFFFF, 2, 1000); // Color (white), Intensity, Distance
light.position.set(0,0,25);
scene.add(light);

var render = function () { // Fixes rendering issues when browser frame is resized
    requestAnimationFrame(render);

    // mesh.rotation.x += 0.01; // when placed  inside of our render function this will be
                             // called every frame to create animation. Higher the number faster the movement.
    // mesh.rotation.y += 0.01; // plus to the right, minus to the left


    renderer.render(scene, camera);
}

function onMouseMove (event){ // To move accurately define mouse position for animation
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1; 
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    for (var i = 0; i < intersects.length; i ++){
    // implementing GSAP

    // this.tl = new TimelineMax ().delay(.3); // .3 will create a much smoother animation
    this.tl = new TimelineMax (); // changed to paused to make aniamtion play after an event.
    this.tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.Easeout}) // we can add more commands like frames.
    this.tl.to(intersects[i].object.scale, .5, {x: .5, ease: Expo.Easeout}) 
    this.tl.to(intersects[i].object.position, .5, {x: 2, ease: Expo.Easeout}) 
    this.tl.to(intersects[i].object.rotation, .5, {y: Math.PI * .5, ease: Expo.Easeout}, "=-1.5"); // Addition of attributes outside of object will effect timline of which command occurs.  
    }
}

function onMouseClick (event){ // Change color on mouse click to red.
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1; 
    mouse.y = (event.clientY / window.innerHeight) * 2 - 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    for (var i = 0; i < intersects.length; i ++){
        intersects[i].object.material.color.set(0xff0000);
    }
}

render();

// // implementing GSAP

// // this.tl = new TimelineMax ().delay(.3); // .3 will create a much smoother animation
// this.tl = new TimelineMax ({paused: true}); // changed to paused to make aniamtion play after an event.
// this.tl.to(this.mesh.scale, 1, {x: 2, ease: Expo.Easeout}) // we can add more commands like frames.
// this.tl.to(this.mesh.scale, .5, {x: .5, ease: Expo.Easeout}) 
// this.tl.to(this.mesh.position, .5, {x: 2, ease: Expo.Easeout}) 
// this.tl.to(this.mesh.rotation, .5, {y: Math.PI * .5, ease: Expo.Easeout}, "=-1.5"); // Addition of attributes outside of object will effect timline of which command occurs.  

window.addEventListener('mousemove', onMouseMove); // Animation will now after a hover event.
// window.addEventListener('click', onMouseClick, false); // Change color on mouse click