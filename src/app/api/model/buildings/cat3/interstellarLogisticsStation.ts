import {Item} from '../../item';
import {ASSEMBLER, INTERSTELLAR_LOGISTICS_STATION} from '../../util/constants/names';
import {Input} from '../../util/input';
import {PlanetaryLogisticsStation} from '../cat2/planetaryLogisticsStation';
import {TitaniumAlloy} from '../../components/cat2/titaniumAlloy';
import {ParticleContainer} from '../../components/cat5/particleContainer';

export class InterstellarLogisticsStation extends Item {
  name = INTERSTELLAR_LOGISTICS_STATION;
  processingTime = 30;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new PlanetaryLogisticsStation(), 1),
    new Input(new TitaniumAlloy(), 40),
    new Input(new ParticleContainer(), 20),
  ];
  outputAmount = 1;
  imageSource = 'buildings/interstellar_logistic_station';
}
