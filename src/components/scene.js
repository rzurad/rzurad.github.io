import * as THREE from 'three';

function videoShader() {
    return `
        void main() {

        }
    `;
}

function fragmentShader() {
    return `
        uniform sampler2D frame;
        
        varying vec2 vUv;

        void main() {
            gl_FragColor = texture2D(frame, vUv);
        }
    `;
}

function vertexShader() {
    return `
        void main() {
            gl_Position = vec4(position, 1.0);
        }
    `;
}

function createScene(container, video) {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera();
    const renderer = new THREE.WebGLRenderer();

    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;

    console.assert(containerHeight > 0, 'Scene containerHeight is not greater than 0!: ' + containerHeight);
    console.assert(containerWidth > 0, 'Scene containerWidth is not greater than 0!: ' + containerWidth);

    const videoHeight = 1080;
    const videoWidth = 720;

    debugger;
    const scaledHeight = containerHeight > containerWidth ?
        containerHeight : // scale to height
        (containerWidth / videoWidth * videoWidth) * videoHeight / videoWidth; // scaling by width, preserve aspect ratio of height

    const scaledWidth = containerHeight > containerWidth ?
        (containerHeight / videoHeight * videoHeight) * videoWidth / videoHeight : // scale to preserve aspect ratio
        containerWidth;// scale to width

    container.appendChild(renderer.domElement);
    const geometry = new THREE.PlaneGeometry(scaledWidth, scaledHeight, 1);
    const texture = new THREE.VideoTexture(video);

    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

    const material = new THREE.MeshBasicMaterial({ /* color: new THREE.Color(0xacb6e5),*/ map: texture });
    const plane = new THREE.Mesh(geometry, material);

    scene.add(plane);
    camera.position.z = 1;

    var isRunning = false;
    resize();
    
    window.addEventListener('resize', resize);

    function animate() {
        if (isRunning) {
            window.requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
    }

    function start() {
        isRunning = true;
        video.play();
        animate();
    }

    function stop() {
        video.stop();
        isRunning = false;
    }

    function resize() {
        const height = window.innerHeight;
        const width = window.innerWidth;

        camera.left = width / -2;
        camera.right = width / 2;
        camera.top = height / 2;
        camera.bottom = height / -2;
        camera.updateProjectionMatrix();

        geometry.width = width;
        geometry.height = height;

        renderer.setSize(width, height);
    }

    function destroy() {
        window.removeEventListener('resize', resize);
        plane.dispose();
        material.dispose();
        texture.dispose();
        geometry.dispose();
        renderer.dispose();
        camera.dispose();
        scene.dispose();
    }

    return {
        destroy,
        resize,
        start,
        stop
    };
}

export default createScene;
