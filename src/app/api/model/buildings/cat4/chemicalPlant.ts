import {Item} from '../../item';
import {ASSEMBLER, CHEMICAL_PLANT} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {Steel} from '../../components/cat3/steel';
import {Stone} from '../../components/cat1/stone';
import {Glass} from '../../components/cat2/glass';
import {CircuitBoard} from '../../components/cat4/circuitBoard';

export class ChemicalPlant extends Item {
  name = CHEMICAL_PLANT;
  processingTime = 5;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Steel(), 8),
    new Input(new Stone(), 8),
    new Input(new Glass(), 8),
    new Input(new CircuitBoard(), 2),
  ];
  outputAmount = 1;
}
