import {Item} from '../item';
import {IronIngot} from './cat1/ironIngot';
import {CopperIngot} from './cat1/copperIngot';
import {HighPuritySilicon} from './cat1/highPuritySilicon';
import {TitaniumIngot} from './cat1/titaniumIngot';
import {Stone} from './cat1/stone';
import {ElectricMotor} from './cat3/electricMotor';
import {Plastic} from './cat1/plastic';
import {Graphene} from './cat1/graphene';
import {Magnet} from './cat2/magnet';
import {MagneticCoil} from './cat2/magneticCoil';
import {CrystalSilicon} from './cat2/crystalSilicon';
import {TitaniumAlloy} from './cat2/titaniumAlloy';
import {Glass} from './cat2/glass';
import {Diamond} from './cat2/diamond';
import {OrganicCrystal} from './cat2/organicCrystal';
import {HydrogenFuelRod} from './cat2/hydrogenFuelRod';
import {DeuteronFuelRod} from './cat2/deuteronFuelRod';
import {Steel} from './cat3/steel';
import {AdvancedCrystalSilicon} from './cat3/advancedCrystalSilicon';
import {TitaniumGlass} from './cat3/titaniumGlass';
import {Prisma} from './cat3/prisma';
import {AdvancedDiamond} from './cat3/advancedDiamond';
import {TitaniumCrystal} from './cat3/titaniumCrystal';
import {Thruster} from './cat3/thruster';
import {ReinforcedThruster} from './cat3/reinforcedThruster';
import {StrangeMatter} from './cat3/strangeMatter';
import {Gear} from './cat4/gear';
import {ElectromagneticTurbine} from './cat4/electromagneticTurbine';
import {SiliconOre} from '../baseComponents/siliconOre';
import {CircuitBoard} from './cat4/circuitBoard';
import {GravitonLens} from './cat4/gravitonLens';
import {SulfuricAcid} from './cat4/sulfuricAcid';
import {Deuterium} from './cat4/deuterium';
import {PlaneFilter} from './cat4/planeFilter';
import {CarbonNanotube} from './cat4/carbonNanotube';
import {LogisticsDrone} from './cat4/logisticsDrone';
import {LogisticsVessel} from './cat4/logisticsVessel';
import {SmallCarrierRocket} from './cat4/smallCarrierRocket';
import {PlasmaExciter} from './cat5/plasmaExciter';
import {SuperMagneticRing} from './cat5/superMagneticRing';
import {ParticleBroadband} from './cat5/particleBroadband';
import {Processor} from './cat5/processor';
import {CasimirCrystal} from './cat5/casimirCrystal';
import {ParticleContainer} from './cat5/particleContainer';
import {SpaceWarper} from './cat5/spaceWarper';
import {AdvancedCarbonNanotube} from './cat5/advancedCarbonNanotube';
import {SolarSail} from './cat5/solarSail';
import {FrameMaterial} from './cat5/frameMaterial';
import {DysonSphereComponent} from './cat5/dysonSphereComponent';
import {PhotonCombiner} from './cat6/photonCombiner';
import {AdvancedPhotonCombiner} from './cat6/advancedPhotonCombiner';
import {MicrocrystallineComponent} from './cat6/microcrystallineComponent';
import {QuantumChip} from './cat6/quantumChip';
import {AdvancedCasimirCrystal} from './cat6/advancedCasimirCrystal';
import {AdvancedParticleContainer} from './cat6/advancedParticleContainer';
import {AdvancedSpaceWarper} from './cat6/advancedSpaceWarper';
import {ElectromagneticMatrix} from './cat7/electromagneticMatrix';
import {EnergyMatrix} from './cat7/energyMatrix';
import {StructureMatrix} from './cat7/structureMatrix';
import {InformationMatrix} from './cat7/informationMatrix';
import {GravityMatrix} from './cat7/gravityMatrix';
import {Foundation} from './cat7/foundation';
import {EnergeticGraphite} from './cat1/energeticGraphite';
import {AdvancedGraphene} from '../multipleOutputs/advancedGraphene';

export class AllComponents {
  components: ComponentRow[];

  constructor() {
    this.components = [];
    this.components.push(
      new ComponentRow([
        new IronIngot(),
        new CopperIngot(),
        new HighPuritySilicon(),
        new TitaniumIngot(),
        new Stone(),
        new EnergeticGraphite(),
        new Plastic(),
        new Graphene()
      ], 1),
      new ComponentRow([
        new Magnet(),
        new MagneticCoil(),
        new CrystalSilicon(),
        new TitaniumAlloy(),
        new Glass(),
        new Diamond(),
        new OrganicCrystal(),
        new AdvancedGraphene(),
        new HydrogenFuelRod(),
        new DeuteronFuelRod()
      ], 2),
      new ComponentRow([
        new Steel(),
        new ElectricMotor(),
        new AdvancedCrystalSilicon(),
        new TitaniumGlass(),
        new Prisma(),
        new AdvancedDiamond(),
        new TitaniumCrystal(),
        new Thruster(),
        new ReinforcedThruster(),
        new StrangeMatter()
      ], 3),
      new ComponentRow([
        new Gear(),
        new ElectromagneticTurbine(),
        new SiliconOre(),
        new CircuitBoard(),
        new GravitonLens(),
        new SulfuricAcid(),
        new Deuterium(),
        new PlaneFilter(),
        new CarbonNanotube(),
        new LogisticsDrone(),
        new LogisticsVessel(),
        new SmallCarrierRocket()
      ], 4),
      new ComponentRow([
        new PlasmaExciter(),
        new SuperMagneticRing(),
        new ParticleBroadband(),
        new Processor(),
        new CasimirCrystal(),
        new ParticleContainer(),
        new SpaceWarper(),
        new AdvancedCarbonNanotube(),
        new SolarSail(),
        new FrameMaterial(),
        new DysonSphereComponent()
      ], 5),
      new ComponentRow([
        new PhotonCombiner(),
        new AdvancedPhotonCombiner(),
        new MicrocrystallineComponent(),
        new QuantumChip(),
        new AdvancedCasimirCrystal(),
        new AdvancedParticleContainer(),
        new AdvancedSpaceWarper()
      ], 6),
      new ComponentRow([
        new ElectromagneticMatrix(),
        new EnergyMatrix(),
        new StructureMatrix(),
        new InformationMatrix(),
        new GravityMatrix(),
        new Foundation()
      ], 7),
    );
  }
}

export class ComponentRow {
  components!: Item[];
  categoryNumber!: number;

  constructor(components: Item[], cat: number) {
    this.components = components;
    this.categoryNumber = cat;
  }
}
