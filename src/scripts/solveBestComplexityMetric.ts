import {
    Ed,
    Filename,
    isUndefined,
    LogTarget,
    Parameter,
    program,
    saveLog,
    scriptSettings,
    setupScriptAndIo,
    time,
} from "@sagittal/general"
import { complexityAndBadnessMetricLfcScriptGroupSettings } from "../globals"
import { COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS } from "../metrics"
import { logComplexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade } from "../optimize"
import { ComplexityMetric, ComplexityMetricFamilyId, ComplexityParameterId } from "../types"
import { computeZoneCommaEntries } from "../zoneCommas"

program
    .option(
        "--sos-mode",
        "sum-of-squares mode (minimize the sum of squared distances between the actual comma's complexity and the best comma's complexity, rather than boolean mode which simply gives a 1 when the actual comma is not the best comma and a 0 when it is",
    )
    .option(
        "--secondary-comma-zones",
        "use commas in each comma's secondary comma zone, rather than the default behavior of its capture zone in the Extreme precision level notation",
    )
    .option(
        "--complexity-search-ed <complexitySearchEd>",
        "number of equal divisions for each parameter's search scope",
    )

setupScriptAndIo("solveBestComplexityMetric" as Filename, [LogTarget.ALL])
const {
    sosMode,
    secondaryCommaZones,
    complexitySearchEd,
}: { sosMode: boolean; secondaryCommaZones: boolean; complexitySearchEd: Ed<{ of: Parameter }> } =
    program.opts()

complexityAndBadnessMetricLfcScriptGroupSettings.zoneCommaEntries =
    computeZoneCommaEntries(!!secondaryCommaZones)

if (!isUndefined(sosMode)) {
    complexityAndBadnessMetricLfcScriptGroupSettings.sosMode = sosMode
}
if (!isUndefined(complexitySearchEd)) {
    complexityAndBadnessMetricLfcScriptGroupSettings.complexitySearchEd = complexitySearchEd
}

const complexityMetricFamiliesWithParametersEntries = Object.entries(
    COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS,
) as [ComplexityMetricFamilyId, { metric: ComplexityMetric; parameters: ComplexityParameterId[] }][]

saveLog("Complexity grades (* identifies the actual comma for each zone)\n", LogTarget.DETAILS)
complexityMetricFamiliesWithParametersEntries.forEach(
    logComplexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade,
)

if (scriptSettings.time) {
    saveLog(
        `\nFINDING COMPLEXITY PARAMETER SETS FOR COMPLEXITY METRIC FAMILIES OPTIMIZING EACH OF THEIR GRADES TOOK ${time()}`,
        LogTarget.FINAL,
    )
}
