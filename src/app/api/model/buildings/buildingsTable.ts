import {Placeholder} from '../util/placeholder';
import {SingleRow} from '../util/table/singleRow';
import {AllRows} from '../util/table/allRows';
import {
  Accumulator, ArtificialStar, EnergyExchanger, MiniFusionPowerStation, RayReceiver,
  SatelliteSubstation,
  SolarPanel,
  TeslaTower,
  ThermalPowerStation,
  WindTurbine,
  WirelessPowerTower
} from './cat01';
import {
  ConveyorBeltOne,
  ConveyorBeltThree,
  ConveyorBeltTwo, EmRailEjector, MiniParticleCollider, PlanetaryLogisticsStation,
  Splitter,
  StorageOne,
  StorageTank,
  StorageTwo
} from './cat02';
import {
  InterstellarLogisticsStation,
  MiningMachine,
  OilExtractor,
  OilRefinery, SorterOne, SorterThree, SorterTwo,
  VerticalLaunchingSilo,
  WaterPump
} from './cat03';
import {
  AssemblerOne,
  AssemblerThree,
  AssemblerTwo,
  ChemicalPlant,
  Fractionator,
  MatrixLab,
  OrbitCollector,
  Smelter
} from './cat04';

export const BuildingsTable: AllRows = {
  name: 'Buildings',
  singleRows: [
    new SingleRow([
      TeslaTower,
      WirelessPowerTower,
      SatelliteSubstation,
      WindTurbine,
      ThermalPowerStation,
      SolarPanel,
      Accumulator,
      RayReceiver,
      MiniFusionPowerStation,
      Accumulator,
      EnergyExchanger,
      ArtificialStar,
    ], 1),
    new SingleRow([
      ConveyorBeltOne,
      ConveyorBeltTwo,
      ConveyorBeltThree,
      Splitter,
      StorageOne,
      StorageTwo,
      StorageTank,
      EmRailEjector,
      PlanetaryLogisticsStation,
      MiniParticleCollider,
      new Placeholder(),
      new Placeholder(),
    ], 2),
    new SingleRow([
      SorterOne,
      SorterTwo,
      SorterThree,
      MiningMachine,
      WaterPump,
      OilExtractor,
      OilRefinery,
      VerticalLaunchingSilo,
      InterstellarLogisticsStation,
      new Placeholder(),
      new Placeholder(),
      new Placeholder(),
    ], 3),
    new SingleRow([
      AssemblerOne,
      AssemblerTwo,
      AssemblerThree,
      Smelter,
      new Placeholder(),
      Fractionator,
      ChemicalPlant,
      MatrixLab,
      OrbitCollector,
      new Placeholder(),
      new Placeholder(),
      new Placeholder(),
    ], 4)
  ]
}
