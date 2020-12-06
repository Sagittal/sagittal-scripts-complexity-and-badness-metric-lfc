import {
    Filename,
    ioSettings,
    isUndefined,
    LogTarget,
    saveLog,
    ScriptFlag,
    setupScriptAndIo,
    time,
} from "@sagittal/general"
import {program} from "commander"
import {complexityAndBadnessMetricLfcScriptGroupSettings} from "../globals"
import {COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS} from "../metrics"
import {logComplexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade} from "../optimize"
import {ComplexityMetric, ComplexityMetricFamilyId, ComplexityParameterId} from "../types"
import {computeZoneCommaEntries} from "../zoneCommas"

program
    .option(`-${ScriptFlag.SOS_MODE}, --sos-mode`, "sum-of-squares mode (minimize the sum of squared distances between the actual comma's complexity and the best comma's complexity, rather than boolean mode which simply gives a 1 when the actual comma is not the best comma and a 0 when it is")
    .option(`-${ScriptFlag.SECONDARY_COMMA_ZONES}, --secondary-comma-zones`, "use commas in each comma's secondary comma zone, rather than the default behavior of its capture zone in the Extreme precision level notation")
    .option(`-${ScriptFlag.COMPLEXITY_SEARCH_ED}, --complexity-search-ed <complexitySearchEd>`, "number of equal divisions for each parameter's search scope")

setupScriptAndIo("complexityAndBadnessMetricLfc" as Filename, [LogTarget.ALL])

complexityAndBadnessMetricLfcScriptGroupSettings.zoneCommaEntries =
    computeZoneCommaEntries(!!program.secondaryCommaZones)

if (!isUndefined(program.sosMode)) {
    complexityAndBadnessMetricLfcScriptGroupSettings.sosMode = program.sosMode
}
if (!isUndefined(program.complexitySearchEd)) {
    complexityAndBadnessMetricLfcScriptGroupSettings.complexitySearchEd = program.complexitySearchEd
}

const complexityMetricFamiliesWithParametersEntries = Object.entries(
    COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS,
) as Array<[ComplexityMetricFamilyId, {metric: ComplexityMetric, parameters: ComplexityParameterId[]}]>

saveLog("Complexity grades (* identifies the actual comma for each zone)\n", LogTarget.DETAILS)
complexityMetricFamiliesWithParametersEntries
    .forEach(logComplexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade)

if (ioSettings.time) {
    saveLog(
        `\nFINDING COMPLEXITY PARAMETER SETS FOR COMPLEXITY METRIC FAMILIES OPTIMIZING EACH OF THEIR GRADES TOOK ${time()}`,
        LogTarget.FINAL,
    )
}
