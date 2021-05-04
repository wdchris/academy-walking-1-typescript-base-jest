import { Alive, AliveNeighbours, Cell } from "./cell";

export class LifeEvaluator {
    testCell(cell:Cell, aliveNeighbours: AliveNeighbours) : Alive {
        return false;
    }
}