import {Item} from '../../item';
import {ASSEMBLER, ENERGY_EXCHANGER} from '../../util/constants/names';
import {Input} from '../../util/input';
import {TitaniumAlloy} from '../../components/cat2/titaniumAlloy';
import {Steel} from '../../components/cat3/steel';
import {Processor} from '../../components/cat5/processor';
import {ParticleContainer} from '../../components/cat5/particleContainer';

export class EnergyExchanger extends Item {
  name = ENERGY_EXCHANGER;
  processingTime = 15;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new TitaniumAlloy(), 40),
    new Input(new Steel(), 40),
    new Input(new Processor(), 40),
    new Input(new ParticleContainer(), 8),
  ];
  outputAmount = 1;
}
