import {Item} from '../../item';
import {ASSEMBLER, SMALL_CARRIER_ROCKET} from '../../../util/names';
import {Input} from '../../../util/input';
import {DysonSphereComponent} from '../cat5/dysonSphereComponent';
import {DeuteronFuelRod} from '../cat2/deuteronFuelRod';
import {QuantumChip} from '../cat6/quantumChip';

export class SmallCarrierRocket extends Item {
  name = SMALL_CARRIER_ROCKET;
  processingTime = 6;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new DysonSphereComponent(), 2),
    new Input(new DeuteronFuelRod(), 2),
    new Input(new QuantumChip(), 2),
  ];
  outputAmount = 1;
}
