import {Matrix4, Vector3, Vector4, Matrix3} from "three"
/*
function CFrame(x, y, z, r00, r01, r02, r10, r11, r12, r20, r21, r22) {
    return new THREE.Matrix4().set(
        r00, r01, r02, x,
        r10, r11, r12, y,
        r20, r21, r22, z,
        0, 0, 0, 1
    )
}
 */

class CFrame {
    data: Matrix4

    transforms = {
		CFrame: ["X", "Y", "Z", "R00", "R01", "R02", "R10", "R11", "R12", "R20", "R21", "R22"],
		Vector3: ["X", "Y", "Z"],
		Vector2: ["X", "Y"]
	}

    constructor(x, y, z, r00, r01, r02, r10, r11, r12, r20, r21, r22) {
        this.data = new Matrix4().set(
            r00, r01, r02, x,
            r10, r11, r12, y,
            r20, r21, r22, z,
            0, 0, 0, 1
        )
    }
    
}

export default CFrame