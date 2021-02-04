import {Item} from '../../item';
import {ASSEMBLER, PLANETARY_LOGISTICS_STATION} from '../../util/constants/names';
import {Input} from '../../util/input';
import {Steel} from '../../components/cat3/steel';
import {TitaniumIngot} from '../../components/cat1/titaniumIngot';
import {Processor} from '../../components/cat5/processor';
import {ParticleContainer} from '../../components/cat5/particleContainer';

export class PlanetaryLogisticsStation extends Item {
  name = PLANETARY_LOGISTICS_STATION;
  processingTime = 20;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Steel(), 40),
    new Input(new TitaniumIngot(), 40),
    new Input(new Processor(), 40),
    new Input(new ParticleContainer(), 20),
  ];
  outputAmount = 1;
}
