import {Item} from '../../item';
import {ASSEMBLER, TITANIUM_CRYSTAL} from '../../../util/names';
import {Input} from '../../../util/input';
import {OrganicCrystal} from '../cat2/organicCrystal';
import {TitaniumIngot} from '../cat1/titaniumIngot';

export class TitaniumCrystal extends Item {
  name = TITANIUM_CRYSTAL;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new OrganicCrystal(), 1),
    new Input(new TitaniumIngot(), 3),
  ];
  outputAmount = 1;
}
