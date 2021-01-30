import {Item} from '../../item';
import {ASSEMBLER, OIL_REFINERY} from '../../../util/names';
import {Input} from '../../../util/input';
import {Steel} from '../../components/cat3/steel';
import {Stone} from '../../components/cat1/stone';
import {CircuitBoard} from '../../components/cat4/circuitBoard';
import {PlasmaExciter} from '../../components/cat5/plasmaExciter';

export class OilRefinery extends Item {
  name = OIL_REFINERY;
  processingTime = 6;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Steel(), 10),
    new Input(new Stone(), 10),
    new Input(new CircuitBoard(), 6),
    new Input(new PlasmaExciter(), 6),
  ];
  outputAmount = 1;
}
