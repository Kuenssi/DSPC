import {Item} from '../../item';
import {ASSEMBLER, MICROCRYSTALLINE_COMPONENT} from '../../util/constants/names';
import {Input} from '../../util/input';
import {HighPuritySilicon} from '../cat1/highPuritySilicon';
import {CopperIngot} from '../cat1/copperIngot';

export class MicrocrystallineComponent extends Item {
  name = MICROCRYSTALLINE_COMPONENT;
  processingTime = 2;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new HighPuritySilicon(), 2),
    new Input(new CopperIngot(), 1),
  ];
  outputAmount = 1;
}
