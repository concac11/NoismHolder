const WIDTH = 400;
const HEIGHT = 300;

const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

const container = document.querySelector('#container');

const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
const scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(WIDTH, HEIGHT);

container.appendChild(renderer.domElement);

var loader = new THREE.OBJLoader();
loader.load(
   "Peter/peter.obj",
    function(object) {
    	scene.add(object);
	renderer.render(scene, camera);
    });

var ambient = new THREE.AmbientLight( 0x444444 );
scene.add( ambient );

var directionalLight = new THREE.DirectionalLight( 0xffeedd );
directionalLight.position.set( 0, 0, 1 ).normalize();
scene.add( directionalLight );

function update() {
	renderer.render(scene, camera);
	requestAnimationFrame(update);
}

requestAnimationFrame(update);
