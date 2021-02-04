import {Item} from '../../item';
import {Input} from '../../util/input';
import {A_CARBON_NANOTUBE, CHEMICAL_PLANT} from '../../util/constants/names';
import {SpiniformStalagmiteCrystal} from '../../baseComponents/spiniformStalagmiteCrystal';

export class AdvancedCarbonNanotube extends Item {
  name = A_CARBON_NANOTUBE;
  processingTime = 4;
  neededMachine = CHEMICAL_PLANT;
  inputs = [
    new Input(new SpiniformStalagmiteCrystal(), 2),
  ];
  outputAmount = 2;
}
