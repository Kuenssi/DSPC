import {Item} from '../../item';
import {ASSEMBLER, SOLAR_PANEL} from '../../util/constants/names';
import {Input} from '../../util/input';
import {CopperIngot} from '../../components/cat1/copperIngot';
import {HighPuritySilicon} from '../../components/cat1/highPuritySilicon';
import {CircuitBoard} from '../../components/cat4/circuitBoard';

export class SolarPanel extends Item {
  name = SOLAR_PANEL;
  processingTime = 5;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new CopperIngot(), 6),
    new Input(new HighPuritySilicon(), 6),
    new Input(new CircuitBoard(), 4),
  ];
  outputAmount = 1;
}
