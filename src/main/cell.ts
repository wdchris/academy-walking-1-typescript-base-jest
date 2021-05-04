export class Cell {
    isLive: Alive;

    constructor(isLive: Alive) {
        this.isLive = isLive;
    }
}

export type Alive = true | false
export type AliveNeighbours = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;