import {Item} from '../../item';
import {ASSEMBLER, SATELLITE_SUBSTATION} from '../../util/constants/names';
import {Input} from '../../util/input';
import {WirelessPowerTower} from './wirelessPowerTower';
import {SuperMagneticRing} from '../../components/cat5/superMagneticRing';
import {FrameMaterial} from '../../components/cat5/frameMaterial';

export class SatelliteSubstation extends Item {
  name = SATELLITE_SUBSTATION;
  processingTime = 5;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new WirelessPowerTower(), 1),
    new Input(new SuperMagneticRing(), 10),
    new Input(new FrameMaterial(), 2),
  ];
  outputAmount = 1;
}
