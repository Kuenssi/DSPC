import {Item} from '../../item';
import {ASSEMBLER, DYSON_SPHERE_COMPONENT} from '../../util/constants/names';
import {Input} from '../../util/input';
import {FrameMaterial} from './frameMaterial';
import {SolarSail} from './solarSail';
import {Processor} from './processor';

export class DysonSphereComponent extends Item {
  name = DYSON_SPHERE_COMPONENT;
  processingTime = 8;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new FrameMaterial(), 3),
    new Input(new SolarSail(), 3),
    new Input(new Processor(), 3),
  ];
  outputAmount = 1;
}
