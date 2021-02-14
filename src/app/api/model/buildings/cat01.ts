import {Item} from '../item';
import {
  ACCUMULATOR,
  ARTIFICIAL_STAR,
  ASSEMBLER,
  ENERGY_EXCHANGER,
  MINI_FUSION_POWER_STATION,
  RAY_RECEIVER,
  SATELLITE_SUBSTATION,
  SOLAR_PANEL,
  TESLA_TOWER,
  THERMAL_POWER_STATION,
  WIND_TURBINE,
  WIRELESS_POWER_TOWER
} from '../util/constants/names';
import {Input} from '../util/input';
import {
  CarbonNanotube,
  CircuitBoard,
  CopperIngot,
  CrystalSilicon,
  FrameMaterial,
  Gear,
  HighPuritySilicon,
  IronIngot,
  MagneticCoil,
  ParticleContainer,
  PhotonCombiner,
  PlasmaExciter,
  Processor,
  QuantumChip,
  Steel,
  Stone,
  SuperMagneticRing,
  TitaniumAlloy
} from '../components/components';


export const Accumulator: Item = {
  baseItem: false,
  veinType: '',

  name: ACCUMULATOR,
  processingTime: 5,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 6),
    new Input(SuperMagneticRing, 6),
    new Input(CrystalSilicon, 4),
  ],
  outputAmount: 1,
  imageSource: 'buildings/accumulator',
}

export const MiniFusionPowerStation: Item = {
  baseItem: false,
  veinType: '',

  name: MINI_FUSION_POWER_STATION,
  processingTime: 10,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(TitaniumAlloy, 12),
    new Input(SuperMagneticRing, 10),
    new Input(CarbonNanotube, 8),
    new Input(Processor, 4),
  ],
  outputAmount: 1,
  imageSource: 'buildings/fusion_power_station',
}

export const RayReceiver: Item = {
  baseItem: false,
  veinType: '',

  name: RAY_RECEIVER,
  processingTime: 8,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Steel, 20),
    new Input(HighPuritySilicon, 20),
    new Input(PhotonCombiner, 10),
    new Input(Processor, 5),
    new Input(SuperMagneticRing, 20),
  ],
  outputAmount: 1,
  imageSource: 'buildings/ray_receiver',
}

export const SolarPanel: Item = {
  baseItem: false,
  veinType: '',

  name: SOLAR_PANEL,
  processingTime: 5,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(CopperIngot, 6),
    new Input(HighPuritySilicon, 6),
    new Input(CircuitBoard, 4),
  ],
  outputAmount: 1,
  imageSource: 'buildings/solar_panel',
}

export const TeslaTower: Item = {
  baseItem: false,
  veinType: '',

  name: TESLA_TOWER,
  processingTime: 1,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 2),
    new Input(MagneticCoil, 1),
  ],
  outputAmount: 1,
  imageSource: 'buildings/tesla_coil',
}

export const ThermalPowerStation: Item = {
  baseItem: false,
  veinType: '',

  name: THERMAL_POWER_STATION,
  processingTime: 5,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 10),
    new Input(Stone, 4),
    new Input(Gear, 4),
    new Input(MagneticCoil, 4),
  ],
  outputAmount: 1,
  imageSource: 'buildings/fuel_plant',
}

export const WindTurbine: Item = {
  baseItem: false,
  veinType: '',

  name: WIND_TURBINE,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 6),
    new Input(Gear, 1),
    new Input(MagneticCoil, 3),
  ],
  outputAmount: 1,
  imageSource: 'buildings/wind_turbine',
}

export const WirelessPowerTower: Item = {
  baseItem: false,
  veinType: '',

  name: WIRELESS_POWER_TOWER,
  processingTime: 3,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(TeslaTower, 1),
    new Input(PlasmaExciter, 3),
  ],
  outputAmount: 1,
  imageSource: 'buildings/charging_pole',
}

export const SatelliteSubstation: Item = {
  baseItem: false,
  veinType: '',

  name: SATELLITE_SUBSTATION,
  processingTime: 5,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(WirelessPowerTower, 1),
    new Input(SuperMagneticRing, 10),
    new Input(FrameMaterial, 2),
  ],
  outputAmount: 1,
  imageSource: 'buildings/orbital_substation',
}

// @ts-ignore
export const EnergyExchanger: Item = {
  baseItem: false,
  veinType: '',

  name: ENERGY_EXCHANGER,
  processingTime: 15,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(TitaniumAlloy, 40),
    new Input(Steel, 40),
    new Input(Processor, 40),
    new Input(ParticleContainer, 8),
  ],
  outputAmount: 1,
  imageSource: 'buildings/energy_exchanger',
}

export const ArtificialStar: Item = {
  baseItem: false,
  veinType: '',

  name: ARTIFICIAL_STAR,
  processingTime: 30,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(TitaniumAlloy, 20),
    new Input(FrameMaterial, 20),
    new Input(FrameMaterial, 10),
    new Input(QuantumChip, 10),
  ],
  outputAmount: 1,
  imageSource: 'buildings/fusion_reactor',
}
