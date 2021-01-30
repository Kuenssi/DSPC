import {Item} from '../../item';
import {ASSEMBLER, ORBIT_COLLECTOR} from '../../../util/names';
import {Input} from '../../../util/input';
import {InterstellarLogisticsStation} from '../cat3/interstellarLogisticsStation';
import {SuperMagneticRing} from '../../components/cat5/superMagneticRing';
import {ReinforcedThruster} from '../../components/cat3/reinforcedThruster';
import {Accumulator} from '../cat1/accumulator';

export class OrbitCollector extends Item {
  name = ORBIT_COLLECTOR;
  processingTime = 30;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new InterstellarLogisticsStation(), 1),
    new Input(new SuperMagneticRing(), 50),
    new Input(new ReinforcedThruster(), 20),
    new Input(new Accumulator(), 20),
  ];
  outputAmount = 1;
}
