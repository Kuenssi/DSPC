import {Item} from '../../item';
import {INFORMATION_MATRIX, RESEARCH_FACILITY} from '../../util/constants/names';
import {Input} from '../../util/input';
import {Processor} from '../cat5/processor';
import {ParticleBroadband} from '../cat5/particleBroadband';

export class InformationMatrix extends Item {
  name = INFORMATION_MATRIX;
  processingTime = 10;
  neededMachine = RESEARCH_FACILITY;
  inputs = [
    new Input(new Processor(), 2),
    new Input(new ParticleBroadband(), 1),
  ];
  outputAmount = 1;
  imageSource = 'components/i_matrix';
}
