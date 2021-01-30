import {Item} from '../../item';
import {ASSEMBLER, TITANIUM_GLASS} from '../../../util/names';
import {Input} from '../../../util/input';
import {Glass} from '../cat2/glass';
import {TitaniumIngot} from '../cat1/titaniumIngot';
import {Water} from '../../baseComponents/water';

export class TitaniumGlass extends Item {
  name = TITANIUM_GLASS;
  processingTime = 5;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Glass(), 2),
    new Input(new TitaniumIngot(), 2),
    new Input(new Water(), 2),
  ];
  outputAmount = 2;
}
