import {Item} from '../../item';
import {ASSEMBLER, EM_RAIL_EJECTOR} from '../../util/constants/names';
import {Input} from '../../util/input';
import {Steel} from '../../components/cat3/steel';
import {Gear} from '../../components/cat4/gear';
import {Processor} from '../../components/cat5/processor';
import {SuperMagneticRing} from '../../components/cat5/superMagneticRing';

export class EmRailEjector extends Item {
  name = EM_RAIL_EJECTOR;
  processingTime = 6;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Steel(), 20),
    new Input(new Gear(), 20),
    new Input(new Processor(), 5),
    new Input(new SuperMagneticRing(), 10),
  ];
  outputAmount = 1;
}
