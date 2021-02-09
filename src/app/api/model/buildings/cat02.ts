import {Item} from '../item';
import {
  ASSEMBLER, CONVEYOR_BELT_MK_1, CONVEYOR_BELT_MK_2, CONVEYOR_BELT_MK_3, EM_RAIL_EJECTOR, MINI_PARTICLE_COLLIDER,
  PLANETARY_LOGISTICS_STATION,
  SPLITTER,
  STORAGE_MK_1,
  STORAGE_MK_2,
  STORAGE_TANK
} from '../util/constants/names';
import {Input} from '../util/input';

import {
  CircuitBoard,
  ElectromagneticTurbine, FrameMaterial, Gear, Glass,
  Graphene,
  IronIngot,
  ParticleContainer,
  Processor, Steel,
  Stone, SuperMagneticRing, TitaniumAlloy,
  TitaniumIngot
} from '../components/cat01';

export const StorageTwo: Item = {
  baseItem: false,
  veinType: '',

  name: STORAGE_MK_2,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Steel, 8),
    new Input(Stone, 8),
  ],
  outputAmount: 1,
  imageSource: 'buildings/storage_2',
}

export const StorageTank: Item = {
  baseItem: false,
  veinType: '',

  name: STORAGE_TANK,
  processingTime: 2,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 8),
    new Input(Stone, 4),
    new Input(Glass, 4),
  ],
  outputAmount: 1,
  imageSource: 'buildings/storage_tank',
}

export const StorageOne: Item = {
  baseItem: false,
  veinType: '',

  name: STORAGE_MK_1,
  processingTime: 2,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 4),
    new Input(Stone, 4),
  ],
  outputAmount: 1,
  imageSource: 'buildings/storage_1',
}

export const Splitter: Item = {
  baseItem: false,
  veinType: '',

  name: SPLITTER,
  processingTime: 2,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 3),
    new Input(Gear, 2),
    new Input(CircuitBoard, 1),
  ],
  outputAmount: 1,
  imageSource: 'buildings/splitter_4dir',
}

export const PlanetaryLogisticsStation: Item = {
  baseItem: false,
  veinType: '',

  name: PLANETARY_LOGISTICS_STATION,
  processingTime: 20,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Steel, 40),
    new Input(TitaniumIngot, 40),
    new Input(Processor, 40),
    new Input(ParticleContainer, 20),
  ],
  outputAmount: 1,
  imageSource: 'buildings/logistic_station',
}

export const MiniParticleCollider: Item = {
  baseItem: false,
  veinType: '',

  name: MINI_PARTICLE_COLLIDER,
  processingTime: 15,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(TitaniumAlloy, 20),
    new Input(FrameMaterial, 20),
    new Input(SuperMagneticRing, 50),
    new Input(Graphene, 10),
    new Input(Processor, 8),
  ],
  outputAmount: 1,
  imageSource: 'buildings/hadron_collider',
}

export const EmRailEjector: Item = {
  baseItem: false,
  veinType: '',

  name: EM_RAIL_EJECTOR,
  processingTime: 6,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Steel, 20),
    new Input(Gear, 20),
    new Input(Processor, 5),
    new Input(SuperMagneticRing, 10),
  ],
  outputAmount: 1,
  imageSource: 'buildings/em_rail_ejector',
}

export const ConveyorBeltOne: Item = {
  baseItem: false,
  veinType: '',

  name: CONVEYOR_BELT_MK_1,
  processingTime: 1,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 2),
    new Input(Gear, 1),
  ],
  outputAmount: 3,
  imageSource: 'buildings/belt_1',
}

export const ConveyorBeltTwo: Item = {
  baseItem: false,
  veinType: '',

  name: CONVEYOR_BELT_MK_2,
  processingTime: 1,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(ConveyorBeltOne, 3),
    new Input(ElectromagneticTurbine, 1),
  ],
  outputAmount: 3,
  imageSource: 'buildings/belt_2',
}


export const ConveyorBeltThree: Item = {
  baseItem: false,
  veinType: '',

  name: CONVEYOR_BELT_MK_3,
  processingTime: 1,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(ConveyorBeltTwo, 3),
    new Input(SuperMagneticRing, 1),
    new Input(Graphene, 1),
  ],
  outputAmount: 3,
  imageSource: 'buildings/belt_3',
}
