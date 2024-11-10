import { Combination, Parameter } from "@sagittal/general"
import { computeComplexityParameterSets } from "../../src/parameters"
import { ComplexityParameterId } from "../../src/types"

describe("computeComplexityParameterSets", (): void => {
    it("for each parameter ID, includes its range of possible values in the set", (): void => {
        const complexityParameterIds = [ComplexityParameterId.SE, ComplexityParameterId.TE]

        const actual = computeComplexityParameterSets(complexityParameterIds)

        const expected = [
            {
                [ComplexityParameterId.SE]: 0.001 as Parameter,
                [ComplexityParameterId.TE]: 0.001 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0012 as Parameter,
                [ComplexityParameterId.TE]: 0.001 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0014 as Parameter,
                [ComplexityParameterId.TE]: 0.001 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0016 as Parameter,
                [ComplexityParameterId.TE]: 0.001 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0018 as Parameter,
                [ComplexityParameterId.TE]: 0.001 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.002 as Parameter,
                [ComplexityParameterId.TE]: 0.001 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0022 as Parameter,
                [ComplexityParameterId.TE]: 0.001 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0024 as Parameter,
                [ComplexityParameterId.TE]: 0.001 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0026 as Parameter,
                [ComplexityParameterId.TE]: 0.001 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0028 as Parameter,
                [ComplexityParameterId.TE]: 0.001 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.003 as Parameter,
                [ComplexityParameterId.TE]: 0.001 as Parameter,
            },

            {
                [ComplexityParameterId.SE]: 0.001 as Parameter,
                [ComplexityParameterId.TE]: 0.0012 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0012 as Parameter,
                [ComplexityParameterId.TE]: 0.0012 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0014 as Parameter,
                [ComplexityParameterId.TE]: 0.0012 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0016 as Parameter,
                [ComplexityParameterId.TE]: 0.0012 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0018 as Parameter,
                [ComplexityParameterId.TE]: 0.0012 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.002 as Parameter,
                [ComplexityParameterId.TE]: 0.0012 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0022 as Parameter,
                [ComplexityParameterId.TE]: 0.0012 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0024 as Parameter,
                [ComplexityParameterId.TE]: 0.0012 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0026 as Parameter,
                [ComplexityParameterId.TE]: 0.0012 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0028 as Parameter,
                [ComplexityParameterId.TE]: 0.0012 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.003 as Parameter,
                [ComplexityParameterId.TE]: 0.0012 as Parameter,
            },

            {
                [ComplexityParameterId.SE]: 0.001 as Parameter,
                [ComplexityParameterId.TE]: 0.0014 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0012 as Parameter,
                [ComplexityParameterId.TE]: 0.0014 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0014 as Parameter,
                [ComplexityParameterId.TE]: 0.0014 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0016 as Parameter,
                [ComplexityParameterId.TE]: 0.0014 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0018 as Parameter,
                [ComplexityParameterId.TE]: 0.0014 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.002 as Parameter,
                [ComplexityParameterId.TE]: 0.0014 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0022 as Parameter,
                [ComplexityParameterId.TE]: 0.0014 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0024 as Parameter,
                [ComplexityParameterId.TE]: 0.0014 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0026 as Parameter,
                [ComplexityParameterId.TE]: 0.0014 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0028 as Parameter,
                [ComplexityParameterId.TE]: 0.0014 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.003 as Parameter,
                [ComplexityParameterId.TE]: 0.0014 as Parameter,
            },

            {
                [ComplexityParameterId.SE]: 0.001 as Parameter,
                [ComplexityParameterId.TE]: 0.0016 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0012 as Parameter,
                [ComplexityParameterId.TE]: 0.0016 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0014 as Parameter,
                [ComplexityParameterId.TE]: 0.0016 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0016 as Parameter,
                [ComplexityParameterId.TE]: 0.0016 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0018 as Parameter,
                [ComplexityParameterId.TE]: 0.0016 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.002 as Parameter,
                [ComplexityParameterId.TE]: 0.0016 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0022 as Parameter,
                [ComplexityParameterId.TE]: 0.0016 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0024 as Parameter,
                [ComplexityParameterId.TE]: 0.0016 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0026 as Parameter,
                [ComplexityParameterId.TE]: 0.0016 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0028 as Parameter,
                [ComplexityParameterId.TE]: 0.0016 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.003 as Parameter,
                [ComplexityParameterId.TE]: 0.0016 as Parameter,
            },

            {
                [ComplexityParameterId.SE]: 0.001 as Parameter,
                [ComplexityParameterId.TE]: 0.0018 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0012 as Parameter,
                [ComplexityParameterId.TE]: 0.0018 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0014 as Parameter,
                [ComplexityParameterId.TE]: 0.0018 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0016 as Parameter,
                [ComplexityParameterId.TE]: 0.0018 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0018 as Parameter,
                [ComplexityParameterId.TE]: 0.0018 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.002 as Parameter,
                [ComplexityParameterId.TE]: 0.0018 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0022 as Parameter,
                [ComplexityParameterId.TE]: 0.0018 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0024 as Parameter,
                [ComplexityParameterId.TE]: 0.0018 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0026 as Parameter,
                [ComplexityParameterId.TE]: 0.0018 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0028 as Parameter,
                [ComplexityParameterId.TE]: 0.0018 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.003 as Parameter,
                [ComplexityParameterId.TE]: 0.0018 as Parameter,
            },

            {
                [ComplexityParameterId.SE]: 0.001 as Parameter,
                [ComplexityParameterId.TE]: 0.002 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0012 as Parameter,
                [ComplexityParameterId.TE]: 0.002 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0014 as Parameter,
                [ComplexityParameterId.TE]: 0.002 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0016 as Parameter,
                [ComplexityParameterId.TE]: 0.002 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0018 as Parameter,
                [ComplexityParameterId.TE]: 0.002 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.002 as Parameter,
                [ComplexityParameterId.TE]: 0.002 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0022 as Parameter,
                [ComplexityParameterId.TE]: 0.002 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0024 as Parameter,
                [ComplexityParameterId.TE]: 0.002 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0026 as Parameter,
                [ComplexityParameterId.TE]: 0.002 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0028 as Parameter,
                [ComplexityParameterId.TE]: 0.002 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.003 as Parameter,
                [ComplexityParameterId.TE]: 0.002 as Parameter,
            },

            {
                [ComplexityParameterId.SE]: 0.001 as Parameter,
                [ComplexityParameterId.TE]: 0.0022 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0012 as Parameter,
                [ComplexityParameterId.TE]: 0.0022 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0014 as Parameter,
                [ComplexityParameterId.TE]: 0.0022 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0016 as Parameter,
                [ComplexityParameterId.TE]: 0.0022 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0018 as Parameter,
                [ComplexityParameterId.TE]: 0.0022 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.002 as Parameter,
                [ComplexityParameterId.TE]: 0.0022 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0022 as Parameter,
                [ComplexityParameterId.TE]: 0.0022 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0024 as Parameter,
                [ComplexityParameterId.TE]: 0.0022 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0026 as Parameter,
                [ComplexityParameterId.TE]: 0.0022 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0028 as Parameter,
                [ComplexityParameterId.TE]: 0.0022 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.003 as Parameter,
                [ComplexityParameterId.TE]: 0.0022 as Parameter,
            },

            {
                [ComplexityParameterId.SE]: 0.001 as Parameter,
                [ComplexityParameterId.TE]: 0.0024 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0012 as Parameter,
                [ComplexityParameterId.TE]: 0.0024 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0014 as Parameter,
                [ComplexityParameterId.TE]: 0.0024 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0016 as Parameter,
                [ComplexityParameterId.TE]: 0.0024 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0018 as Parameter,
                [ComplexityParameterId.TE]: 0.0024 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.002 as Parameter,
                [ComplexityParameterId.TE]: 0.0024 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0022 as Parameter,
                [ComplexityParameterId.TE]: 0.0024 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0024 as Parameter,
                [ComplexityParameterId.TE]: 0.0024 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0026 as Parameter,
                [ComplexityParameterId.TE]: 0.0024 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0028 as Parameter,
                [ComplexityParameterId.TE]: 0.0024 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.003 as Parameter,
                [ComplexityParameterId.TE]: 0.0024 as Parameter,
            },

            {
                [ComplexityParameterId.SE]: 0.001 as Parameter,
                [ComplexityParameterId.TE]: 0.0026 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0012 as Parameter,
                [ComplexityParameterId.TE]: 0.0026 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0014 as Parameter,
                [ComplexityParameterId.TE]: 0.0026 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0016 as Parameter,
                [ComplexityParameterId.TE]: 0.0026 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0018 as Parameter,
                [ComplexityParameterId.TE]: 0.0026 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.002 as Parameter,
                [ComplexityParameterId.TE]: 0.0026 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0022 as Parameter,
                [ComplexityParameterId.TE]: 0.0026 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0024 as Parameter,
                [ComplexityParameterId.TE]: 0.0026 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0026 as Parameter,
                [ComplexityParameterId.TE]: 0.0026 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0028 as Parameter,
                [ComplexityParameterId.TE]: 0.0026 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.003 as Parameter,
                [ComplexityParameterId.TE]: 0.0026 as Parameter,
            },

            {
                [ComplexityParameterId.SE]: 0.001 as Parameter,
                [ComplexityParameterId.TE]: 0.0028 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0012 as Parameter,
                [ComplexityParameterId.TE]: 0.0028 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0014 as Parameter,
                [ComplexityParameterId.TE]: 0.0028 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0016 as Parameter,
                [ComplexityParameterId.TE]: 0.0028 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0018 as Parameter,
                [ComplexityParameterId.TE]: 0.0028 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.002 as Parameter,
                [ComplexityParameterId.TE]: 0.0028 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0022 as Parameter,
                [ComplexityParameterId.TE]: 0.0028 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0024 as Parameter,
                [ComplexityParameterId.TE]: 0.0028 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0026 as Parameter,
                [ComplexityParameterId.TE]: 0.0028 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0028 as Parameter,
                [ComplexityParameterId.TE]: 0.0028 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.003 as Parameter,
                [ComplexityParameterId.TE]: 0.0028 as Parameter,
            },

            {
                [ComplexityParameterId.SE]: 0.001 as Parameter,
                [ComplexityParameterId.TE]: 0.003 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0012 as Parameter,
                [ComplexityParameterId.TE]: 0.003 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0014 as Parameter,
                [ComplexityParameterId.TE]: 0.003 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0016 as Parameter,
                [ComplexityParameterId.TE]: 0.003 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0018 as Parameter,
                [ComplexityParameterId.TE]: 0.003 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.002 as Parameter,
                [ComplexityParameterId.TE]: 0.003 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0022 as Parameter,
                [ComplexityParameterId.TE]: 0.003 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0024 as Parameter,
                [ComplexityParameterId.TE]: 0.003 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0026 as Parameter,
                [ComplexityParameterId.TE]: 0.003 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.0028 as Parameter,
                [ComplexityParameterId.TE]: 0.003 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 0.003 as Parameter,
                [ComplexityParameterId.TE]: 0.003 as Parameter,
            },
        ] as Combination<Partial<Record<ComplexityParameterId, Parameter>>>

        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })
})
