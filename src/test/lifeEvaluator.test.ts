import {Cell} from "../main/cell";
import {LifeEvaluator} from "../main/lifeEvaluator";

describe('life evaluator', () => {
    describe("when given a live cell", () => {
        it("with no live neighbours, will turn dead", () => {
            const lifeEvaluator = new LifeEvaluator();
            const currentCell = new Cell(true);

            expect(lifeEvaluator.testCell(currentCell, 0)).toBe(false);
        })

        it("with one live neighbour, will turn dead", () => {
            const lifeEvaluator = new LifeEvaluator();
            const currentCell = new Cell(true);

            expect(lifeEvaluator.testCell(currentCell, 1)).toBe(false);
        })

        it("with two live neighbours, will stay alive", () => {
            const lifeEvaluator = new LifeEvaluator();
            const currentCell = new Cell(true);

            expect(lifeEvaluator.testCell(currentCell, 2)).toBe(true);
        })

        it("with three live neighbours, will stay alive", () => {
            const lifeEvaluator = new LifeEvaluator();
            const currentCell = new Cell(true);

            expect(lifeEvaluator.testCell(currentCell, 3)).toBe(true);
        })

        it("with four live neighbours, it will die", () => {
            const lifeEvaluator = new LifeEvaluator();
            const currentCell = new Cell(true);

            expect(lifeEvaluator.testCell(currentCell, 4)).toBe(false);
        })
    });

    describe("when given a dead cell", () => {

        it("with no live neighbours, will stay dead", () => {
            const lifeEvaluator = new LifeEvaluator();
            const currentCell = new Cell(false);

            expect(lifeEvaluator.testCell(currentCell, 0)).toBe(false);
        })

        it("with on live neighbours, will stay dead", () => {
            const lifeEvaluator = new LifeEvaluator();
            const currentCell = new Cell(false);

            expect(lifeEvaluator.testCell(currentCell, 1)).toBe(false);
        })

        it("with two live neighbours, will stay dead", () => {
            const lifeEvaluator = new LifeEvaluator();
            const currentCell = new Cell(false);

            expect(lifeEvaluator.testCell(currentCell, 2)).toBe(false);
        })

        it("with three live neighbours, will come alive", () => {
            const lifeEvaluator = new LifeEvaluator();
            const currentCell = new Cell(false);

            expect(lifeEvaluator.testCell(currentCell, 3)).toBe(true);
        })
    });
})