import { Comma, Grade } from "@sagittal/general"
import { CommaClassId, Notation } from "@sagittal/system"
import { complexityAndBadnessMetricLfcScriptGroupSettings } from "../../src/globals"
import { computeZoneBadnessGrade } from "../../src/zoneBadnessGrade"

describe("computeZoneBadnessGrade", (): void => {
    const COMMAS_FOR_1_V_5_7_13_n = [
        { vector: [17, -11, -3, 0, 0, 2] },
        { vector: [-18, 11, -2, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
        { vector: [12, -2, -1, -1, 0, -1] },
        { vector: [-5, 8, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] },
        { vector: [-32, 13, 1, 2, 1] },
        { vector: [-21, 13, 2, 0, 0, 0, 0, -1] },
        { vector: [-1, -7, 4, 1] },
    ] as Comma[]
    const COMMAS_FOR_1_V_5_P_2_7_P_3_k = [
        { vector: [-7, 11, -3, 0, -1] },
        { vector: [21, -5, -2, -3] },
        { vector: [24, -13, -1, 0, 1, 0, 0, 0, -1] },
        { vector: [-3, 2, 0, 0, 0, 0, 1, -1] },
        { vector: [-23, 10, 0, 0, 1, 1] },
        { vector: [21, -10, 0, 1, 0, -1, 0, -1] },
        { vector: [1, -2, 0, 1, 1, 0, -1] },
        { vector: [-14, 5, 2, -1, 0, 0, 0, 1] },
    ] as Comma[]

    describe("when in sos mode", (): void => {
        beforeEach((): void => {
            complexityAndBadnessMetricLfcScriptGroupSettings.sosMode = true
        })

        it("returns 0 when a comma is the least bad comma in its zone", (): void => {
            const actual = computeZoneBadnessGrade([
                CommaClassId._1_V_5_7_13_n,
                COMMAS_FOR_1_V_5_7_13_n,
            ])

            const expected = 0 as Grade<Notation>
            expect(actual).toBeCloseTo(expected)
        })

        it("returns a squared distance between the actual comma's badness and the least bad comma's when a comma is not the least bad comma in its zone", (): void => {
            complexityAndBadnessMetricLfcScriptGroupSettings.sosMode = true
            const actual = computeZoneBadnessGrade([
                CommaClassId._1_V_5_P_2_7_P_3_k,
                COMMAS_FOR_1_V_5_P_2_7_P_3_k,
            ])

            // 1/(5²⋅7³)k badness is 8.317604, but 17/19k badness is 7.080159; (8.317604 - 7.080159)^2 = 1.531271
            const expected = 1.531271 as Grade<Notation>
            expect(actual).toBeCloseTo(expected)
        })
    })

    describe("when in boolean mode", (): void => {
        beforeEach((): void => {
            complexityAndBadnessMetricLfcScriptGroupSettings.sosMode = false
        })

        it("returns 0 points (good) when a comma is the least bad comma in its zone", (): void => {
            const actual = computeZoneBadnessGrade([
                CommaClassId._1_V_5_7_13_n,
                COMMAS_FOR_1_V_5_7_13_n,
            ])

            const expected = 0 as Grade<Notation>
            expect(actual).toBe(expected)
        })

        it("returns 1 point (bad) when a comma is not the least bad comma in its zone", (): void => {
            const actual = computeZoneBadnessGrade([
                CommaClassId._1_V_5_P_2_7_P_3_k,
                COMMAS_FOR_1_V_5_P_2_7_P_3_k,
            ])

            // 1/(5²⋅7³)k badness is 8.317604, but 17/19k badness is 7.080159; so, get penalized one point
            const expected = 1 as Grade<Notation>
            expect(actual).toBe(expected)
        })
    })
})
