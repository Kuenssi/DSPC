import {Item} from '../../item';
import {ASSEMBLER, RAY_RECEIVER} from '../../../util/names';

export class RayReceiver extends Item {
  name = RAY_RECEIVER;
  processingTime = ;
  neededMachine = ASSEMBLER;
  inputs = [];
}
