import {Item} from '../item';
import {
  ASSEMBLER, ASSEMBLING_MACHINE_MK_1,
  ASSEMBLING_MACHINE_MK_2, ASSEMBLING_MACHINE_MK_3,
  CHEMICAL_PLANT,
  FRACTIONATOR,
  MATRIX_LAB,
  ORBIT_COLLECTOR,
  SMELTER
} from '../util/constants/names';
import {Input} from '../util/input';
import {InterstellarLogisticsStation} from './cat03';
import {Accumulator} from './cat01';
import {
  CircuitBoard,
  Gear,
  Glass, Graphene, IronIngot,
  MagneticCoil, ParticleBroadband,
  Processor,
  QuantumChip,
  ReinforcedThruster,
  Steel,
  Stone, SuperMagneticRing
} from '../components/cat01';


export const Smelter: Item = {
  baseItem: false,
  veinType: '',

  name: SMELTER,
  processingTime: 3,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 4),
    new Input(Stone, 2),
    new Input(CircuitBoard, 4),
    new Input(MagneticCoil, 2),
  ],
  outputAmount: 1,
  imageSource: 'buildings/smelter',
}

export const OrbitCollector: Item = {
  baseItem: false,
  veinType: '',

  name: ORBIT_COLLECTOR,
  processingTime: 30,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(InterstellarLogisticsStation, 1),
    new Input(SuperMagneticRing, 50),
    new Input(ReinforcedThruster, 20),
    new Input(Accumulator, 20),
  ],
  outputAmount: 1,
  imageSource: 'buildings/orbital_collector',
}

export const MatrixLab: Item = {
  baseItem: false,
  veinType: '',

  name: MATRIX_LAB,
  processingTime: 3,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 8),
    new Input(Glass, 4),
    new Input(CircuitBoard, 4),
    new Input(MagneticCoil, 4),
  ],
  outputAmount: 1,
  imageSource: 'buildings/lab',
}

export const Fractionator: Item = {
  baseItem: false,
  veinType: '',

  name: FRACTIONATOR,
  processingTime: 3,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Steel, 8),
    new Input(Stone, 4),
    new Input(Glass, 4),
    new Input(Processor, 1),
  ],
  outputAmount: 1,
  imageSource: 'buildings/fractionator',
}

export const ChemicalPlant: Item = {
  baseItem: false,
  veinType: '',

  name: CHEMICAL_PLANT,
  processingTime: 5,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Steel, 8),
    new Input(Stone, 8),
    new Input(Glass, 8),
    new Input(CircuitBoard, 2),
  ],
  outputAmount: 1,
  imageSource: 'buildings/chemical_plant',
}

export const AssemblerOne: Item = {
  baseItem: false,
  veinType: '',

  name: ASSEMBLING_MACHINE_MK_1,
  processingTime: 2,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 4),
    new Input(Gear, 8),
    new Input(CircuitBoard, 4),
  ],
  outputAmount: 1,
  imageSource: 'buildings/assembler_1',
}

export const AssemblerTwo: Item = {
  baseItem: false,
  veinType: '',

  name: ASSEMBLING_MACHINE_MK_2,
  processingTime: 3,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(AssemblerOne, 1),
    new Input(Graphene, 8),
    new Input(Processor, 4),
  ],
  outputAmount: 1,
  imageSource: 'buildings/assembler_2',
}

export const AssemblerThree: Item = {
  baseItem: false,
  veinType: '',

  name: ASSEMBLING_MACHINE_MK_3,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(AssemblerTwo, 1),
    new Input(ParticleBroadband, 8),
    new Input(QuantumChip, 2),
  ],
  outputAmount: 1,
  imageSource: 'buildings/assembler_3',
}
