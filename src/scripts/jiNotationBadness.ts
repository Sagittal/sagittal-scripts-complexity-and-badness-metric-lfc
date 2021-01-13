import {
    Comma,
    Filename,
    Grade,
    LogTarget,
    program,
    saveLog,
    scriptSettings,
    setupScriptAndIo,
    Sum,
    time,
} from "@sagittal/general"
import {CommaClassId, Notation} from "@sagittal/system"
import {EXCLUDED_COMMAS} from "../constants"
import {complexityAndBadnessMetricLfcScriptGroupSettings} from "../globals"
import {computeZoneBadnessGrade} from "../zoneBadnessGrade"
import {computeZoneCommaEntries} from "../zoneCommas"

setupScriptAndIo("jiNotationBadness" as Filename, [LogTarget.ALL])

let jiNotationBadnessGrade = 0 as Sum<Grade<Notation>>

complexityAndBadnessMetricLfcScriptGroupSettings.zoneCommaEntries =
    computeZoneCommaEntries(!!program.secondaryCommaZones)

saveLog("Badness grades per zone (* identifies the actual comma for each zone)\n", LogTarget.DETAILS)
complexityAndBadnessMetricLfcScriptGroupSettings.zoneCommaEntries
    .forEach(([commaClassId, commas]: [CommaClassId, Comma[]]): void => {
        if (EXCLUDED_COMMAS.includes(commaClassId)) return

        const zoneBadnessGrade = computeZoneBadnessGrade([commaClassId, commas])
        jiNotationBadnessGrade = jiNotationBadnessGrade + zoneBadnessGrade as Sum<Grade<Notation>>
    })

saveLog(`\nJI NOTATION'S BADNESS GRADE WAS: ${jiNotationBadnessGrade}`, LogTarget.FINAL)

if (scriptSettings.time) saveLog(`\ntook ${time()}`, LogTarget.FINAL)
