import {Item} from '../../item';
import {ASSEMBLER, REINFORCED_THRUSTER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {TitaniumAlloy} from '../cat2/titaniumAlloy';
import {ElectromagneticTurbine} from '../cat4/electromagneticTurbine';

export class ReinforcedThruster extends Item {
  name = REINFORCED_THRUSTER;
  processingTime = 6;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new TitaniumAlloy(), 5),
    new Input(new ElectromagneticTurbine(), 5),
  ];
  outputAmount = 1;
  imageSource = 'components/ion_thruster';
}
