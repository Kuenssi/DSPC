import {Item} from '../../item';
import {ASSEMBLER, MINI_FUSION_POWER_STATION} from '../../util/constants/names';
import {Input} from '../../util/input';
import {TitaniumAlloy} from '../../components/cat2/titaniumAlloy';
import {SuperMagneticRing} from '../../components/cat5/superMagneticRing';
import {Processor} from '../../components/cat5/processor';
import {CarbonNanotube} from '../../components/cat4/carbonNanotube';

export class MiniFusionPowerStation extends Item {
  name = MINI_FUSION_POWER_STATION;
  processingTime = 10;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new TitaniumAlloy(), 12),
    new Input(new SuperMagneticRing(), 10),
    new Input(new CarbonNanotube(), 8),
    new Input(new Processor(), 4),
  ];
  outputAmount = 1;
  imageSource = 'buildings/fusion_power_station';
}
