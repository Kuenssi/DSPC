import {Item} from '../item';
import {
  ASSEMBLER, INTERSTELLAR_LOGISTICS_STATION, MINING_MACHINE, OIL_EXTRACTOR, OIL_REFINERY,
  SORTER_MK_1,
  SORTER_MK_2,
  SORTER_MK_3,
  VERTICAL_LAUNCHING_SILO,
  WATER_PUMP
} from '../util/constants/names';
import {Input} from '../util/input';
import {PlanetaryLogisticsStation} from './cat02';
import {
  CircuitBoard,
  ElectricMotor,
  ElectromagneticTurbine, FrameMaterial, Gear, GravitonLens, IronIngot,
  MagneticCoil, ParticleContainer, PlasmaExciter, QuantumChip,
  Steel, Stone,
  TitaniumAlloy
} from '../components/cat01';


export const WaterPump: Item = {
  baseItem: false,
  veinType: '',

  name: WATER_PUMP,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 8),
    new Input(Stone, 4),
    new Input(ElectricMotor, 4),
    new Input(CircuitBoard, 2),
  ],
  outputAmount: 1,
  imageSource: 'buildings/water_pump',
}

export const VerticalLaunchingSilo: Item = {
  baseItem: false,
  veinType: '',

  name: VERTICAL_LAUNCHING_SILO,
  processingTime: 30,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(TitaniumAlloy, 80),
    new Input(FrameMaterial, 30),
    new Input(GravitonLens, 20),
    new Input(QuantumChip, 10),
  ],
  outputAmount: 1,
  imageSource: 'buildings/vertical_launching_silo',
}
export const SorterOne: Item = {
  baseItem: false,
  veinType: '',

  name: SORTER_MK_1,
  processingTime: 1,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 1),
    new Input(CircuitBoard, 1),
  ],
  outputAmount: 1,
  imageSource: 'buildings/inserter_1',
}

export const SorterTwo: Item = {
  baseItem: false,
  veinType: '',

  name: SORTER_MK_2,
  processingTime: 1,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(SorterOne, 2),
    new Input(ElectricMotor, 1),
  ],
  outputAmount: 2,
  imageSource: 'buildings/inserter_2',
}

export const SorterThree: Item = {
  baseItem: false,
  veinType: '',

  name: SORTER_MK_3,
  processingTime: 1,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(SorterTwo, 2),
    new Input(ElectromagneticTurbine, 1),
  ],
  outputAmount: 2,
  imageSource: 'buildings/inserter_3',
}

export const OilRefinery: Item = {
  baseItem: false,
  veinType: '',

  name: OIL_REFINERY,
  processingTime: 6,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Steel, 10),
    new Input(Stone, 10),
    new Input(CircuitBoard, 6),
    new Input(PlasmaExciter, 6),
  ],
  outputAmount: 1,
  imageSource: 'buildings/oil_refinery',
}

export const OilExtractor: Item = {
  baseItem: false,
  veinType: '',

  name: OIL_EXTRACTOR,
  processingTime: 8,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Steel, 12),
    new Input(Stone, 12),
    new Input(CircuitBoard, 6),
    new Input(PlasmaExciter, 4),
  ],
  outputAmount: 1,
  imageSource: 'buildings/oil_extractor',
}

export const MiningMachine: Item = {
  baseItem: false,
  veinType: '',

  name: MINING_MACHINE,
  processingTime: 3,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 4),
    new Input(CircuitBoard, 2),
    new Input(MagneticCoil, 2),
    new Input(Gear, 2),
  ],
  outputAmount: 1,
  imageSource: 'buildings/mining_drill',
}

export const InterstellarLogisticsStation: Item = {
  baseItem: false,
  veinType: '',

  name: INTERSTELLAR_LOGISTICS_STATION,
  processingTime: 30,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(PlanetaryLogisticsStation, 1),
    new Input(TitaniumAlloy, 40),
    new Input(ParticleContainer, 20),
  ],
  outputAmount: 1,
  imageSource: 'buildings/interstellar_logistic_station',
}
