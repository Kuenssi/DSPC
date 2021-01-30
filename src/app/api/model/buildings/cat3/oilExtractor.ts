import {Item} from '../../item';
import {ASSEMBLER, OIL_EXTRACTOR} from '../../../util/names';
import {Input} from '../../../util/input';
import {Steel} from '../../components/cat3/steel';
import {Stone} from '../../components/cat1/stone';
import {CircuitBoard} from '../../components/cat4/circuitBoard';
import {PlasmaExciter} from '../../components/cat5/plasmaExciter';

export class OilExtractor extends Item {
  name = OIL_EXTRACTOR;
  processingTime = 8;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Steel(), 12),
    new Input(new Stone(), 12),
    new Input(new CircuitBoard(), 6),
    new Input(new PlasmaExciter(), 4),
  ];
  outputAmount = 1;
}
