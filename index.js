import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import lineVertexShader from './shaders/lines/vertex.glsl'
import lineFragmentShader from './shaders/lines/fragment.glsl'
import gsap from 'gsap'
import {CustomEase} from "gsap/CustomEase"
import * as RELAY from './relay'

/*
BASE BASE BASE BASE BASE BASE BASE BASE
*/

// Canvas
const canvas = document.querySelector('canvas.webgl');
const canvasParent = canvas.parentElement;

// Scene
const scene = new THREE.Scene()
// var fogColor = new THREE.Color('black');
var fogColor = new THREE.Color(0x100217); // review nebulablack
scene.background = fogColor;

/*
FIELD FIELD FIELD FIELD FIELD FIELD FIELD FIELD FIELD
*/

let lines = []
let destroyLines = false;

const fieldParams = {
    fieldSize: 75,
    lines: 140,
    lineResolution: 0.02,
    matrixResolution: 512,
    blackHoleSize: 0.25,
    wellSize: 300,
    noise1: 3.0,
    noise2: 3.5,
    noise3: 0.8,
    spiralArms: 7,
    spiralAttenuation: 1.1,
    spiralTwist: -1.0,
    spiralSpeed: 4.3,
    spiralSize: 11.8,
    dampening: 1.000,
    blackHoleHeight: -2.5, 
}

if (canvasParent.clientHeight > canvasParent.clientWidth) {
    fieldParams.lines = 90
    fieldParams.lineResolution *= 1.6
    fieldParams.matrixResolution = 300
}   


const fieldColor = {
    minimumAlpha: 1.0,
    maximumAlpha: 1.0,
    insideColor: new THREE.Color(RELAY.fieldColors.insideColor),
    outsideColor: new THREE.Color(RELAY.fieldColors.outsideColor),
    startInsideColor: null,
    startOutsideColor: null,
    warpColor: new THREE.Color(RELAY.fieldColors.warpColor),
    warpMultiplier: RELAY.fieldColors.warpMultiplier
}

fieldColor.startInsideColor = fieldColor.insideColor.clone()
fieldColor.startOutsideColor = fieldColor.outsideColor.clone()

//init lines

let lineMaterial = null

function InitLines() {
    if (lines.length != 0) {
        for (let i = 0; i < lines.length; i++) {
            scene.remove(lines[i])
        }
    }

    lines = []

    const lineMinRadius = 0.01
    const lineMaxRadius = 0.5
    const lineRadiusDelta = (lineMaxRadius - lineMinRadius) / (fieldParams.lines + 1)
    const lineRadialPitch = fieldParams.lineResolution

    let depth_test = true

    if (isMobile) depth_test = false

    lineMaterial = new THREE.RawShaderMaterial({
        vertexShader: lineVertexShader,
        fragmentShader: lineFragmentShader,
        depthTest: depth_test,
        uniforms: {
            uTime: {
                value: elapsedTime
            },
            uRadialPitch: {
                value: lineRadialPitch
            },
            uFieldSize: {
                value: fieldParams.fieldSize
            },
            uWellSize: {
                value: fieldParams.wellSize
            },
            uNoise1: {
                value: fieldParams.noise1
            },
            uNoise2: {
                value: fieldParams.noise2
            },
            uNoise3: {
                value: fieldParams.noise3
            },
            uMinimumAlpha: {
                value: fieldColor.minimumAlpha
            },
            uMaximumAlpha: {
                value: fieldColor.maximumAlpha
            },
            uInsideColor: {
                value: fieldColor.insideColor
            },
            uOutsideColor: {
                value: fieldColor.outsideColor
            },
            uAccentColor: {
                value: fieldColor.warpColor
            },
            uAccentColorMultiplier: {
                value: fieldColor.warpMultiplier
            },
            uSpiralArms: {
                value: fieldParams.spiralArms
            },
            uSpiralAttenuation: {
                value: fieldParams.spiralAttenuation
            },
            uSpiralSize: {
                value: fieldParams.spiralSize
            },
            uSpiralSpeed: {
                value: fieldParams.spiralSpeed
            },
            uSpiralTwist: {
                value: fieldParams.spiralTwist
            },

            u1posX: {
                value: planetList.planet0.posX
            },
            u1posY: {
                value: planetList.planet0.posZ
            },
            u1size: {
                value: planetList.planet0.size
            },
            u1dense: {
                value: planetList.planet0.density
            },

            u2posX: {
                value: planetList.planet1.posX
            },
            u2posY: {
                value: planetList.planet1.posZ
            },
            u2size: {
                value: planetList.planet1.size
            },
            u2dense: {
                value: planetList.planet1.density
            },

            u3posX: {
                value: planetList.planet2.posX
            },
            u3posY: {
                value: planetList.planet2.posZ
            },
            u3size: {
                value: planetList.planet2.size
            },
            u3dense: {
                value: planetList.planet2.density
            },

            u4posX: {
                value: planetList.planet3.posX
            },
            u4posY: {
                value: planetList.planet3.posZ
            },
            u4size: {
                value: planetList.planet3.size
            },
            u4dense: {
                value: planetList.planet3.density
            },

            u5posX: {
                value: planetList.planet4.posX
            },
            u5posY: {
                value: planetList.planet4.posZ
            },
            u5size: {
                value: planetList.planet4.size
            },
            u5dense: {
                value: planetList.planet4.density
            },

            u6posX: {
                value: planetList.planet5.posX
            },
            u6posY: {
                value: planetList.planet5.posZ
            },
            u6size: {
                value: planetList.planet5.size
            },
            u6dense: {
                value: planetList.planet5.density
            },

            u7posX: {
                value: planetList.planet6.posX
            },
            u7posY: {
                value: planetList.planet6.posZ
            },
            u7size: {
                value: planetList.planet6.size
            },
            u7dense: {
                value: planetList.planet6.density
            }
        },
        
        blending: THREE.AdditiveBlending
    })

    for (let i = 0; i < fieldParams.lines; i++) {

        let lineRadius = lineMinRadius + i * lineRadiusDelta
        const lineTotalPoints = Math.PI * 2 / lineRadialPitch

        let linePoints = []
        let rads = 0
        for (let j = 0; j < lineTotalPoints + 1; j++) {
            rads = lineRadialPitch * j
            if (j + 1 > lineTotalPoints + 1) rads = Math.PI * 2
            linePoints.push(
                new THREE.Vector3(
                    j,
                    lineRadius * Math.cos(rads) + 0.5,
                    lineRadius * Math.sin(rads) + 0.5)
            )
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(linePoints);

        lines.push(new THREE.Line(geometry, lineMaterial))

        scene.add(lines[i])
    }
}

function UpdateLines() {
    lineMaterial.uniforms.uTime.value += deltaTime * timeModifier
    
    lineMaterial.uniforms.u1posX.value = planetList.planet0.posX
    lineMaterial.uniforms.u1posY.value = planetList.planet0.posZ

    lineMaterial.uniforms.u2posX.value = planetList.planet1.posX
    lineMaterial.uniforms.u2posY.value = planetList.planet1.posZ

    lineMaterial.uniforms.u3posX.value = planetList.planet2.posX
    lineMaterial.uniforms.u3posY.value = planetList.planet2.posZ

    lineMaterial.uniforms.u4posX.value = planetList.planet3.posX
    lineMaterial.uniforms.u4posY.value = planetList.planet3.posZ

    lineMaterial.uniforms.u5posX.value = planetList.planet4.posX
    lineMaterial.uniforms.u5posY.value = planetList.planet4.posZ

    lineMaterial.uniforms.u6posX.value = planetList.planet5.posX
    lineMaterial.uniforms.u6posY.value = planetList.planet5.posZ

    lineMaterial.uniforms.u7posX.value = planetList.planet6.posX
    lineMaterial.uniforms.u7posY.value = planetList.planet6.posZ

    lineMaterial.uniforms.uNoise1.value = fieldParams.noise1
    lineMaterial.uniforms.uSpiralSize.value = fieldParams.spiralSize
    lineMaterial.uniforms.uAccentColorMultiplier.value = fieldColor.warpMultiplier

    lineMaterial.needsUpdate = true
}

/*
SPACE OBJECTS SPACE OBJECTS SPACE OBJECTS SPACE OBJECTS SPACE OBJECTS SPACE OBJECTS
*/

//Reflections

const envSize = 256;

const cubeRenderTarget1 = new THREE.WebGLCubeRenderTarget(envSize);
cubeRenderTarget1.mipmaps = false

const cubeCamera1 = new THREE.CubeCamera(1, 15, cubeRenderTarget1);

//Textures
const textureLoader = new THREE.TextureLoader()
const matcapTexturePlanetETH = textureLoader.load('https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370b3d90ce0bd12053a5f63_ETH06.webp')
const matcapTexturePlanetSOL = textureLoader.load('https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370a9b839109b61d203cd19_SOL06.webp')
const matcapTexturePlanetBNB = textureLoader.load('https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370b3d9b73c8d153171b90b_BNB02.webp')
const matcapTexturePlanetPOLY = textureLoader.load('https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370b3d9019673128bbd3656_POLY02.webp')
const matcapTexturePlanetAVAX = textureLoader.load('https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370b3d9352e2851593165c7_AVA02.webp')
const matcapTexturePlanetFTM = textureLoader.load('https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370b3d939109bcb6504548b_SUI01.webp')
const matcapTexturePlanetLINK = textureLoader.load('https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6372b1223e75b43deac11884_LINK07.webp')
const textureMoon = textureLoader.load('https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370bec439109bb90304fd78_MOON01.webp')

//Labels

let labelTextures = []
let labelBitmaps = []
let labelStrings = []
labelStrings.push("Avalanche")
labelStrings.push("Binance")
labelStrings.push("Ethereum")
labelStrings.push("Sui")
labelStrings.push("Polygon")
labelStrings.push("Solana")
labelStrings.push("Chainlink")

for (let i = 0; i < 7; i++) {
    //create image
    labelBitmaps.push(document.createElement('canvas'));
    labelBitmaps[i].width = 675*2.0;
    labelBitmaps[i].height = 125*2.0;
    var g = labelBitmaps[i].getContext('2d');
    g.font = '600 120px Inter, sans-serif'; // review labels
    g.fillStyle = '#E6E6E6'; // review labels
    g.textAlign = "center";

    // labelStrings[i] = labelStrings[i].toUpperCase() // review labels
    g.fillText(labelStrings[i], 675*1.0, 200);
    
    // canvas contents will be used for a texture
    labelTextures.push(new THREE.Texture(labelBitmaps[i]))
    labelTextures[i].needsUpdate = true
}

const blackHoleGlow = textureLoader.load('https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370e02b0d7d569215976ff3_glow04.webp')
const blackHoleRingTex = textureLoader.load('https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370dc1f71bc73d2b7b258a3_ring04.webp')
const texture = textureLoader.load('https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370e0e760a89c62f4b170dd_env14.png',
    () => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(renderer, texture);
        scene.background = rt.texture;
    });
texture.mipmaps = false
matcapTexturePlanetETH.mipmaps = false
matcapTexturePlanetSOL.mipmaps = false
matcapTexturePlanetBNB.mipmaps = false
matcapTexturePlanetPOLY.mipmaps = false
matcapTexturePlanetAVAX.mipmaps = false
matcapTexturePlanetFTM.mipmaps = false
matcapTexturePlanetLINK.mipmaps = false

const planetList = {
    planet0: {
        index: 15,
        size: 0.05 * 0.7,
        orbitRadius: 0.21 * 0.7,
        orbitSpeed: 0.115,
        orbitHeight: -1.8,
        orbitOffset: -0.5,
        density: 2.5,
        material: null,
        geometry: null,
        object: null,
        moonQuantity: 4,
        moonObjects: [],
        matcap: matcapTexturePlanetPOLY,
        label: labelTextures[4],
        labelObject: null,
        originalHeight: 0,
        posX: 0,
        posZ: 0,
        ignoreField: false,
        insideColor: new THREE.Color('#A792E6'),
        outsideColor: new THREE.Color('#4F34A4')
    },
    planet1: {
        index: 25,
        size: 0.04 * 0.7,
        orbitRadius: 0.45 * 0.7,
        orbitSpeed: 0.09,
        orbitHeight: -1.2,
        orbitOffset: 3,
        density: 3.5,
        material: null,
        geometry: null,
        object: null,
        moonQuantity: 1,
        moonObjects: [],
        matcap: matcapTexturePlanetFTM,
        label: labelTextures[3],
        labelObject: null,
        originalHeight: 0,
        posX: 0,
        posZ: 0,
        ignoreField: true,
        insideColor: new THREE.Color('#699DE2'),
        outsideColor: new THREE.Color('#173FAD')
    },
    planet2: {
        index: 20,
        size: 0.045 * 0.7,
        orbitRadius: 0.3 * 0.7,
        orbitSpeed: 0.06,
        orbitHeight: -0.6,
        orbitOffset: 7,
        density: 2.5,
        material: null,
        geometry: null,
        object: null,
        moonQuantity: 4,
        moonObjects: [],
        matcap: matcapTexturePlanetAVAX,
        label: labelTextures[0],
        labelObject: null,
        originalHeight: 0,
        posX: 0,
        posZ: 0,
        ignoreField: false,
        insideColor: new THREE.Color('#CC3333'),
        outsideColor: new THREE.Color('#CC3333')
    },
    planet3: {
        index: 0,
        size: 0.075 * 0.7,
        orbitRadius: 0.3 * 0.7,
        orbitSpeed: 0.06,
        orbitHeight: -0.5,
        orbitOffset: 2,
        density: 4,
        material: null,
        geometry: null,
        object: null,
        moonQuantity: 4,
        moonObjects: [],
        matcap: matcapTexturePlanetETH,
        label: labelTextures[2],
        labelObject: null,
        originalHeight: 0,
        ignoreField: false,
        insideColor: new THREE.Color('#281660'),
        outsideColor: new THREE.Color('#4387AE')
    },
    planet4: {
        index: 5,
        size: 0.045 * 0.7,
        orbitRadius: 0.34 * 0.7,
        orbitSpeed: 0.06,
        orbitHeight: 0.0,
        orbitOffset: 4,
        density: 3.0,
        material: null,
        geometry: null,
        object: null,
        moonQuantity: 4,
        moonObjects: [],
        matcap: matcapTexturePlanetSOL,
        label: labelTextures[5],
        labelObject: null,
        originalHeight: 0,
        posX: 0,
        posZ: 0,
        ignoreField: false,
        insideColor: new THREE.Color('#2C6060'),
        outsideColor: new THREE.Color('#281660')
    },
    planet5: {
        index: 10,
        size: 0.055 * 0.7,
        orbitRadius: 0.35 * 0.7,
        orbitSpeed: 0.06,
        orbitHeight: -0.3,
        orbitOffset: 5,
        density: 2.5,
        material: null,
        geometry: null,
        object: null,
        moonQuantity: 4,
        moonObjects: [],
        matcap: matcapTexturePlanetBNB,
        label: labelTextures[1],
        labelObject: null,
        originalHeight: 0,
        posX: 0,
        posZ: 0,
        ignoreField: false,
        insideColor: new THREE.Color('#C97C3C'),
        outsideColor: new THREE.Color('#E3AF74')
    },
    planet6: {
        index: 30,
        size: 0.045 * 0.7,
        orbitRadius: 0.15 * 0.7,
        orbitSpeed: 0.3,
        orbitHeight: -2.0,
        orbitOffset: 5,
        density: 2.5,
        material: null,
        geometry: null,
        object: null,
        moonQuantity: 0,
        moonObjects: [],
        matcap: matcapTexturePlanetLINK,
        label: labelTextures[6],
        labelObject: null,
        originalHeight: 0,
        posX: 0,
        posZ: 0,
        ignoreField: true,
        insideColor: new THREE.Color('#88D3E2'),
        outsideColor: new THREE.Color('#0728A1')
    }
}

let blackHole = new THREE.Object3D()
let blackHoleCenter = null
let blackHoleRing = null
let blackHoleHalo = null
let blackHoleTorusMaterialReflex = null
let chainlinkHalo = null

const textParams = {
    defaultOpacity: 1,
    defaultScale: 1.2,
    hoverOpacity: 1,
    hoverScale: 0.8
}


function InitAstro() {

    blackHoleTorusMaterialReflex = new THREE.MeshStandardMaterial({
        roughness: 0.0,
        metalness: 1.0
    })
    blackHoleTorusMaterialReflex.mipmaps = false
    const blackHoleRingMaterial = new THREE.MeshBasicMaterial({
        color: '#f7e5ff',
        transparent: true,
        premultipliedAlpha: true,
        side: THREE.DoubleSide,
        alphaTest: false,
        depthWrite: false
    })
    blackHoleRingMaterial.map = blackHoleRingTex
    const blackHoleHaloMaterial = new THREE.MeshBasicMaterial({
        transparent: true,
        blending: THREE.AdditiveBlending,
        premultipliedAlpha: true,
        alphaTest: false,
        depthWrite: false
    })

    //Blackhole
    const blackHoleCenterGeometry = new THREE.TorusGeometry(9, 9, 64, 64)
    const blackHoleHaloGeometry = new THREE.PlaneGeometry(11.5, 11.5)
    const blackHoleRingGeometryDisk = new THREE.TorusGeometry(7.5, 1.2, 60, 60)


    blackHoleCenter = new THREE.Mesh(blackHoleCenterGeometry, blackHoleTorusMaterialReflex)
    blackHoleRing = new THREE.Mesh(blackHoleRingGeometryDisk, blackHoleRingMaterial)
    blackHoleHalo = new THREE.Mesh(blackHoleHaloGeometry, blackHoleHaloMaterial)
    blackHoleCenter.scale.set(fieldParams.blackHoleSize, fieldParams.blackHoleSize, fieldParams.blackHoleSize * 1.3)
    blackHole.position.set(0, fieldParams.blackHoleHeight, 0)
    scene.add(blackHole)
    scene.add(blackHoleCenter)
    
    scene.add(blackHoleRing)
    scene.add(blackHoleHalo)
    blackHoleCenter.parent = blackHole
    blackHoleHalo.parent = blackHole
    blackHoleRing.parent = blackHole
    blackHoleHalo.position.set(0, 0, 0)
    blackHoleRing.rotateX(Math.PI / 2)
    blackHoleRing.scale.set(1, 1, 0.3)
    blackHoleHaloMaterial.map = blackHoleGlow
    blackHoleHaloMaterial.alphaMap = blackHoleGlow

    const planetGeometry = new THREE.SphereGeometry(1, 30, 30)

    for (const myPlanet in planetList) {
        //PLANETS
        const realSize = planetList[myPlanet].size / 2 * fieldParams.fieldSize
        planetList[myPlanet].geometry = planetGeometry

        const planetMaterial = new THREE.MeshMatcapMaterial()
        planetMaterial.matcap = planetList[myPlanet].matcap
        planetList[myPlanet].material = planetMaterial

        const planetHolder = new THREE.Object3D()
        scene.add(planetHolder)
        planetList[myPlanet].object = planetHolder
        const planet = new THREE.Mesh(planetGeometry, planetMaterial)
        planet.scale.set(realSize,realSize,realSize)   
        planetList[myPlanet].planet = planet
        planetHolder.add(planet)

        const labelMat = new THREE.MeshBasicMaterial()
        labelMat.transparent = true
        labelMat.depthTest = true
        labelMat.color = new THREE.Color(0.9, 0.9, 0.9, 1)
        labelMat.map = planetList[myPlanet].label
        labelMat.opacity = textParams.defaultOpacity
        labelMat.alphaTest = 0.1
        const labelGeo = new THREE.PlaneGeometry(5, 1, 1, 1)
        const labelObj = new THREE.Mesh(labelGeo, labelMat)
        planetHolder.add(labelObj)
        labelObj.scale.set(textParams.defaultScale, textParams.defaultScale, textParams.defaultScale)
        planetList[myPlanet].labelObject = labelObj

        if (planetList[myPlanet].index == 30) {
            chainlinkHalo = blackHoleHalo.clone()
            chainlinkHalo.scale.set(0.257,0.257,0.257)
            planetHolder.add(chainlinkHalo)
        }

        //MOONS
        let moonObjects = []
        let moonOrbits = []
        let moonSpeeds = []
        let moonHeight = []
        let moonTargetHeight = []
        let moonTargetXZ = []
        let moonScale = []
        for (let i = 0; i < planetList[myPlanet].moonQuantity; i++) {
            const moonSize = realSize * 0.1 * (1 + Math.random())
            const moonGeometry = planetGeometry

            const moonMaterial = new THREE.MeshBasicMaterial({
                color: 'white'
            })
            moonMaterial.map = textureMoon

            const moon = new THREE.Mesh(moonGeometry, moonMaterial)
            moon.scale.set(moonSize, moonSize, moonSize)
            moonObjects.push(moon)
            planetHolder.add(moon)

            moon.rotation.set(Math.random() * 360, Math.random() * 360, Math.random() * 360)

            const planetSize = planetList[myPlanet].size * fieldParams.fieldSize
            const orbit = planetSize * 0.6 + (1 + i) * 0.2;
            moonOrbits.push(orbit)

            const orbitSpeed = planetList[myPlanet].orbitSpeed * (Math.random() - 0.5) * 15;
            moonSpeeds.push(orbitSpeed)

            const orbitHeight = (Math.random() - 0.5) * planetSize * 0.4
            moonHeight.push(orbitHeight)

            moonTargetHeight.push({
                y: 0
            })

            moonTargetXZ.push(new THREE.Vector2(0, 0))

            moonScale.push({
                x: moonSize
            })

        }
        planetList[myPlanet].moonObjects = moonObjects
        planetList[myPlanet].moonSpeeds = moonSpeeds
        planetList[myPlanet].moonOrbits = moonOrbits
        planetList[myPlanet].moonHeight = moonHeight
        planetList[myPlanet].moonTargetHeight = moonTargetHeight
        planetList[myPlanet].moonTargetXZ = moonTargetXZ
        planetList[myPlanet].moonScale = moonScale

    }
}

function UpdateAstro() {
    for (const myPlanet in planetList) {
        const timer = elapsedTime * planetList[myPlanet].orbitSpeed + planetList[myPlanet].orbitOffset
        const orbitRadius = planetList[myPlanet].orbitRadius
        const posX = orbitRadius * Math.cos(timer) + 0.5
        const posZ = orbitRadius * Math.sin(timer) + 0.5
        planetList[myPlanet].posX = posX
        planetList[myPlanet].posZ = posZ
        planetList[myPlanet].timer = timer
        planetList[myPlanet].object.position.set(
            fieldParams.fieldSize * (posX - 0.5),
            planetList[myPlanet].orbitHeight + animationParams.planetScale, -fieldParams.fieldSize * (posZ - 0.5)
        )

        const cameraVector = camera.position.clone()
        cameraVector.multiplyScalar(10)
        planetList[myPlanet].labelObject.lookAt(cameraVector)
        planetList[myPlanet].labelObject.position.set(0, planetList[myPlanet].size * fieldParams.fieldSize / 2 + 1.0, 0)

        for (let i = 0; i < planetList[myPlanet].moonQuantity; i++) {
            let skip = false
            if (lockedOnPlanet) {
                if (lockedOnPlanet.planet.id == planetList[myPlanet].planet.id) skip = true
            }
            if (previousLockedPlanet) {
                if (previousLockedPlanet.planet.id == planetList[myPlanet].planet.id) skip = true
            }
            const orbitSpeed = planetList[myPlanet].moonSpeeds[i]
            if (skip == false) {
                const orbit = planetList[myPlanet].moonOrbits[i]
                planetList[myPlanet].moonObjects[i].position.set(
                    orbit * Math.cos(elapsedTime * orbitSpeed),
                    planetList[myPlanet].moonHeight[i],
                    orbit * Math.sin(elapsedTime * orbitSpeed)
                )
            } else {
                let posX = planetList[myPlanet].moonTargetXZ[i].x
                let posZ = planetList[myPlanet].moonTargetXZ[i].y
                if (currentState == 2) {
                    const orbit = planetList[myPlanet].size * 0.5 * 0.8 * fieldParams.fieldSize
                    posX = orbit * Math.cos(-Math.PI * 0.5 - planetList[myPlanet].timer)
                    posZ = orbit * Math.sin(-Math.PI * 0.5 - planetList[myPlanet].timer)
                }
                planetList[myPlanet].moonObjects[i].position.set(
                    posX,
                    planetList[myPlanet].moonTargetHeight[i].y,
                    posZ
                )
            }
            const moonScale = planetList[myPlanet].moonScale[i].x
            planetList[myPlanet].moonObjects[i].scale.set(
                moonScale, moonScale, moonScale
            )

            planetList[myPlanet].moonObjects[i].rotateX(deltaTime * 0.3)
        }

        planetList[myPlanet].labelObject.material.opacity = cameraMotion.labelOpacity
    }

    blackHole.lookAt(camera.position)
    blackHoleRing.lookAt(camera.position.x, 0, camera.position.z)
    blackHoleRing.rotateX(33)
}
    
/*
MOUSE MOUSE MOUSE MOUSE MOUSE MOUSE MOUSE
*/

const mouse = new THREE.Vector2()
let currentIntersect = null
let lockedOnPlanet = null
let previousLockedPlanet = null
let latestClickedObject = null
let newClick = false

const pointsOfInterest = [{
    element: document.querySelector('.point-0')
}]

//Listeners

window.addEventListener('touchstart', (e) => {
    var touch = e.touches[0];
    mouse.x = touch.clientX / sizes.width * 2 - 1
    mouse.y = -(touch.clientY / sizes.height) * 2 + 1
    if (!startAnimationRunning && didFetch) newClick = true
    ProcessMouse()
    if (currentIntersect) {
        latestClickedObject = currentIntersect
    } else {
        latestClickedObject = null
    }
}, {passive: true})

var lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, {passive: true});

document.addEventListener('touchmove', function(event) {
    event.preventDefault();
});

window.addEventListener('mousedown', (e) => {
    mouse.x = e.clientX / sizes.width * 2 - 1
    mouse.y = -(e.clientY / sizes.height) * 2 + 1
    if (!startAnimationRunning && didFetch) newClick = true
    ProcessMouse()
    if (currentIntersect) {
        latestClickedObject = currentIntersect
    } else {
        latestClickedObject = null
    }
}, {passive: true})

//Raycasting
const raycaster = new THREE.Raycaster()

let hoveringBlackHole = false;

function ProcessMouse() {
    raycaster.setFromCamera(mouse, camera)

    const objectsToTest = []
    for (const myPlanet in planetList) {
        objectsToTest.push(planetList[myPlanet].planet)
    }
    objectsToTest.push(blackHoleCenter)
    const intersects = raycaster.intersectObjects(objectsToTest)

    if (intersects.length) {
        for (const myPlanet in planetList) {
            if (planetList[myPlanet].planet.id == intersects[0].object.id) currentIntersect = planetList[myPlanet]
        }
        if (blackHoleCenter.id == intersects[0].object.id) {
            hoveringBlackHole = true
        }
    } else {
        currentIntersect = null
        hoveringBlackHole = false
    }
}

/*
CAMERA ANIMATION CAMERA ANIMATION CAMERA ANIMATION CAMERA ANIMATION
*/

const cameraParams = {
    lockHeight: 0.8,
    lockFOV: 35, // review camera-updates
    lockRadius: 30,
    planetLookHeight: 10, //overriden in mobiledetect
    lockPlanetHeight: 11.0,
    lockOffsetTime: 2.8,
    defaultHeight: 0, //overriden in mobiledetect
    defaultZ: 0, //overriden in mobiledetect
    startPositionLenght: null,
    blackHoleLookHeight: 10,
    blackHoleLockHeight: 15,
    defaultFOV: 25, // review camera-updates
    defaultLook: new THREE.Vector3(0, -5, 0) //overriden in mobiledetect
}

/*
RENDERING RENDERING RENDERING RENDERING RENDERING RENDERING
*/

const camUpdates = {
    onethird: 1.3,
    xPos: 64 + '%' // review UpdateCSSDescription-Desktop
}

const sizes = {
    width: canvasParent.clientWidth,
    height: canvasParent.clientHeight
}

let isMobile = false

function MobileDetection() {
    if (sizes.height > sizes.width) {
        cameraParams.defaultZ = 108
        cameraParams.defaultHeight = 56
        cameraParams.defaultLook = new THREE.Vector3(0, RELAY.mobileYcenter, 0) // review camera-updates mobile vertical position
        cameraParams.planetLookHeight = 10, // review camera-updates mobile vertical position
        camUpdates.xPos = 47 + '%' // review UpdateCSSDescription-Mobile
        isMobile = true
    } else {
        cameraParams.defaultZ = 90
        cameraParams.defaultHeight = 35
        cameraParams.defaultLook = new THREE.Vector3(0, -5, 0) // review camera-updates mobile vertical position
        cameraParams.planetLookHeight = 10, // review camera-updates mobile vertical position
        camUpdates.xPos = 64 + '%' // review UpdateCSSDescription-Mobile
        isMobile = false
    }
}

MobileDetection()

let didResize = false

new ResizeObserver(OnResize).observe(canvasParent)

function OnResize() {
 // Update sizes

 sizes.width = canvasParent.clientWidth
 sizes.height = canvasParent.clientHeight

 MobileDetection()

 // Update camera
 camera.aspect = sizes.width / sizes.height
 camera.setViewOffset( sizes.width * camUpdates.onethird - sizes.width * (camUpdates.onethird - 1) * isMobile, sizes.height, 0, 0, sizes.width, sizes.height );
 camera.updateProjectionMatrix()

 // Update renderer
 renderer.setSize(sizes.width, sizes.height)
 renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
 didResize = true
}

// Base camera
const camera = new THREE.PerspectiveCamera(cameraParams.defaultFOV, sizes.width / sizes.height, 0.1, 500)
camera.setViewOffset( sizes.width * camUpdates.onethird - sizes.width * (camUpdates.onethird - 1) * isMobile, 
                     sizes.height, 
                    0, 0, sizes.width, sizes.height );
camera.position.x = 0
camera.position.y = cameraParams.defaultHeight
camera.position.z = cameraParams.defaultZ
cameraParams.startPositionLenght = camera.position.length()
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target = cameraParams.defaultLook
controls.enableDamping = true
controls.minPolarAngle = 0.08
controls.maxPolarAngle = Math.PI - 0.08
controls.enablePan = false
controls.dampingFactor = 0.04
controls.enableZoom = false 


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: false
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

let currentState = 0
const cameraMotion = {
    currentPosition: new THREE.Vector3(0, 0, 0),
    currentFOV: 0,
    timer: 0,
    zoomInDuration: 4,
    lookTarget: new THREE.Vector3(0, 0, 0),
    uiOpacity: 0,
    labelOpacity: 0,
    blackHoleLockHeight: 0
}

gsap.registerPlugin(CustomEase);

CustomEase.create("superSmooth", "M0,0 C0.25,-0.01 0.425,0.414 0.526,0.606 0.646,0.836 0.818,1.001 1,1 ")

CustomEase.create("custom", "M0,0 C0.25,-0.01 0.425,0.414 0.526,0.606 0.646,0.836 0.818,1.001 1,1 ")

gsap.defaults({
    ease: "superSmooth",
    duration: 1.7,
    delay: 0.0
});

let stTextContainer, stTextTitle, stTextDescription = null

function CameraTransition(target) {
    if (target == 1) {
        if (currentState == 2) {
            gsap.to(lockedOnPlanet, {
                orbitHeight: lockedOnPlanet.originalHeight
            })
            for (let i = 0; i < lockedOnPlanet.moonQuantity; i++) {
                gsap.to(lockedOnPlanet.moonScale[i], {
                    duration: 1,
                    delay: 0,
                    x: 0,
                    onComplete: clearPrevious
                })
                gsap.to(lockedOnPlanet.moonScale[i], {
                    duration: 0.7,
                    delay: 1,
                    x: lockedOnPlanet.size * fieldParams.fieldSize * 0.05 * (1 + Math.random())
                })
                var element = lockedOnPlanet.moonTargetHeight[i];
                gsap.to(element, {
                    duration: 1.5,
                    y: 0
                })
            }
            previousLockedPlanet = lockedOnPlanet
        }
        lockedOnPlanet = latestClickedObject
        controls.enabled = false
        cameraMotion.currentPosition = camera.position.clone()
        cameraMotion.currentFOV = camera.fov
        cameraMotion.UIColor = new THREE.Color(0, 0, 0, 0)
        cameraMotion.timer = 0
        cameraMotion.currentRadius = camera.position.clone()
        cameraMotion.currentRadius.projectOnPlane(new THREE.Vector3(0, 1, 0))
        cameraMotion.currentRadius = cameraMotion.currentRadius.length()
        cameraMotion.lookTarget.set(0, controls.target.y, 0)
        const targetRadius = lockedOnPlanet.orbitRadius * fieldParams.fieldSize + cameraParams.lockRadius

        let projectedVector = camera.position.clone()
        projectedVector.projectOnPlane(new THREE.Vector3(0, 1, 0))
        let currentAngle = projectedVector.angleTo(new THREE.Vector3(1, 0, 0))
        if (camera.position.z > 0) currentAngle = 2 * Math.PI - currentAngle
        let targetAngle = (elapsedTime + cameraParams.lockOffsetTime / (lockedOnPlanet.orbitSpeed * lockedOnPlanet.orbitRadius * fieldParams.fieldSize)) * lockedOnPlanet.orbitSpeed + lockedOnPlanet.orbitOffset
        targetAngle = reduceAngle(targetAngle)
        if (Math.abs(currentAngle - targetAngle) > Math.PI) {
            if (targetAngle < currentAngle) targetAngle += 2 * Math.PI
            else if (currentAngle < targetAngle) currentAngle += 2 * Math.PI
        }

        cameraMotion.currentAngle = currentAngle
        lockedOnPlanet.originalHeight = lockedOnPlanet.orbitHeight
        gsap.to(cameraMotion, {
            currentAngle: targetAngle
        })
        gsap.to(cameraMotion, {
            currentRadius: targetRadius
        })
        gsap.to(lockedOnPlanet, {
            delay: 0,
            orbitHeight: cameraParams.lockPlanetHeight
        })
        cameraMotion.currentPosition.y = camera.position.y
        gsap.to(cameraMotion.currentPosition, {
            y: cameraParams.lockHeight
        })
        gsap.to(cameraMotion, {
            currentFOV: cameraParams.lockFOV
        })
        gsap.to(cameraMotion, {
            timer: cameraMotion.zoomInDuration
        })
        gsap.to(cameraMotion.lookTarget, {
            y: cameraParams.planetLookHeight
        })

        for (let i = 0; i < lockedOnPlanet.moonQuantity; i++) {
            lockedOnPlanet.moonTargetHeight[i].y = lockedOnPlanet.moonHeight[i]
            var element = lockedOnPlanet.moonTargetHeight[i];
            gsap.to(element, {
                duration: 1.5,
                y: -2.5 - i * 1.8
            })

            lockedOnPlanet.moonTargetXZ[i].x = lockedOnPlanet.moonObjects[i].position.x
            lockedOnPlanet.moonTargetXZ[i].y = lockedOnPlanet.moonObjects[i].position.z
            const orbit = lockedOnPlanet.size * 0.5 * 0.8 * fieldParams.fieldSize
            const posX = orbit * Math.cos(-Math.PI * 0.5 - lockedOnPlanet.timer)
            const posZ = orbit * Math.sin(-Math.PI * 0.5 - lockedOnPlanet.timer)

            gsap.to(lockedOnPlanet.moonTargetXZ[i], {
                delay: 0.7,
                duration: 1,
                x: posX
            })
            gsap.to(lockedOnPlanet.moonTargetXZ[i], {
                delay: 0.7,
                duration: 1,
                y: posZ
            })
        }
        gsap.killTweensOf(cameraMotion, "uiOpacity");
        cameraMotion.uiOpacity = 0
        gsap.to(cameraMotion, {
            delay: 1.3,
            uiOpacity: 1
        })
        gsap.to(cameraMotion, {
            delay: 0,
            duration: 1,
            labelOpacity: 0
        })

        gsap.killTweensOf(fieldParams, "noise1");
        gsap.to(fieldParams, {
            duration: 9,
            noise1: (20 + lockedOnPlanet.index * 0.7)
        })
        gsap.to(fieldColor, {
            duration: 2,
            warpMultiplier: 0
        })
        gsap.to(fieldParams, {
            duration: 2,
            spiralSize: 3
        })

        const insideC = lockedOnPlanet.insideColor
        const outsideC = lockedOnPlanet.outsideColor
        gsap.to(fieldColor.insideColor, {
            delay: 0,
            duration: 2,
            r: insideC.r,
            g: insideC.g,
            b: insideC.b
        })
        gsap.to(fieldColor.outsideColor, {
            delay: 0,
            duration: 3,
            r: outsideC.r,
            g: outsideC.g,
            b: outsideC.b
        })

        updateCSSData()
        RELAY.switchOff(isMobile) // review relay-switch OFF
        currentState = 1
        return
    }
    if (currentState == 1 && target == 2) {
        currentState = 2
        return
    }
    if (target == 3) {
        if (currentState == 2) {
            for (let i = 0; i < lockedOnPlanet.moonQuantity; i++) {
                gsap.to(lockedOnPlanet.moonScale[i], {
                    duration: 1,
                    delay: 0,
                    x: 0
                })
                gsap.to(lockedOnPlanet.moonScale[i], {
                    duration: 1.5,
                    delay: 1.2,
                    x: lockedOnPlanet.size * fieldParams.fieldSize * 0.05 * (1 + Math.random()),
                    onStart: clearPrevious
                })

                lockedOnPlanet.moonTargetXZ[i].x = lockedOnPlanet.moonObjects[i].position.x
                lockedOnPlanet.moonTargetXZ[i].y = lockedOnPlanet.moonObjects[i].position.z
                gsap.to(lockedOnPlanet.moonTargetXZ[i], {
                    delay: i * 0.3,
                    duration: 1 - i * 0.1,
                    x: 0,
                    y: 0
                })
            }
            previousLockedPlanet = lockedOnPlanet
            lockedOnPlanet = null
        }
        let projectedVector = camera.position.clone()
        projectedVector.projectOnPlane(new THREE.Vector3(0, 1, 0))
        cameraMotion.currentAngle = projectedVector.angleTo(new THREE.Vector3(1, 0, 0))
        cameraMotion.UIColor = new THREE.Color(0, 0, 0, 0)
        gsap.to(previousLockedPlanet, {
            orbitHeight: previousLockedPlanet.originalHeight
        })
        cameraMotion.timer = 0
        cameraMotion.lookTarget.setY(controls.target.y)
        gsap.to(cameraMotion, {
            timer: cameraMotion.zoomInDuration
        })
        let targetPosition = camera.position.clone()
        targetPosition.normalize()
        targetPosition = targetPosition.multiplyScalar(cameraParams.startPositionLenght)
        targetPosition.setY(cameraParams.defaultHeight)
        gsap.to(cameraMotion.currentPosition, {
            duration: 1.7,
            delay: 0,
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z
        })
        gsap.to(cameraMotion.lookTarget, {
            duration: 1.7,
            delay: 0,
            y: cameraParams.defaultLook.y
        })
        gsap.to(cameraMotion, {
            duration: 1.7,
            delay: 0,
            currentFOV: cameraParams.defaultFOV
        })

        gsap.killTweensOf(cameraMotion, "uiOpacity");
        gsap.to(cameraMotion, {
            delay: 0,
            duration: 1,
            uiOpacity: 0
        })
        gsap.to(cameraMotion, {
            delay: 1,
            duration: 0.7,
            labelOpacity: 1
        })
        gsap.killTweensOf(fieldParams, "noise1");
        gsap.to(fieldParams, {
            noise1: 0.8
        })

        const insideC = fieldColor.startInsideColor
        const outsideC = fieldColor.startOutsideColor
        gsap.to(fieldColor.insideColor, {
            delay: 0,
            duration: 1.0,
            r: insideC.r,
            g: insideC.g,
            b: insideC.b
        })
        gsap.to(fieldColor.outsideColor, {
            delay: 0,
            duration: 1.0,
            r: outsideC.r,
            g: outsideC.g,
            b: outsideC.b
        })
        gsap.to(fieldColor, {
            duration: 5,
            warpMultiplier: RELAY.fieldColors.warpMultiplier
        })
        gsap.to(fieldParams, {
            duration: 2,
            spiralSize: 11.8
        })

        currentState = 3
        return
    }
    if (target == 0) {
        controls.enabled = true
        previousLockedPlanet = lockedOnPlanet
        lockedOnPlanet = null
        currentState = 0
        gsap.killTweensOf(cameraMotion, "labelOpacity")
        RELAY.switchOn(isMobile) // review relay-switch ON
        return
    }
    if (target == 5) {
        let projectedVector = camera.position.clone()
        projectedVector.projectOnPlane(new THREE.Vector3(0, 1, 0))
        cameraMotion.currentAngle = projectedVector.angleTo(new THREE.Vector3(1, 0, 0))
        let targetPosition = camera.position.clone()
        projectedVector.normalize()
        let target = 110
        if (isMobile) target = 150
        targetPosition = projectedVector.multiplyScalar(target)
        targetPosition.setY(cameraParams.defaultHeight - 10)
        cameraMotion.currentPosition = camera.position.clone()
        gsap.to(cameraMotion.currentPosition, {
            duration: 1.7,
            delay: 0,
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
            onComplete: SetBlackHoleLockedState
        })

        cameraMotion.lookTarget = controls.target.clone()
        cameraMotion.blackHoleLockHeight = blackHole.position.y
        gsap.to(cameraMotion.lookTarget, {
            y: cameraParams.blackHoleLookHeight
        })

        let target2 = 21
        if (isMobile) target2 = 27
        gsap.to(cameraMotion, {
            blackHoleLockHeight: target2
        })

        gsap.killTweensOf(stTextContainer.style, "opacity")
        gsap.killTweensOf(stTextTitle.style, "opacity")
        gsap.killTweensOf(stTextDescription.style, "opacity")
        gsap.to(stTextContainer.style, {
            duration: 0.5,
            delay: 1.2,
            ease: "power1",
            opacity: 1
        })
        stTextContainer.style.display = "inline-flex"

        currentState = 5
        newClick = false

        RELAY.switchOff(isMobile) // review relay-switch-blackhole OFF
    }
    if (target == 6 && currentState == 7) {
        gsap.to(stTextContainer.style, {
            duration: 0.3,
            delay: 0,
            ease: "power1",
            opacity: 0,
            onComplete: HideTitleField
        })
        gsap.to(cameraMotion.lookTarget, {
            y: 0
        })
        gsap.to(cameraMotion, {
            blackHoleLockHeight: fieldParams.blackHoleHeight,
            onComplete: returnToStateZero
        })
        controls.enabled = true
        currentState = 6
        RELAY.switchOn(isMobile) // review relay-switch-blackhole ON
    }
}

function SetBlackHoleLockedState() {
    currentState = 7
}

function returnToStateZero() {
    currentState = 0
}

function reduceAngle(angle) {
    while (angle > 2 * Math.PI) angle -= 2 * Math.PI
    while (angle < -2 * Math.PI) angle += 2 * Math.PI
    return angle
}

function clearPrevious() {
    previousLockedPlanet = null
}

function CameraState() {
    if (currentState == 0) { //free orbit
        lockedOnPlanet = null
        previousLockedPlanet = null
        if (newClick) {
            newClick = false
            if (latestClickedObject) CameraTransition(1)
            else if (hoveringBlackHole) CameraTransition(5)
        }
        return
    }
    if (currentState == 1) { //moving to planet
        cameraMotion.currentPosition.x = cameraMotion.currentRadius * Math.cos(cameraMotion.currentAngle)
        cameraMotion.currentPosition.z = -cameraMotion.currentRadius * Math.sin(cameraMotion.currentAngle)
        camera.position.set(cameraMotion.currentPosition.x, cameraMotion.currentPosition.y, cameraMotion.currentPosition.z)
        controls.target = new THREE.Vector3(cameraMotion.lookTarget.x, cameraMotion.lookTarget.y, cameraMotion.lookTarget.z)
        camera.fov = cameraMotion.currentFOV
        camera.updateProjectionMatrix()
        //UIobject.material.color = cameraMotion.UIColor
        elapsedTime -= deltaTime
        if (newClick) newClick = false
        if (cameraMotion.timer >= cameraMotion.zoomInDuration) CameraTransition(2)
    }
    if (currentState == 2) { //tracking planet
        if (newClick) {
            newClick = false
            if (latestClickedObject && latestClickedObject.planet.id != lockedOnPlanet.planet.id) CameraTransition(1)
            if (!latestClickedObject) CameraTransition(3)
            return
        }
        const timer = lockedOnPlanet.orbitSpeed * (elapsedTime + cameraParams.lockOffsetTime / (lockedOnPlanet.orbitSpeed * lockedOnPlanet.orbitRadius * fieldParams.fieldSize)) + lockedOnPlanet.orbitOffset

        cameraMotion.currentPosition.x = cameraMotion.currentRadius * Math.cos(timer)
        cameraMotion.currentPosition.z = -cameraMotion.currentRadius * Math.sin(timer)
        camera.position.set(cameraMotion.currentPosition.x, cameraMotion.currentPosition.y, cameraMotion.currentPosition.z)
        return
    }
    if (currentState == 3) { //moving to orbit
        camera.position.set(cameraMotion.currentPosition.x, cameraMotion.currentPosition.y, cameraMotion.currentPosition.z)
        controls.target = new THREE.Vector3(cameraMotion.lookTarget.x, cameraMotion.lookTarget.y, cameraMotion.lookTarget.z)
        camera.fov = cameraMotion.currentFOV
        camera.updateProjectionMatrix()
        if (cameraMotion.timer >= cameraMotion.zoomInDuration) CameraTransition(0)
    }
    if (currentState == 5) { //locking on black hole
        camera.position.set(cameraMotion.currentPosition.x, cameraMotion.currentPosition.y, cameraMotion.currentPosition.z)
        controls.target = new THREE.Vector3(cameraMotion.lookTarget.x, cameraMotion.lookTarget.y, cameraMotion.lookTarget.z)
        blackHole.position.set(0, cameraMotion.blackHoleLockHeight, 0)
        if (newClick) {
            newClick = false
        } 
    }
    if (currentState == 6) { //coming back from black hole
        controls.target = new THREE.Vector3(cameraMotion.lookTarget.x, cameraMotion.lookTarget.y, cameraMotion.lookTarget.z)
        blackHole.position.set(0, cameraMotion.blackHoleLockHeight, 0)
        if (newClick) {
            newClick = false
        } 
    }
    if (currentState == 7) { //on black hole
        if (newClick) {
            CameraTransition(6)
        }
    }
}

const clock = new THREE.Clock(true)
let elapsedTime = 0
let deltaTime = 0
let timeModifier = 1
let count = 0

InitLines()
InitAstro()

let textField = null
let textTitle = null
let textDescription = null
let textPrice = null
let textMoon1 = null
let textMoon1Title = null
let textMoon1Price = null
let textMoon2 = null
let textMoon2Title = null
let textMoon2Price = null
let textMoon3 = null
let textMoon3Title = null
let textMoon3Price = null
let textMoon4 = null
let textMoon4Title = null
let textMoon4Price = null
let textChainlinkExtra = null
let textSuiExtra = null

createCSSDescription()

function createCSSDescription() {

    textField = document.createElement('div');
    textField.classList.add('three-planet-container');
    document.body.appendChild(textField);

    textTitle = document.createElement('div');
    textTitle.classList.add('three-planet-title');
    textTitle.innerHTML = "Ethereum";
    textField.appendChild(textTitle);

    textDescription = document.createElement('div');
    textDescription.classList.add('three-planet-description');
    textDescription.innerHTML = "24h % token variation";
    textField.appendChild(textDescription);

    textPrice = document.createElement('div');
    textPrice.classList.add('three-planet-price')
    textField.appendChild(textPrice);

    textChainlinkExtra = document.createElement('div');
    textChainlinkExtra.classList.add('three-chainlink-description');
    //textField.appendChild(textChainlinkExtra);
    const ChainlinkText = document.getElementsByClassName('webflow-chainlink-description')[0]
    if (ChainlinkText) textChainlinkExtra.innerHTML = ChainlinkText.innerHTML
    else textChainlinkExtra.innerHTML = "<br>BtcKw will leverage Chainlink services such as Off-Chain Reporting to validate the results of decentralized, trust-minimized queries. <br><br> Chainlink is building a robust ecosystem including top projects like Krypton, Truflation, dClimate, and ReputationDAO";

    textSuiExtra = document.createElement('div');
    textSuiExtra.classList.add('three-chainlink-description');
    //textField.appendChild(textSuiExtra);
    const SuiText = document.getElementsByClassName('webflow-sui-description')[0]
    if (SuiText) textSuiExtra.innerHTML = SuiText.innerHTML
    else textSuiExtra.innerHTML = "The first permissionless Layer 1 blockchain designed to enable developers to build experiences that cater to the next billion users in Web3."

    textMoon1 = document.createElement('div');
    textMoon1.classList.add('three-moon-container');
    document.body.appendChild(textMoon1);

    textMoon1Title = document.createElement('div');
    textMoon1Title.classList.add('three-moon-title');
    textMoon1.appendChild(textMoon1Title);

    textMoon1Price = document.createElement('div');
    textMoon1Price.classList.add('three-moon-price');
    textMoon1.appendChild(textMoon1Price);

    textMoon2 = document.createElement('div');
    textMoon2.classList.add('three-moon-container');
    document.body.appendChild(textMoon2);

    textMoon2Title = document.createElement('div');
    textMoon2Title.classList.add('three-moon-title');
    textMoon2.appendChild(textMoon2Title);

    textMoon2Price = document.createElement('div');
    textMoon2Price.classList.add('three-moon-price');
    textMoon2.appendChild(textMoon2Price);

    textMoon3 = document.createElement('div');
    textMoon3.classList.add('three-moon-container');
    document.body.appendChild(textMoon3);

    textMoon3Title = document.createElement('div');
    textMoon3Title.classList.add('three-moon-title');
    textMoon3.appendChild(textMoon3Title);

    textMoon3Price = document.createElement('div');
    textMoon3Price.classList.add('three-moon-price');
    textMoon3.appendChild(textMoon3Price);

    textMoon4 = document.createElement('div');
    textMoon4.classList.add('three-moon-container');
    document.body.appendChild(textMoon4);

    textMoon4Title = document.createElement('div');
    textMoon4Title.classList.add('three-moon-title');
    textMoon4.appendChild(textMoon4Title);

    textMoon4Price = document.createElement('div');
    textMoon4Price.classList.add('three-moon-price');
    textMoon4.appendChild(textMoon4Price);

    CreateSTTextFields()
}

function CreateSTTextFields() {
    let target3 = 38
    if (isMobile) target3 = 32
    
    stTextContainer = document.createElement('div')
    stTextContainer.classList.add('three-st-container')
    document.body.appendChild(stTextContainer)
    stTextContainer.style.opacity = 0
    stTextContainer.style.display = "none"

    stTextTitle = document.createElement('div')
    stTextTitle.classList.add('three-st-title')
    stTextContainer.appendChild(stTextTitle)
    const STTitle = document.getElementsByClassName('webflow-st-title')[0]
    if (STTitle) stTextTitle.innerHTML = STTitle.innerHTML
    else stTextTitle.innerHTML = "Space and Time."

    stTextDescription = document.createElement('div')
    stTextDescription.classList.add('three-st-description')
    stTextContainer.appendChild(stTextDescription)
    const STText = document.getElementsByClassName('webflow-st-description')[0]
    if (STText) stTextDescription.innerHTML = STText.innerHTML
    else stTextDescription.innerHTML = "Enabling lightspeed-fast analytics at enterprise scale"
}

function UpdateCSSDescription() {
    if (lockedOnPlanet) {
        if (currentState == 1 || didResize) {
            didResize = false
            let screenPosition = lockedOnPlanet.object.position.clone()
            screenPosition.project(camera)
            
            textField.style.left = camUpdates.xPos
            textField.style.top = (-screenPosition.y + 1) * 0.5 * sizes.height + 'px'

            if (textChainlinkExtra.parentElement === textField) textField.removeChild(textChainlinkExtra);
            if (textSuiExtra.parentElement === textField) textField.removeChild(textSuiExtra);

            if (lockedOnPlanet.index == 30) {
                if (textChainlinkExtra.parentElement != textField) textField.appendChild(textChainlinkExtra);
                textField.style.transform = "translate(0,-15%)";
                textField.style.display = "inline-flex"
                textDescription.style.display = "inline-flex"
                textPrice.style.display = "inline-flex"
            } else if (lockedOnPlanet.index == 25) {
                if (textSuiExtra.parentElement != textField) textField.appendChild(textSuiExtra);
                textField.style.transform = "translate(0,-15%)";
                textField.style.display = "inline-flex"
                textDescription.style.display = "none"
                textPrice.style.display = "none"
                textMoon1Title.innerHTML = RELAY.textInSUIMoon
                textMoon1Price.style.display = "none"
                //textSuiMoon.style.display = "inline-flex"
            } else {
                textField.style.transform = "translate(0,-40%)";
                textField.style.display = "inline-flex"
                textDescription.style.display = "inline-flex"
                textPrice.style.display = "inline-flex"
            }

            if (lockedOnPlanet.moonQuantity > 0) {
                let screenMoon1Position = new THREE.Vector3(0, 0, 0)
                lockedOnPlanet.moonObjects[0].getWorldPosition(screenMoon1Position)
                screenMoon1Position.project(camera)
                textMoon1.style.left = camUpdates.xPos
                textMoon1.style.top = (-screenMoon1Position.y + 1) * 0.5 * sizes.height + 'px'
                textMoon1.style.display = "inline-flex"
                if (lockedOnPlanet.index != 25) textMoon1Price.style.display = "inline-flex"
            } else {
                textMoon1.style.display = "none"
            }

            if (lockedOnPlanet.moonQuantity > 1) {
                let screenMoon2Position = new THREE.Vector3(0, 0, 0)
                lockedOnPlanet.moonObjects[1].getWorldPosition(screenMoon2Position)
                screenMoon2Position.project(camera)
                textMoon2.style.left = camUpdates.xPos
                textMoon2.style.top = (-screenMoon2Position.y + 1) * 0.5 * sizes.height + 'px'
                textMoon2.style.display = "inline-flex"
            } else {
                textMoon2.style.display = "none"
            }

            if (lockedOnPlanet.moonQuantity > 2) {
                let screenMoon3Position = new THREE.Vector3(0, 0, 0)
                lockedOnPlanet.moonObjects[2].getWorldPosition(screenMoon3Position)
                screenMoon3Position.project(camera)
                textMoon3.style.left = camUpdates.xPos
                textMoon3.style.top = (-screenMoon3Position.y + 1) * 0.5 * sizes.height + 'px'
                textMoon3.style.display = "inline-flex"
            } else {
                textMoon3.style.display = "none"
            }

            if (lockedOnPlanet.moonQuantity > 3) {
                let screenMoon4Position = new THREE.Vector3(0, 0, 0)
                lockedOnPlanet.moonObjects[3].getWorldPosition(screenMoon4Position)
                screenMoon4Position.project(camera)
                textMoon4.style.left = camUpdates.xPos
                textMoon4.style.top = (-screenMoon4Position.y + 1) * 0.5 * sizes.height + 'px'
                textMoon4.style.display = "inline-flex"
            } else {
                textMoon4.style.display = "none"
            }
        }
    } else if (currentState == 5 || currentState == 7) {
        stTextContainer.style.left = sizes.width * 0.5 * camUpdates.onethird + 'px'
        stTextContainer.style.top = sizes.height * 0.42 + 'px' // review three-st-container position fix
        if (isMobile) stTextContainer.style.left = sizes.width * 0.5 + 'px'
        if (isMobile) stTextContainer.style.top = sizes.height * 0.35 + 'px' // review three-st-container position fix
        
    } 
    else {
        if (textChainlinkExtra.parentElement === textField) textField.removeChild(textChainlinkExtra);
        if (textSuiExtra.parentElement === textField) textField.removeChild(textSuiExtra);
        textField.style.display = "none"
        textMoon1.style.display = "none"
        textMoon2.style.display = "none"
        textMoon3.style.display = "none"
        textMoon4.style.display = "none"
    }

    textField.style.opacity = cameraMotion.uiOpacity;
    textMoon1.style.opacity = cameraMotion.uiOpacity;
    textMoon2.style.opacity = cameraMotion.uiOpacity;
    textMoon3.style.opacity = cameraMotion.uiOpacity;
    textMoon4.style.opacity = cameraMotion.uiOpacity;
}

fetchAPI()

let coinValues = null
let didFetch = false

/*/'https://ancient-garden-81017.herokuapp.com/arquivo.json'\*/

async function fetchAPI() {
    let src = "arquivo.json";

    let res = await fetch(url);

    if (res.ok) {

        let json = await res.json();

        didFetch = true
        coinValues = json

        gsap.to(cameraMotion, {
            delay: 0,
            duration: 1,
            labelOpacity: 1
        })

        return json;
    } else {
        return `HTTP error: ${res.status}`;
    }
}

function updateCSSData() {
    if (didFetch) {
        let variation = 0
        let symbol = 0

        let index = lockedOnPlanet.index
        if (coinValues[index][0]) {
            textTitle.innerHTML = coinValues[index][0].name;
            if (index == 10) textTitle.innerHTML = "Binance"
            if (index == 25) textTitle.innerHTML = "Sui"
            variation = coinValues[index][0].quote.USD.percent_change_24h.toFixed(1)
            if (variation > 0) symbol = "&#x2191;"
            else symbol = "&#x2193;"
            textPrice.innerHTML = "$" + coinValues[index][0].quote.USD.price.toFixed(1) + "&nbsp;" + symbol + Math.abs(variation) + "%"
        } else {
            textTitle.innerHTML = "-"
            textPrice.innerHTML = "data unavailable"
        }

        index++
        if (lockedOnPlanet.moonQuantity < 1) return

        if (coinValues[index][0]) {
            if (lockedOnPlanet.index != 25) textMoon1Title.innerHTML = coinValues[index][0].name;
            variation = coinValues[index][0].quote.USD.percent_change_24h.toFixed(1)
            if (variation > 0) symbol = "&#x2191;"
            else symbol = "&#x2193;"
            let price = getPrice(coinValues[index][0].quote.USD.price)
            textMoon1Price.innerHTML = "$" + price + "&nbsp;" + symbol + Math.abs(variation) + "%"
        } else {
            textMoon1Title.innerHTML = "-"
            textMoon1Price.innerHTML = "data unavailable"
        }

        index++
        if (lockedOnPlanet.moonQuantity < 2) return

        if (coinValues[index][0]) {
            textMoon2Title.innerHTML = coinValues[index][0].name;
            variation = coinValues[index][0].quote.USD.percent_change_24h.toFixed(1)
            if (variation > 0) symbol = "&#x2191;"
            else symbol = "&#x2193;"
            let price = getPrice(coinValues[index][0].quote.USD.price)
            textMoon2Price.innerHTML = "$" + price + "&nbsp;" + symbol + Math.abs(variation) + "%"
        } else {
            textMoon2Title.innerHTML = "-"
            textMoon2Price.innerHTML = "data unavailable"
        }

        index++
        if (lockedOnPlanet.moonQuantity < 3) return

        if (coinValues[index][0]) {
            textMoon3Title.innerHTML = coinValues[index][0].name;
            variation = coinValues[index][0].quote.USD.percent_change_24h.toFixed(1)
            if (variation > 0) symbol = "&#x2191;"
            else symbol = "&#x2193;"
            let price = getPrice(coinValues[index][0].quote.USD.price)
            textMoon3Price.innerHTML = "$" + price + "&nbsp;" + symbol + Math.abs(variation) + "%"
        } else {
            textMoon3Title.innerHTML = "-"
            textMoon3Price.innerHTML = "data unavailable"
        }

        index++
        if (lockedOnPlanet.moonQuantity < 4) return

        if (coinValues[index][0]) {
            textMoon4Title.innerHTML = coinValues[index][0].name;
            variation = coinValues[index][0].quote.USD.percent_change_24h.toFixed(1)
            if (variation > 0) symbol = "&#x2191;"
            else symbol = "&#x2193;"
            let price = getPrice(coinValues[index][0].quote.USD.price)
            textMoon4Price.innerHTML = "$" + price + "&nbsp;" + symbol + Math.abs(variation) + "%"
        } else {
            textMoon4Title.innerHTML = "-"
            textMoon4Price.innerHTML = "data unavailable"
        }
    }
}

function getPrice(priceString) {
    let price = 0
    price = priceString.toFixed(1)
    if (price <= 0.1) {
        price = priceString.toFixed(2)
        if (price <= 0.01) {
            price = priceString.toFixed(3)
            if (price <= 0.001) {
                price = priceString.toFixed(4)
                if (price <= 0.0001) {
                    price = priceString.toFixed(5)
                }
            }
        }
    }
    return price
}

var fps = []
let criticalFPS = 0

fpsInit()

function fpsInit() {
    for (let index = 0; index < 60; index++) {
        fps.push(80)
    }
}

function fpsLogger() {
    if (criticalFPS < 5) {
        fps.push(1 / deltaTime)
        fps.shift()

        const sum = fps.reduce((a, b) => a + b, 0);
        const avg = (sum / fps.length) || 0;

        if (avg < 40) {
            criticalFPS++
            fpsInit()
        }
    }
}

let startAnimationRunning = false // review no-intro

const animationParams = {
    planetScale: 1,
    ringScale: 1,
    blackHoleY: 0,
    spiralSize: 0
}

RELAY.blackholeXposition(isMobile)

function HideTitleField() {
    stTextContainer.style.display = "none"
}

const tick = () => {

    deltaTime = clock.getDelta()
    elapsedTime += deltaTime


    if (destroyLines) {
        InitLines()
        destroyLines = false;
    }

    UpdateAstro()
    UpdateLines()
    CameraState()
    UpdateCSSDescription()
    fpsLogger()
    controls.update()

    const camPosY = Math.abs(camera.position.y * 0.01)
    blackHoleRing.scale.set(1, 1, Math.max(Math.min(camPosY*2, 0.4), 0.04))
    blackHoleRing.material.opacity = Math.min(0.6, Math.max(0.2, camPosY*2))
    chainlinkHalo.lookAt(camera.position)

    // Render

    renderer.render(scene, camera)

    if (count <= 0 && criticalFPS < 1) {
        for (const myPlanet in planetList) {
            planetList[myPlanet].object.visible = false
            planetList[myPlanet].labelObject.visible = false
            for (let i = 0; i < planetList[myPlanet].moonQuantity; i++) {
                planetList[myPlanet].moonObjects[i].visible = false
            }
        }
        blackHoleCenter.visible = false
        blackHoleHalo.visible = false
        cubeCamera1.update(renderer, scene);
        cubeRenderTarget1.needsUpdate = true
        blackHoleTorusMaterialReflex.envMap = cubeRenderTarget1.texture;
        for (const myPlanet in planetList) {
            planetList[myPlanet].object.visible = true
            planetList[myPlanet].labelObject.visible = true
            for (let i = 0; i < planetList[myPlanet].moonQuantity; i++) {
                planetList[myPlanet].moonObjects[i].visible = true
            }
        }
        blackHoleCenter.visible = true
        blackHoleHalo.visible = true
        count++
    } else count = 0

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()