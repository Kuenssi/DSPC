import {Item} from '../item';
import {
  A_CARBON_NANOTUBE,
  A_CASIMIR_CRYSTAL,
  A_CRYSTAL_SILICON,
  A_DIAMOND,
  A_PARTICLE_CONTAINER,
  A_PHOTON_COMBINER,
  A_SPACE_WARPER, ANNIHILATION_CONSTRAINT_SPHERE, ANTIMATTER_FUEL_ROD,
  ASSEMBLER,
  CARBON_NANOTUBE,
  CASIMIR_CRYSTAL,
  CHEMICAL_PLANT,
  CIRCUIT_BOARD,
  COPPER_INGOT,
  CRYSTAL_SILICON,
  DEUTERIUM,
  DEUTERON_FUEL_ROD,
  DIAMOND,
  DYSON_SPHERE_COMPONENT,
  ELECTRIC_MOTOR,
  ELECTROMAGNETIC_MATRIX,
  ELECTROMAGNETIC_TURBINE,
  ENERGETIC_GRAPHITE,
  ENERGY_MATRIX,
  FOUNDATION,
  FRAME_MATERIAL,
  GEAR,
  GLASS,
  GRAPHENE,
  GRAVITON_LENS,
  GRAVITY_MATRIX,
  HIGH_PURITY_SILICON,
  HYDROGEN_FUEL_ROD,
  INFORMATION_MATRIX,
  IRON_INGOT,
  LOGISTICS_DRONE,
  LOGISTICS_VESSEL,
  MAGNET,
  MAGNETIC_COIL,
  MICROCRYSTALLINE_COMPONENT,
  MINI_PARTICLE_COLLIDER,
  ORGANIC_CRYSTAL,
  PARTICLE_BROADBAND,
  PARTICLE_CONTAINER,
  PHOTON_COMBINER,
  PLANE_FILTER,
  PLASMA_EXCITER,
  PLASTIC,
  PRISMA,
  PROCESSOR,
  QUANTUM_CHIP,
  REINFORCED_THRUSTER,
  RESEARCH_FACILITY,
  SILICON_ORE_FROM_STONE,
  SMALL_CARRIER_ROCKET,
  SMELTER,
  SOLAR_SAIL,
  SPACE_WARPER,
  STEEL,
  STONE, STRANGE_MATTER,
  STRUCTURE_MATRIX,
  SULFURIC_ACID,
  SUPER_MAGNETIC_RING,
  THRUSTER, TITANIUM_ALLOY, TITANIUM_CRYSTAL, TITANIUM_GLASS,
  TITANIUM_INGOT
} from '../util/constants/names';
import {Input} from '../util/input';
import {
  CoalOre,
  CopperOre, FractalSilicon,
  IronOre, KimberliteOre, OpticalGratingCrystal,
  SiliconOre,
  SpiniformStalagmiteCrystal,
  StoneOre,
  TitaniumOre, UnipolarMagnet
} from '../baseComponents/ores';
import {Antimatter, Hydrogen, RefinedOil, Water} from '../baseComponents/fluids';

export const CopperIngot: Item = {
  baseItem: false,
  veinType: '',

  name: COPPER_INGOT,
  processingTime: 1,
  neededMachine: SMELTER,
  inputs: [
    new Input(CopperOre, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/copper_plate',
}

export const EnergeticGraphite: Item = {
  baseItem: false,
  veinType: '',

  name: ENERGETIC_GRAPHITE,
  processingTime: 2,
  neededMachine: SMELTER,
  inputs: [
    new Input(CoalOre, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/graphite',
}

export const HighPuritySilicon: Item = {
  baseItem: false,
  veinType: '',

  name: HIGH_PURITY_SILICON,
  processingTime: 2,
  neededMachine: SMELTER,
  inputs: [
    new Input(SiliconOre, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/silicium_high_purity',
}

export const IronIngot: Item = {
  baseItem: false,
  veinType: '',

  name: IRON_INGOT,
  processingTime: 1,
  neededMachine: SMELTER,
  inputs: [
    new Input(IronOre, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/iron_plate',
}

export const Plastic: Item = {
  baseItem: false,
  veinType: '',

  name: PLASTIC,
  processingTime: 3,
  neededMachine: CHEMICAL_PLANT,
  inputs: [
    new Input(RefinedOil, 2),
    new Input(EnergeticGraphite, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/plastic',
}

export const Stone: Item = {
  baseItem: false,
  veinType: '',

  name: STONE,
  processingTime: 1,
  neededMachine: SMELTER,
  inputs: [
    new Input(StoneOre, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/stone_brick',
}

export const TitaniumIngot: Item = {
  baseItem: false,
  veinType: '',

  name: TITANIUM_INGOT,
  processingTime: 2,
  neededMachine: SMELTER,
  inputs: [
    new Input(TitaniumOre, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/titanium_plate',
}

export const CrystalSilicon: Item = {
  baseItem: false,
  veinType: '',

  name: CRYSTAL_SILICON,
  processingTime: 2,
  neededMachine: SMELTER,
  inputs: [
    new Input(HighPuritySilicon, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/silicium_single_crystal',
}

export const Diamond: Item = {
  baseItem: false,
  veinType: '',

  name: DIAMOND,
  processingTime: 2,
  neededMachine: SMELTER,
  inputs: [
    new Input(EnergeticGraphite, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/diamond',
}

export const Glass: Item = {
  baseItem: false,
  veinType: '',

  name: GLASS,
  processingTime: 2,
  neededMachine: SMELTER,
  inputs: [
    new Input(StoneOre, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/glass',
}

export const HydrogenFuelRod: Item = {
  baseItem: false,
  veinType: '',

  name: HYDROGEN_FUEL_ROD,
  processingTime: 3,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(TitaniumIngot, 1),
    new Input(Hydrogen, 5),
  ],
  outputAmount: 1,
  imageSource: 'components/hydrogen_energy_fuel',
}

export const Magnet: Item = {
  baseItem: false,
  veinType: '',

  name: MAGNET,
  processingTime: 1.5,
  neededMachine: SMELTER,
  inputs: [
    new Input(IronOre, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/magnet',
}

export const OrganicCrystal: Item = {
  baseItem: false,
  veinType: '',

  name: ORGANIC_CRYSTAL,
  processingTime: 6,
  neededMachine: CHEMICAL_PLANT,
  inputs: [
    new Input(Plastic, 2),
    new Input(RefinedOil, 1),
    new Input(Water, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/crystal_rubber',
}

export const MagneticCoil: Item = {
  baseItem: false,
  veinType: '',

  name: MAGNETIC_COIL,
  processingTime: 1,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Magnet, 2),
    new Input(CopperIngot, 1),
  ],
  outputAmount: 2,
  imageSource: 'components/magnetism_wire',
}


export const TitaniumGlass: Item = {
  baseItem: false,
  veinType: '',

  name: TITANIUM_GLASS,
  processingTime: 5,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Glass, 2),
    new Input(TitaniumIngot, 2),
    new Input(Water, 2),
  ],
  outputAmount: 2,
  imageSource: 'components/titan_glass',
}

export const TitaniumCrystal: Item = {
  baseItem: false,
  veinType: '',

  name: TITANIUM_CRYSTAL,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(OrganicCrystal, 1),
    new Input(TitaniumIngot, 3),
  ],
  outputAmount: 1,
  imageSource: 'components/titan_crystal',
}

export const Steel: Item = {
  baseItem: false,
  veinType: '',

  name: STEEL,
  processingTime: 3,
  neededMachine: SMELTER,
  inputs: [
    new Input(IronIngot, 3),
  ],
  outputAmount: 1,
  imageSource: 'components/steel_plate',
}

export const Thruster: Item = {
  baseItem: false,
  veinType: '',

  name: THRUSTER,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Steel, 2),
    new Input(CopperIngot, 3),
  ],
  outputAmount: 1,
  imageSource: 'components/fuel_thruster',
}

export const Prisma: Item = {
  baseItem: false,
  veinType: '',

  name: PRISMA,
  processingTime: 2,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Glass, 3),
  ],
  outputAmount: 2,
  imageSource: 'components/prism',
}

export const Gear: Item = {
  baseItem: false,
  veinType: '',

  name: GEAR,
  processingTime: 1,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/gear_wheel',
}

export const ElectricMotor: Item = {
  baseItem: false,
  veinType: '',

  name: ELECTRIC_MOTOR,
  processingTime: 2,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 2),
    new Input(Gear, 1),
    new Input(MagneticCoil, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/electric_motor',
}

export const AdvancedDiamond: Item = {
  baseItem: false,
  veinType: '',

  name: A_DIAMOND,
  processingTime: 2,
  neededMachine: SMELTER,
  inputs: [
    new Input(KimberliteOre, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/diamond_lv2',
}

export const AdvancedCrystalSilicon: Item = {
  baseItem: false,
  veinType: '',

  name: A_CRYSTAL_SILICON,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(FractalSilicon, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/silicium_single_crystal_lv2',
}
export const SulfuricAcid: Item = {
  baseItem: false,
  veinType: '',

  name: SULFURIC_ACID,
  processingTime: 6,
  neededMachine: CHEMICAL_PLANT,
  inputs: [
    new Input(RefinedOil, 6),
    new Input(StoneOre, 8),
    new Input(Water, 4),
  ],
  outputAmount: 4,
  imageSource: 'components/sulphuric_acid',
}

export const Graphene: Item = {
  baseItem: false,
  veinType: '',

  name: GRAPHENE,
  processingTime: 3,
  neededMachine: CHEMICAL_PLANT,
  inputs: [
    new Input(EnergeticGraphite, 3),
    new Input(SulfuricAcid, 1),
  ],
  outputAmount: 2,
  imageSource: 'components/graphene',
}


export const SiliconOreFromStone: Item = {
  baseItem: false,
  veinType: '',

  name: SILICON_ORE_FROM_STONE,
  processingTime: 10,
  neededMachine: SMELTER,
  inputs: [
    new Input(StoneOre, 10),
  ],
  outputAmount: 1,
  imageSource: 'base/silicium_ore',
}


export const ElectromagneticTurbine: Item = {
  baseItem: false,
  veinType: '',

  name: ELECTROMAGNETIC_TURBINE,
  processingTime: 2,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(ElectricMotor, 2),
    new Input(MagneticCoil, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/mag_turbine',
}

export const CircuitBoard: Item = {
  baseItem: false,
  veinType: '',

  name: CIRCUIT_BOARD,
  processingTime: 1,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 2),
    new Input(CopperIngot, 1),
  ],
  outputAmount: 2,
  imageSource: 'components/circuit_board',
}

export const CarbonNanotube: Item = {
  baseItem: false,
  veinType: '',

  name: CARBON_NANOTUBE,
  processingTime: 4,
  neededMachine: CHEMICAL_PLANT,
  inputs: [
    new Input(Graphene, 3),
    new Input(TitaniumIngot, 1),
  ],
  outputAmount: 2,
  imageSource: 'components/nanotube',
}

export const Deuterium: Item = {
  baseItem: false,
  veinType: '',

  name: DEUTERIUM,
  processingTime: 5,
  neededMachine: MINI_PARTICLE_COLLIDER,
  inputs: [
    new Input(Hydrogen, 10),
  ],
  outputAmount: 5,
  imageSource: 'components/deuterium',
}

export const ParticleContainer: Item = {
  baseItem: false,
  veinType: '',

  name: PARTICLE_CONTAINER,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(ElectromagneticTurbine, 2),
    new Input(CopperIngot, 2),
    new Input(Graphene, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/partical_capacitor',
}

export const ParticleBroadband: Item = {
  baseItem: false,
  veinType: '',

  name: PARTICLE_BROADBAND,
  processingTime: 8,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(CarbonNanotube, 2),
    new Input(CrystalSilicon, 2),
    new Input(Plastic, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/particle_wide_band',
}

export const CasimirCrystal: Item = {
  baseItem: false,
  veinType: '',

  name: CASIMIR_CRYSTAL,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(TitaniumCrystal, 1),
    new Input(Graphene, 2),
    new Input(Hydrogen, 12),
  ],
  outputAmount: 1,
  imageSource: 'components/casimir_crystal',
}

export const PlaneFilter: Item = {
  baseItem: false,
  veinType: '',

  name: PLANE_FILTER,
  processingTime: 12,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(CasimirCrystal, 1),
    new Input(TitaniumGlass, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/plane_filter',
}


export const AdvancedCarbonNanotube: Item = {
  baseItem: false,
  veinType: '',

  name: A_CARBON_NANOTUBE,
  processingTime: 4,
  neededMachine: CHEMICAL_PLANT,
  inputs: [
    new Input(SpiniformStalagmiteCrystal, 2),
  ],
  outputAmount: 2,
  imageSource: 'components/nanotube_lv2',
}

export const SuperMagneticRing: Item = {
  baseItem: false,
  veinType: '',

  name: SUPER_MAGNETIC_RING,
  processingTime: 3,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(ElectromagneticTurbine, 2),
    new Input(Magnet, 3),
    new Input(EnergeticGraphite, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/hyper_magnetism_ring',
}


export const PhotonCombiner: Item = {
  baseItem: false,
  veinType: '',

  name: PHOTON_COMBINER,
  processingTime: 3,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Prisma, 2),
    new Input(CircuitBoard, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/photo_shifter',
}

export const SolarSail: Item = {
  baseItem: false,
  veinType: '',

  name: SOLAR_SAIL,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Graphene, 1),
    new Input(PhotonCombiner, 1),
  ],
  outputAmount: 2,
  imageSource: 'components/solar_collector',
}


export const MicrocrystallineComponent: Item = {
  baseItem: false,
  veinType: '',

  name: MICROCRYSTALLINE_COMPONENT,
  processingTime: 2,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(HighPuritySilicon, 2),
    new Input(CopperIngot, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/micro_component',
}

export const Processor: Item = {
  baseItem: false,
  veinType: '',

  name: PROCESSOR,
  processingTime: 3,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(CircuitBoard, 2),
    new Input(MicrocrystallineComponent, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/processor',
}

export const PlasmaExciter: Item = {
  baseItem: false,
  veinType: '',

  name: PLASMA_EXCITER,
  processingTime: 2,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(MagneticCoil, 4),
    new Input(Prisma, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/plasma_generator',
}


export const QuantumChip: Item = {
  baseItem: false,
  veinType: '',

  name: QUANTUM_CHIP,
  processingTime: 6,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Processor, 2),
    new Input(PlaneFilter, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/quantum_processor',
}


export const LogisticsDrone: Item = {
  baseItem: false,
  veinType: '',

  name: LOGISTICS_DRONE,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(IronIngot, 5),
    new Input(Processor, 2),
    new Input(Thruster, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/logistic_drone',
}

export const TitaniumAlloy: Item = {
  baseItem: false,
  veinType: '',

  name: TITANIUM_ALLOY,
  processingTime: 12,
  neededMachine: SMELTER,
  inputs: [
    new Input(TitaniumIngot, 4),
    new Input(Steel, 4),
    new Input(SulfuricAcid, 8),
  ],
  outputAmount: 4,
  imageSource: 'components/titanium_alloy',
}

export const FrameMaterial: Item = {
  baseItem: false,
  veinType: '',

  name: FRAME_MATERIAL,
  processingTime: 6,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(CarbonNanotube, 4),
    new Input(TitaniumAlloy, 1),
    new Input(HighPuritySilicon, 1),
  ],
  outputAmount: 6,
  imageSource: 'components/frame_material',
}

export const DysonSphereComponent: Item = {
  baseItem: false,
  veinType: '',

  name: DYSON_SPHERE_COMPONENT,
  processingTime: 8,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(FrameMaterial, 3),
    new Input(SolarSail, 3),
    new Input(Processor, 3),
  ],
  outputAmount: 1,
  imageSource: 'components/dyson_sphere_component',
}

export const AdvancedPhotonCombiner: Item = {
  baseItem: false,
  veinType: '',

  name: A_PHOTON_COMBINER,
  processingTime: 3,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(OpticalGratingCrystal, 1),
    new Input(CircuitBoard, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/photo_shifter_lv2',
}

export const AdvancedParticleContainer: Item = {
  baseItem: false,
  veinType: '',

  name: A_PARTICLE_CONTAINER,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(UnipolarMagnet, 10),
    new Input(CopperIngot, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/partical_capacitor_lv2',
}

export const AdvancedCasimirCrystal: Item = {
  baseItem: false,
  veinType: '',

  name: A_CASIMIR_CRYSTAL,
  processingTime: 4,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(OpticalGratingCrystal, 6),
    new Input(Graphene, 2),
    new Input(Hydrogen, 12),
  ],
  outputAmount: 1,
  imageSource: 'components/casimir_crystal_lv2',
}

export const StructureMatrix: Item = {
  baseItem: false,
  veinType: '',

  name: STRUCTURE_MATRIX,
  processingTime: 8,
  neededMachine: RESEARCH_FACILITY,
  inputs: [
    new Input(Diamond, 1),
    new Input(TitaniumCrystal, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/c_matrix',
}

export const InformationMatrix: Item = {
  baseItem: false,
  veinType: '',

  name: INFORMATION_MATRIX,
  processingTime: 10,
  neededMachine: RESEARCH_FACILITY,
  inputs: [
    new Input(Processor, 2),
    new Input(ParticleBroadband, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/i_matrix',
}

export const Foundation: Item = {
  baseItem: false,
  veinType: '',

  name: FOUNDATION,
  processingTime: 1,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Stone, 3),
    new Input(Steel, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/terrain_tool',
}
export const StrangeMatter: Item = {
  baseItem: false,
  veinType: '',

  name: STRANGE_MATTER,
  processingTime: 8,
  neededMachine: MINI_PARTICLE_COLLIDER,
  inputs: [
    new Input(ParticleContainer, 2),
    new Input(IronIngot, 2),
    new Input(Deuterium, 10),
  ],
  outputAmount: 1,
  imageSource: 'components/strange_matter_generator',
}

export const GravitonLens: Item = {
  baseItem: false,
  veinType: '',

  name: GRAVITON_LENS,
  processingTime: 6,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Diamond, 4),
    new Input(StrangeMatter, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/gravity_lens',
}

export const SpaceWarper: Item = {
  baseItem: false,
  veinType: '',

  name: SPACE_WARPER,
  processingTime: 10,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(GravitonLens, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/space_warper',
}

export const GravityMatrix: Item = {
  baseItem: false,
  veinType: '',

  name: GRAVITY_MATRIX,
  processingTime: 24,
  neededMachine: RESEARCH_FACILITY,
  inputs: [
    new Input(GravitonLens, 1),
    new Input(QuantumChip, 1),
  ],
  outputAmount: 2,
  imageSource: 'components/g_matrix',
}


export const AdvancedSpaceWarper: Item = {
  baseItem: false,
  veinType: '',

  name: A_SPACE_WARPER,
  processingTime: 10,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(GravityMatrix, 1),
  ],
  outputAmount: 8,
  imageSource: 'components/space_warper_lv2',
}

export const EnergyMatrix: Item = {
  baseItem: false,
  veinType: '',

  name: ENERGY_MATRIX,
  processingTime: 6,
  neededMachine: RESEARCH_FACILITY,
  inputs: [
    new Input(EnergeticGraphite, 2),
    new Input(Hydrogen, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/t_matrix',
}

export const ElectromagneticMatrix: Item = {
  baseItem: false,
  veinType: '',

  name: ELECTROMAGNETIC_MATRIX,
  processingTime: 3,
  neededMachine: RESEARCH_FACILITY,
  inputs: [
    new Input(MagneticCoil, 1),
    new Input(CircuitBoard, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/e_matrix',
}


export const ReinforcedThruster: Item = {
  baseItem: false,
  veinType: '',

  name: REINFORCED_THRUSTER,
  processingTime: 6,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(TitaniumAlloy, 5),
    new Input(ElectromagneticTurbine, 5),
  ],
  outputAmount: 1,
  imageSource: 'components/ion_thruster',
}


export const DeuteronFuelRod: Item = {
  baseItem: false,
  veinType: '',

  name: DEUTERON_FUEL_ROD,
  processingTime: 6,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(TitaniumAlloy, 1),
    new Input(Deuterium, 10),
    new Input(SuperMagneticRing, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/deuterium_energy_fuel',
}

export const SmallCarrierRocket: Item = {
  baseItem: false,
  veinType: '',

  name: SMALL_CARRIER_ROCKET,
  processingTime: 6,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(DysonSphereComponent, 2),
    new Input(DeuteronFuelRod, 2),
    new Input(QuantumChip, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/rocket',
}

export const LogisticsVessel: Item = {
  baseItem: false,
  veinType: '',

  name: LOGISTICS_VESSEL,
  processingTime: 6,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(TitaniumAlloy, 10),
    new Input(Processor, 10),
    new Input(ReinforcedThruster, 2),
  ],
  outputAmount: 1,
  imageSource: 'components/logistic_vessel',
}

export const AnnihilationConstraintSphere: Item = {
  baseItem: false,
  veinType: '',

  name: ANNIHILATION_CONSTRAINT_SPHERE,
  processingTime: 20,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(ParticleContainer, 1),
    new Input(Processor, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/fusion_capacitor',
}

export const AntimatterFuelRod: Item = {
  baseItem: false,
  veinType: '',

  name: ANTIMATTER_FUEL_ROD,
  processingTime: 12,
  neededMachine: ASSEMBLER,
  inputs: [
    new Input(Antimatter, 10),
    new Input(Hydrogen, 10),
    new Input(AnnihilationConstraintSphere, 1),
    new Input(TitaniumAlloy, 1),
  ],
  outputAmount: 1,
  imageSource: 'components/antimatter_energy_fuel',
}
