import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import {Part, Sphere, Cylinder} from "../index"
import { Color } from "three";
import { Vector3 } from "three";

const canvas = document.getElementById("three")

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const light = new THREE.AmbientLight( 0, 10 );
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)

const part = new Part({width: 1, height: 1, color: Color.NAMES.gray, depth: 1})
const ball = new Sphere({size: 1})

const cyl = new Cylinder({size: {x: 2}, position: {y: 3}})

scene.background = new THREE.Color( 0xbfe3dd );
scene.add(part.render())
scene.add(ball.render())
scene.add(cyl.render())

part.setSize({x : 1, y: 2})

scene.add( light );
camera.position.z = 5;

const controls = new OrbitControls( camera, renderer.domElement );

document.body.appendChild(renderer.domElement)

function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
}

animate()

console.log("hi")