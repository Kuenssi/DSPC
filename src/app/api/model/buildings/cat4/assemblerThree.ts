import {Item} from '../../item';
import {ASSEMBLER, ASSEMBLING_MACHINE_MK_3} from '../../../util/names';
import {Input} from '../../../util/input';
import {AssemblerTwo} from './assemblerTwo';
import {ParticleBroadband} from '../../components/cat5/particleBroadband';
import {QuantumChip} from '../../components/cat6/quantumChip';

export class AssemblerThree extends Item {
  name = ASSEMBLING_MACHINE_MK_3;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new AssemblerTwo(), 1),
    new Input(new ParticleBroadband(), 8),
    new Input(new QuantumChip(), 2),
  ];
  outputAmount = 1;
}
