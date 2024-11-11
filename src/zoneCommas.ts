import { Comma, Filename, NEWLINE, readLines } from "@sagittal/general"
import { CommaClassId } from "@sagittal/system"

const computeZoneCommaEntries = (secondaryCommaZones: boolean): [CommaClassId, Comma[]][] => {
    const zoneCommaType = secondaryCommaZones ? "secondaryCommaZone" : "extremeCaptureZone"

    return Object.entries(
        JSON.parse(readLines(`src/input/${zoneCommaType}Commas.txt` as Filename).join(NEWLINE)) as Record<
            CommaClassId,
            Comma[]
        >,
    ) as [CommaClassId, Comma[]][]
}

export { computeZoneCommaEntries }
