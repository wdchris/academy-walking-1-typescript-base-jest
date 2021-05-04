import {Cell} from "../main/cell";
import {LifeEvaluator} from "../main/lifeEvaluator";

describe('One cluster of cells', function () {
    describe('with a dead center cell', () => {


        it('given three live neighbours will get a live centre cell', () => {
            const cluster = new cluster([false, false,,,,,])

            cluster.setCenter(alive)

            expect cluster center to be alive
        });



        it('given three live neighbours will get a live centre cell', () => {
            const evaluator = new LifeEvaluator()

            const cluster = [0..8]
            processCluster(cluster)
                const cell = new Cell( cluster[4])
                const neighbours = cluster.liveNeighbours()
                evaluator.testCell(cell, )
        });

    });
});