import {Item} from '../../item';
import {ASSEMBLER, QUANTUM_CHIP} from '../../util/constants/names';
import {Input} from '../../util/input';
import {Processor} from '../cat5/processor';
import {PlaneFilter} from '../cat4/planeFilter';

export class QuantumChip extends Item {
  name = QUANTUM_CHIP;
  processingTime = 6;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Processor(), 2),
    new Input(new PlaneFilter(), 2),
  ];
  outputAmount = 1;
  imageSource = 'components/quantum_processor';
}
