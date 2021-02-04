import {TeslaTower} from './cat1/teslaTower';
import {WirelessPowerTower} from './cat1/wirelessPowerTower';
import {SatelliteSubstation} from './cat1/satelliteSubstation';
import {WindTurbine} from './cat1/windTurbine';
import {ThermalPowerStation} from './cat1/thermalPowerStation';
import {SolarPanel} from './cat1/solarPanel';
import {Accumulator} from './cat1/accumulator';
import {RayReceiver} from './cat1/rayReceiver';
import {MiniFusionPowerStation} from './cat1/miniFusionPowerStation';
import {ConveyorBeltOne} from './cat2/conveyorBeltOne';
import {ConveyorBeltTwo} from './cat2/conveyorBeltTwo';
import {ConveyorBeltThree} from './cat2/conveyorBeltThree';
import {Splitter} from './cat2/splitter';
import {StorageOne} from './cat2/storageOne';
import {StorageTwo} from './cat2/storageTwo';
import {StorageTank} from './cat2/storageTank';
import {EmRailEjector} from './cat2/emRailEjector';
import {PlanetaryLogisticsStation} from './cat2/planetaryLogisticsStation';
import {MiniParticleCollider} from './cat2/miniParticleCollider';
import {SorterOne} from './cat3/sorterOne';
import {SorterTwo} from './cat3/sorterTwo';
import {SorterThree} from './cat3/sorterThree';
import {MiningMachine} from './cat3/miningMachine';
import {WaterPump} from './cat3/waterPump';
import {OilExtractor} from './cat3/oilExtractor';
import {OilRefinery} from './cat3/oilRefinery';
import {VerticalLaunchingSilo} from './cat3/verticalLaunchingSilo';
import {InterstellarLogisticsStation} from './cat3/interstellarLogisticsStation';
import {AssemblerOne} from './cat4/assemblerOne';
import {AssemblerTwo} from './cat4/assemblerTwo';
import {AssemblerThree} from './cat4/assemblerThree';
import {Smelter} from './cat4/smelter';
import {Fractionator} from './cat4/fractionator';
import {ChemicalPlant} from './cat4/chemicalPlant';
import {MatrixLab} from './cat4/matrixLab';
import {OrbitCollector} from './cat4/orbitCollector';
import {Placeholder} from '../util/placeholder';
import {SingleRow} from '../util/table/singleRow';
import {AllRows} from '../util/table/allRows';

export class AllBuildings extends AllRows {
  constructor() {
    super();
    this.singleRows.push(
      new SingleRow([
        new TeslaTower(),
        new WirelessPowerTower(),
        new SatelliteSubstation(),
        new WindTurbine(),
        new ThermalPowerStation(),
        new SolarPanel(),
        new Accumulator(),
        new RayReceiver(),
        new MiniFusionPowerStation(),
        new Accumulator(),
        new Placeholder(),
        new Placeholder(),
      ], 1),
      new SingleRow([
        new ConveyorBeltOne(),
        new ConveyorBeltTwo(),
        new ConveyorBeltThree(),
        new Splitter(),
        new StorageOne(),
        new StorageTwo(),
        new StorageTank(),
        new EmRailEjector(),
        new PlanetaryLogisticsStation(),
        new MiniParticleCollider(),
        new Placeholder(),
        new Placeholder(),
      ], 2),
      new SingleRow([
        new SorterOne(),
        new SorterTwo(),
        new SorterThree(),
        new MiningMachine(),
        new WaterPump(),
        new OilExtractor(),
        new OilRefinery(),
        new VerticalLaunchingSilo(),
        new InterstellarLogisticsStation(),
        new Placeholder(),
        new Placeholder(),
        new Placeholder(),
      ], 3),
      new SingleRow([
        new AssemblerOne(),
        new AssemblerTwo(),
        new AssemblerThree(),
        new Smelter(),
        new Placeholder(),
        new Fractionator(),
        new ChemicalPlant(),
        new MatrixLab(),
        new OrbitCollector(),
        new Placeholder(),
        new Placeholder(),
        new Placeholder(),
      ], 4),
    );
  }
}
