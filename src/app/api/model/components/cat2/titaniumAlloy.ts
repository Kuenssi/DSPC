import {Item} from '../../item';
import {SMELTER, TITANIUM_ALLOY} from '../../../util/names';
import {Input} from '../../../util/input';
import {TitaniumIngot} from '../cat1/titaniumIngot';
import {Steel} from '../cat3/steel';
import {SulfuricAcid} from '../cat4/sulfuricAcid';

export class TitaniumAlloy extends Item {
  name = TITANIUM_ALLOY;
  processingTime = 12;
  neededMachine = SMELTER;
  inputs = [
    new Input(new TitaniumIngot(), 4),
    new Input(new Steel(), 4),
    new Input(new SulfuricAcid(), 8),
  ];
  outputAmount = 4;
}
