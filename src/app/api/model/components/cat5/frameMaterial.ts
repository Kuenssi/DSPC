import {Item} from '../../item';
import {ASSEMBLER, FRAME_MATERIAL} from '../../util/constants/names';
import {Input} from '../../util/input';
import {CarbonNanotube} from '../cat4/carbonNanotube';
import {TitaniumAlloy} from '../cat2/titaniumAlloy';
import {HighPuritySilicon} from '../cat1/highPuritySilicon';

export class FrameMaterial extends Item {
  name = FRAME_MATERIAL;
  processingTime = 6;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new CarbonNanotube(), 4),
    new Input(new TitaniumAlloy(), 1),
    new Input(new HighPuritySilicon(), 1),
  ];
  outputAmount = 6;
  imageSource = 'components/frame_material';
}
