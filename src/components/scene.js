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

    container.appendChild(renderer.domElement);

    const uniforms = {};

    const geometry = new THREE.PlaneGeometry(720, 480, 1);
    const texture = new THREE.VideoTexture(video);

    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

    uniforms.frame = { type: 't', value: texture };

    // const materialV = new THREE.MeshBasicMaterial({ /* color: new THREE.Color(0xacb6e5),*/ map: texture });
    const material = new THREE.ShaderMaterial({
        uniforms,
        fragmentShader: fragmentShader(),
        vertexShader: vertexShader()
    });

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

        geometry.width = 720;
        geometry.height = 480;

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
