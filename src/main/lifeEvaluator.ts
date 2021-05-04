import {Alive, AliveNeighbours, Cell} from "./cell";

export class LifeEvaluator {

    private canComeToLife(cell: Cell, aliveNeighbours: AliveNeighbours): Alive {
        return !cell.isLive && aliveNeighbours === 3;
    }

    private willStayAlive(cell: Cell, aliveNeighbours: AliveNeighbours): Alive {
        return cell.isLive && (aliveNeighbours === 2 || aliveNeighbours === 3);
    }

    testCell(cell: Cell, aliveNeighbours: AliveNeighbours): Alive {
        return this.canComeToLife(cell, aliveNeighbours) || this.willStayAlive(cell, aliveNeighbours);
    }
}