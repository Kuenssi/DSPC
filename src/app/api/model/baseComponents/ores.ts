import {Item} from '../item';
import {
  COAL_ORE,
  COAL_VEIN,
  COPPER_ORE,
  COPPER_VEIN,
  FIRE_ICE,
  FIRE_ICE_VEIN,
  FRACTAL_SILICON,
  FRACTAL_SILICON_VEIN,
  IRON_ORE,
  IRON_VEIN,
  KIMBERLITE_ORE,
  KIMBERLITE_VEIN,
  MINING_MACHINE,
  OPTICAL_GRATING_CRYSTAL,
  OPTICAL_GRATING_CRYSTAL_VEIN,
  SILICON_ORE,
  SILICON_VEIN, SPINIFORM_STALGMITE_CRYSTAL, SPINIFORM_STALGMITE_CRYSTAL_VEIN,
  STONE_ORE,
  STONE_VEIN,
  TITANIUM_ORE,
  TITANIUM_VEIN, UNIPOLAR_MAGNET, UNIPOLAR_MAGNET_VEIN
} from '../util/constants/names';

export const CoalOre: Item = {
  baseItem: true,
  imageSource: 'base/coal_ore',
  inputs: [],
  name: COAL_ORE,
  neededMachine: MINING_MACHINE,
  outputAmount: 0,
  processingTime: 0,
  veinType: COAL_VEIN
}

export const CopperOre: Item = {
  baseItem: true,
  imageSource: 'base/copper_ore',
  inputs: [],
  name: COPPER_ORE,
  neededMachine: MINING_MACHINE,
  outputAmount: 0,
  processingTime: 0,
  veinType: COPPER_VEIN
}

export const IronOre: Item = {
  baseItem: true,
  imageSource: 'base/iron_ore',
  inputs: [],
  name: IRON_ORE,
  neededMachine: MINING_MACHINE,
  outputAmount: 0,
  processingTime: 0,
  veinType: IRON_VEIN
}

export const KimberliteOre: Item = {
  baseItem: true,
  imageSource: 'base/diamond_ore',
  inputs: [],
  name: KIMBERLITE_ORE,
  neededMachine: MINING_MACHINE,
  outputAmount: 0,
  processingTime: 0,
  veinType: KIMBERLITE_VEIN
}

export const SiliconOre: Item = {
  baseItem: true,
  imageSource: 'base/silicium_ore',
  inputs: [],
  name: SILICON_ORE,
  neededMachine: MINING_MACHINE,
  outputAmount: 0,
  processingTime: 0,
  veinType: SILICON_VEIN
}

export const StoneOre: Item = {
  baseItem: true,
  imageSource: 'base/stone_ore',
  inputs: [],
  name: STONE_ORE,
  neededMachine: MINING_MACHINE,
  outputAmount: 0,
  processingTime: 0,
  veinType: STONE_VEIN
}

export const TitaniumOre: Item = {
  baseItem: true,
  imageSource: 'base/titanium_ore',
  inputs: [],
  name: TITANIUM_ORE,
  neededMachine: MINING_MACHINE,
  outputAmount: 0,
  processingTime: 0,
  veinType: TITANIUM_VEIN
}

export const FractalSilicon: Item = {
  baseItem: true,
  imageSource: 'base/fractal_silica',
  inputs: [],
  name: FRACTAL_SILICON,
  neededMachine: MINING_MACHINE,
  outputAmount: 0,
  processingTime: 0,
  veinType: FRACTAL_SILICON_VEIN
}

export const FireIce: Item = {
  baseItem: true,
  imageSource: 'base/gas_hydrate',
  inputs: [],
  name: FIRE_ICE,
  neededMachine: MINING_MACHINE,
  outputAmount: 0,
  processingTime: 0,
  veinType: FIRE_ICE_VEIN
}

export const OpticalGratingCrystal: Item = {
  baseItem: true,
  imageSource: 'base/grating_ore',
  inputs: [],
  name: OPTICAL_GRATING_CRYSTAL,
  neededMachine: MINING_MACHINE,
  outputAmount: 0,
  processingTime: 0,
  veinType: OPTICAL_GRATING_CRYSTAL_VEIN
}

export const SpiniformStalagmiteCrystal: Item = {
  baseItem: true,
  imageSource: 'base/bamboo_crystal',
  inputs: [],
  name: SPINIFORM_STALGMITE_CRYSTAL,
  neededMachine: MINING_MACHINE,
  outputAmount: 0,
  processingTime: 0,
  veinType: SPINIFORM_STALGMITE_CRYSTAL_VEIN
}

export const UnipolarMagnet: Item = {
  baseItem: true,
  imageSource: 'base/mono_mag_ore',
  inputs: [],
  name: UNIPOLAR_MAGNET,
  neededMachine: MINING_MACHINE,
  outputAmount: 0,
  processingTime: 0,
  veinType: UNIPOLAR_MAGNET_VEIN
}
