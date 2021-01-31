import {Item} from '../../item';
import {ASSEMBLER, RAY_RECEIVER} from '../../../util/constants/names';
import {Input} from '../../../util/input';
import {Steel} from '../../components/cat3/steel';
import {HighPuritySilicon} from '../../components/cat1/highPuritySilicon';
import {PhotonCombiner} from '../../components/cat6/photonCombiner';
import {Processor} from '../../components/cat5/processor';
import {SuperMagneticRing} from '../../components/cat5/superMagneticRing';

export class RayReceiver extends Item {
  name = RAY_RECEIVER;
  processingTime = 8;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new Steel(), 20),
    new Input(new HighPuritySilicon(), 20),
    new Input(new PhotonCombiner(), 10),
    new Input(new Processor(), 5),
    new Input(new SuperMagneticRing(), 20),
  ];
  outputAmount = 1;
}
