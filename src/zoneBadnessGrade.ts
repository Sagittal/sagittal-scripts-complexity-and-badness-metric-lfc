import {
    areScaledVectorsEqual,
    BLANK,
    Comma,
    formatDecimal,
    Grade,
    LogTarget,
    saveLog,
} from "@sagittal/general"
import {
    Badness,
    CommaClassId,
    computeLpei,
    DirectedNumbers,
    DirectedWord,
    formatComma,
    getCommaClass,
    Notation,
} from "@sagittal/system"
import { complexityAndBadnessMetricLfcScriptGroupSettings } from "./globals"

const computeZoneBadnessGrade = ([commaClassId, commas]: [CommaClassId, Comma[]]): Grade<Notation> => {
    let leastCommaBadness = Infinity as Badness
    let actualCommaBadness = Infinity as Badness

    const actualComma = getCommaClass(commaClassId).pitch
    const formatCommaOptions = { directedWord: DirectedWord.NEVER, directedNumbers: DirectedNumbers.ON } // TODO: perhaps save this somewhere as the like "old preferred format"

    commas.forEach((comma: Comma): void => {
        const badness = computeLpei(comma)
        const isActualComma = areScaledVectorsEqual(comma, actualComma)

        saveLog(
            `${isActualComma ? "*" : BLANK}${formatComma(comma, formatCommaOptions)} badness: ${formatDecimal(badness)}`,
            LogTarget.DETAILS,
        )

        if (isActualComma) actualCommaBadness = badness
        if (badness < leastCommaBadness) {
            leastCommaBadness = badness
        }
    })

    const zoneBadnessGrade = complexityAndBadnessMetricLfcScriptGroupSettings.sosMode
        ? (((actualCommaBadness - leastCommaBadness) ** 2) as Grade<Notation>)
        : actualCommaBadness === leastCommaBadness
          ? (0 as Grade<Notation>)
          : (1 as Grade<Notation>)

    saveLog(
        `badness grade for ${formatComma(actualComma, formatCommaOptions)}'s zone: ${zoneBadnessGrade}\n`,
        LogTarget.DETAILS,
    )

    return zoneBadnessGrade
}

export { computeZoneBadnessGrade }
