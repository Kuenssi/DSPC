import {Item} from '../../item';
import {ASSEMBLER, PARTICLE_BROADBAND} from '../../util/constants/names';
import {Input} from '../../util/input';
import {CarbonNanotube} from '../cat4/carbonNanotube';
import {CrystalSilicon} from '../cat2/crystalSilicon';
import {Plastic} from '../cat1/plastic';

export class ParticleBroadband extends Item {
  name = PARTICLE_BROADBAND;
  processingTime = 8;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new CarbonNanotube(), 2),
    new Input(new CrystalSilicon(), 2),
    new Input(new Plastic(), 1),
  ];
  outputAmount = 1;
  imageSource = 'components/particle_wide_band';
}
