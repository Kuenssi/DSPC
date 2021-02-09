import {Item} from '../../item';
import {ASSEMBLER, MAGNETIC_COIL} from '../../util/constants/names';
import {Input} from '../../util/input';
import {Magnet} from './magnet';
import {CopperIngot} from '../cat1/copperIngot';

export class MagneticCoil extends Item {
  name = MAGNETIC_COIL;
  processingTime = 1;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Magnet(), 2),
    new Input(new CopperIngot(), 1),
  ];
  outputAmount = 2;
  imageSource = 'components/magnetism_wire';
}
