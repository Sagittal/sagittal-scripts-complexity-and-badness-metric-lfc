import {deepEquals} from "@sagittal/general"
import * as fs from "fs"

const tmp = fs.readFileSync("spec/helpers/tmp.ts")
const tmpSnapshot = fs.readFileSync("spec/helpers/tmpSnapshot.txt")

if (!deepEquals(tmp, tmpSnapshot)) {
    throw new Error("You have made changes to spec/helpers/tmp.ts and should remove them before proceeding.")
}
