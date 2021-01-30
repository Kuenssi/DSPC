import {Item} from '../../item';
import {ASSEMBLER, VERTICAL_LAUNCHING_SILO} from '../../../util/names';
import {Input} from '../../../util/input';
import {TitaniumAlloy} from '../../components/cat2/titaniumAlloy';
import {FrameMaterial} from '../../components/cat5/frameMaterial';
import {GravitonLens} from '../../components/cat4/gravitonLens';
import {QuantumChip} from '../../components/cat6/quantumChip';

export class VerticalLaunchingSilo extends Item {
  name = VERTICAL_LAUNCHING_SILO;
  processingTime = 30;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new TitaniumAlloy(), 80),
    new Input(new FrameMaterial(), 30),
    new Input(new GravitonLens(), 20),
    new Input(new QuantumChip(), 10),
  ];
  outputAmount = 1;
}
