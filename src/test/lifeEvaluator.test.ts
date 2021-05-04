import { Cell } from "../main/cell";
import {LifeEvaluator} from "../main/lifeEvaluator";

describe('life evaluator', () => {
    it("when given a dead cell with no live neighbours, will stay dead", () => {
        const lifeEvaluator = new LifeEvaluator();
        const currentCell = new Cell(false);

        expect(lifeEvaluator.testCell(currentCell, 0)).toBe(false);
    })

    it("when given a live cell with no live neighbours, will turn dead", () => {
        const lifeEvaluator = new LifeEvaluator();
        const currentCell = new Cell(true);

        expect(lifeEvaluator.testCell(currentCell, 0)).toBe(false);
    })

    it("when given a live cell with one live neighbour, will turn dead", () => {
        const lifeEvaluator = new LifeEvaluator();
        const currentCell = new Cell(true);

        expect(lifeEvaluator.testCell(currentCell, 1)).toBe(false);
    })

    it("when given a live cell with two live neighbours, will stay alive", () => {
        const lifeEvaluator = new LifeEvaluator();
        const currentCell = new Cell(true);

        expect(lifeEvaluator.testCell(currentCell, 2)).toBe(true);
    })
})