import {Item} from '../../item';
import {ASSEMBLER, WIND_TURBINE} from '../../util/constants/names';
import {Input} from '../../util/input';
import {IronIngot} from '../../components/cat1/ironIngot';
import {Gear} from '../../components/cat4/gear';
import {MagneticCoil} from '../../components/cat2/magneticCoil';

export class WindTurbine extends Item {
  name = WIND_TURBINE;
  processingTime = 4;
  neededMachine = ASSEMBLER;
  inputs = [
    new Input(new IronIngot(), 6),
    new Input(new Gear(), 1),
    new Input(new MagneticCoil(), 3),
  ];
  outputAmount = 1;
  imageSource = 'buildings/wind_turbine';
}
