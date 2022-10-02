import {Comma} from "@sagittal/general"
import {CommaClassId} from "@sagittal/system"
import {complexityAndBadnessMetricLfcScriptGroupSettings} from "../../src/globals"
import {computeMetricGradeForMetricAndParameterSet} from "../../src/metricGrade"
import {COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS} from "../../src/metrics"
import {computeComplexityParameterSets} from "../../src/parameters"
import {ComplexityMetricFamilyId} from "../../src/types"
import * as zoneMetricGrade from "../../src/zoneMetricGrade"

describe("computeMetricGradeForMetricAndParameterSet", (): void => {
    it("checks each zone comma entry, except the 14641k and 19/4375s, two commas who have been identified to have inappropriately low popularity", (): void => {
        complexityAndBadnessMetricLfcScriptGroupSettings.zoneCommaEntries = [
            [
                CommaClassId._1_V_5_C,
                [{pev: [-4, 4, -1]}, {pev: [24, -12, 0, -3, 1]}],
            ],
            [
                CommaClassId._1_V_17_k,
                [{pev: [16, -4, -1, -1, 0, 0, 0, 0, -1]}, {pev: [-22, 11, -1, 1, 0, 0, 1]}],
            ],
            [
                CommaClassId._11_P_4_k,
                [{pev: [8, 3, -4, 0, -1]}, {pev: [12, -6, -1, 0, 0, 0, 1, -1]}, {pev: [-8, 2, -1, 0, 1, 1]}],
            ],
            [
                CommaClassId._31_V_11_k,
                [{pev: [11, 1, -3, -2]}, {pev: [14, -3, -1, 0, -2]}, {pev: [-11, 6, 0, 0, -1, 0, 0, 0, 0, 0, 1]}],
            ],
            [
                CommaClassId._19_V_5_P_4_7_s,
                [{pev: [6, 2, -2, 0, 0, 0, 0, 0, -1]}, {pev: [20, -11, -1, 0, 1, -1]}],
            ],
            [
                CommaClassId._5_V_23_M,
                [{pev: [-16, 10, -3, 0, 1, 1]}, {pev: [-7, 5, -1, -1, 0, 0, 0, 1]}, {pev: [4, 5, 0, -3, -1]}],
            ],
        ] as Array<[CommaClassId, Comma[]]>
        const {metric, parameters} = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.LEE]
        const complexityParameterSet = computeComplexityParameterSets(parameters)[0]

        spyOn(zoneMetricGrade, "computeZoneComplexityMetricGrade")

        computeMetricGradeForMetricAndParameterSet(metric, complexityParameterSet)

        expect(zoneMetricGrade.computeZoneComplexityMetricGrade).toHaveBeenCalledWith(
            [
                CommaClassId._1_V_5_C,
                [{pev: [-4, 4, -1]}, {pev: [24, -12, 0, -3, 1]}] as Comma[],
            ],
            metric,
            complexityParameterSet,
        )
        expect(zoneMetricGrade.computeZoneComplexityMetricGrade).toHaveBeenCalledWith(
            [
                CommaClassId._1_V_17_k,
                [{pev: [16, -4, -1, -1, 0, 0, 0, 0, -1]}, {pev: [-22, 11, -1, 1, 0, 0, 1]}] as Comma[],
            ],
            metric,
            complexityParameterSet,
        )
        expect(zoneMetricGrade.computeZoneComplexityMetricGrade).not.toHaveBeenCalledWith(
            [
                CommaClassId._11_P_4_k,
                [{pev: [8, 3, -4, 0, -1]}, {pev: [12, -6, -1, 0, 0, 0, 1, -1]}, {pev: [-8, 2, -1, 0, 1, 1]}] as Comma[],
            ],
            metric,
            complexityParameterSet,
        )
        expect(zoneMetricGrade.computeZoneComplexityMetricGrade).toHaveBeenCalledWith(
            [
                CommaClassId._31_V_11_k,
                [{pev: [11, 1, -3, -2]}, {pev: [14, -3, -1, 0, -2]}, {pev: [-11, 6, 0, 0, -1, 0, 0, 0, 0, 0, 1]}] as Comma[],
            ],
            metric,
            complexityParameterSet,
        )
        expect(zoneMetricGrade.computeZoneComplexityMetricGrade).not.toHaveBeenCalledWith(
            [
                CommaClassId._19_V_5_P_4_7_s,
                [{pev: [6, 2, -2, 0, 0, 0, 0, 0, -1]}, {pev: [20, -11, -1, 0, 1, -1]}] as Comma[],
            ],
            metric,
            complexityParameterSet,
        )
        expect(zoneMetricGrade.computeZoneComplexityMetricGrade).toHaveBeenCalledWith(
            [
                CommaClassId._5_V_23_M,
                [{pev: [-16, 10, -3, 0, 1, 1]}, {pev: [-7, 5, -1, -1, 0, 0, 0, 1]}, {pev: [4, 5, 0, -3, -1]}] as Comma[],
            ],
            metric,
            complexityParameterSet,
        )
    })
})
