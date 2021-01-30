import {Item} from '../../item';
import {ASSEMBLER, LOGISTICS_VESSEL} from '../../../util/names';
import {Input} from '../../../util/input';
import {TitaniumAlloy} from '../cat2/titaniumAlloy';
import {Processor} from '../cat5/processor';
import {ReinforcedThruster} from '../cat3/reinforcedThruster';

export class LogisticsVessel extends Item {
  name = LOGISTICS_VESSEL;
  processingTime = 6;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new TitaniumAlloy(), 10),
    new Input(new Processor(), 10),
    new Input(new ReinforcedThruster(), 2),
  ];
  outputAmount = 1;
}
