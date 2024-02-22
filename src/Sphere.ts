import {
    BoxGeometry,
    BufferGeometry,
    Vector3,
    MeshBasicMaterial,
    Mesh,
    Color,
    SphereGeometry
} from "three";

type Options = {
    size?: number;
    color?: Color;
    position?: Vector3;
    orientation?: Vector3
}

type Vector = {
    x: number;
    y: number;
    z: number
}

class Sphere {
    obj: Mesh & any

    constructor(options?: Options) {
        let orientation = {
            x: options?.orientation?.x || 0,
            y: options?.orientation?.y || 0,
            z: options?.orientation?.z || 0
        }
        let size = options?.size || 4
        let position = {
            x: options?.position?.x || 0,
            y: options?.position?.y || 0,
            z: options?.position?.z || 0
        }
        const geometry = new SphereGeometry(size)
        const material = new MeshBasicMaterial({ color: options?.color || Color.NAMES.white })
        const basePart = <Mesh & { position, rotation }>new Mesh(geometry, material)
        basePart.position.x = position.x
        basePart.position.y = position.y
        basePart.position.z = position.z
        basePart.rotation.x = orientation.x
        basePart.rotation.y = orientation.y
        basePart.rotation.z = orientation.z
        this.obj = basePart
    }

    moveTo(v: Vector) {
        if (v.x) {
            this.obj.position.x = v.x
        }
        if (v.y) {
            this.obj.position.y = v.y
        }
        if (v.z) {
            this.obj.position.z = v.z
        }
    }

    setSize(v: number) {
        this.obj.scale = v
    }

    setOrientation(v: Vector) {
        if (v.x) {
            this.obj.rotation.x = v.x
        }
        if (v.y) {
            this.obj.rotation.y = v.y
        }
        if (v.z) {
            this.obj.rotation.z = v.z
        }
    }

    render() {
        return this.obj
    }
}

export default Sphere