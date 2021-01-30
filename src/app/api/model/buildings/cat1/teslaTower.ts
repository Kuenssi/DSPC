import {Item} from '../../item';
import {ASSEMBLER, TESLA_TOWER} from '../../../util/names';
import {Input} from '../../../util/input';
import {MagneticCoil} from '../../components/cat2/magneticCoil';
import {IronIngot} from '../../components/cat1/ironIngot';

export class TeslaTower extends Item {
  name = TESLA_TOWER;
  processingTime = 1;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 2),
    new Input(new MagneticCoil(), 1),
  ];
  outputAmount = 1;
}
