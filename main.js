(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Cl4":
/*!********************************************************!*\
  !*** ./src/app/api/model/components/cat5/solarSail.ts ***!
  \********************************************************/
/*! exports provided: SolarSail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarSail", function() { return SolarSail; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_graphene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/graphene */ "7DtB");
/* harmony import */ var _cat6_photonCombiner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat6/photonCombiner */ "26ce");





class SolarSail extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SOLAR_SAIL"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_graphene__WEBPACK_IMPORTED_MODULE_3__["Graphene"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat6_photonCombiner__WEBPACK_IMPORTED_MODULE_4__["PhotonCombiner"](), 1),
        ];
        this.outputAmount = 2;
    }
}


/***/ }),

/***/ "/DPU":
/*!****************************************************!*\
  !*** ./src/app/api/model/components/cat2/glass.ts ***!
  \****************************************************/
/*! exports provided: Glass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Glass", function() { return Glass; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_stoneOre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/stoneOre */ "nyWs");




class Glass extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["GLASS"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_stoneOre__WEBPACK_IMPORTED_MODULE_3__["StoneOre"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "/OEb":
/*!***********************************!*\
  !*** ./src/app/api/model/item.ts ***!
  \***********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
class Item {
    constructor() {
        this.inputs = [];
    }
}


/***/ }),

/***/ "/nJM":
/*!********************************************************!*\
  !*** ./src/app/api/model/buildings/cat1/teslaTower.ts ***!
  \********************************************************/
/*! exports provided: TeslaTower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeslaTower", function() { return TeslaTower; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat2/magneticCoil */ "kryw");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");





class TeslaTower extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["TESLA_TOWER"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_4__["IronIngot"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_3__["MagneticCoil"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! J:\PrivateRepos\DSPC\src\main.ts */"zUnb");


/***/ }),

/***/ "0Bnm":
/*!*******************************************************!*\
  !*** ./src/app/api/model/components/allComponents.ts ***!
  \*******************************************************/
/*! exports provided: AllComponents, ComponentRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllComponents", function() { return AllComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRow", function() { return ComponentRow; });
/* harmony import */ var _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat1/ironIngot */ "infW");
/* harmony import */ var _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat1/copperIngot */ "eyO0");
/* harmony import */ var _cat1_highPuritySilicon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cat1/highPuritySilicon */ "eX+S");
/* harmony import */ var _cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cat1/titaniumIngot */ "H4OS");
/* harmony import */ var _cat1_stone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cat1/stone */ "wDDY");
/* harmony import */ var _cat3_electricMotor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cat3/electricMotor */ "hBfu");
/* harmony import */ var _cat1_plastic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cat1/plastic */ "vh5G");
/* harmony import */ var _cat1_graphene__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cat1/graphene */ "7DtB");
/* harmony import */ var _cat2_magnet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cat2/magnet */ "EWYf");
/* harmony import */ var _cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cat2/magneticCoil */ "kryw");
/* harmony import */ var _cat2_crystalSilicon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cat2/crystalSilicon */ "LjGx");
/* harmony import */ var _cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cat2/titaniumAlloy */ "dr5w");
/* harmony import */ var _cat2_glass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cat2/glass */ "/DPU");
/* harmony import */ var _cat2_diamond__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cat2/diamond */ "T+IO");
/* harmony import */ var _cat2_organicCrystal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cat2/organicCrystal */ "3KBT");
/* harmony import */ var _cat2_hydrogenFuelRod__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cat2/hydrogenFuelRod */ "GW4o");
/* harmony import */ var _cat2_deuteronFuelRod__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cat2/deuteronFuelRod */ "wW5/");
/* harmony import */ var _cat3_steel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cat3/steel */ "DOhc");
/* harmony import */ var _cat3_advancedCrystalSilicon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cat3/advancedCrystalSilicon */ "DLQs");
/* harmony import */ var _cat3_titaniumGlass__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cat3/titaniumGlass */ "9EoU");
/* harmony import */ var _cat3_prisma__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cat3/prisma */ "cHJY");
/* harmony import */ var _cat3_advancedDiamond__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cat3/advancedDiamond */ "tdEO");
/* harmony import */ var _cat3_titaniumCrystal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cat3/titaniumCrystal */ "3vuu");
/* harmony import */ var _cat3_thruster__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cat3/thruster */ "f7Jo");
/* harmony import */ var _cat3_reinforcedThruster__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cat3/reinforcedThruster */ "Nkc5");
/* harmony import */ var _cat3_strangeMatter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cat3/strangeMatter */ "k4vE");
/* harmony import */ var _cat4_gear__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cat4/gear */ "sO28");
/* harmony import */ var _cat4_electromagneticTurbine__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cat4/electromagneticTurbine */ "ViCB");
/* harmony import */ var _cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cat4/circuitBoard */ "p+Xa");
/* harmony import */ var _cat4_gravitonLens__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./cat4/gravitonLens */ "KWYO");
/* harmony import */ var _cat4_sulfuricAcid__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./cat4/sulfuricAcid */ "l7ns");
/* harmony import */ var _cat4_deuterium__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./cat4/deuterium */ "QLRj");
/* harmony import */ var _cat4_planeFilter__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./cat4/planeFilter */ "bmJb");
/* harmony import */ var _cat4_carbonNanotube__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./cat4/carbonNanotube */ "MAHN");
/* harmony import */ var _cat4_logisticsDrone__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./cat4/logisticsDrone */ "0Zqd");
/* harmony import */ var _cat4_logisticsVessel__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./cat4/logisticsVessel */ "LXRz");
/* harmony import */ var _cat4_smallCarrierRocket__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./cat4/smallCarrierRocket */ "KmAk");
/* harmony import */ var _cat5_plasmaExciter__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./cat5/plasmaExciter */ "dQjM");
/* harmony import */ var _cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./cat5/superMagneticRing */ "nKlZ");
/* harmony import */ var _cat5_particleBroadband__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./cat5/particleBroadband */ "2xQE");
/* harmony import */ var _cat5_processor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./cat5/processor */ "dlOC");
/* harmony import */ var _cat5_casimirCrystal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./cat5/casimirCrystal */ "FTmP");
/* harmony import */ var _cat5_particleContainer__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./cat5/particleContainer */ "OJSu");
/* harmony import */ var _cat5_spaceWarper__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./cat5/spaceWarper */ "U6OI");
/* harmony import */ var _cat5_advancedCarbonNanotube__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./cat5/advancedCarbonNanotube */ "5YoT");
/* harmony import */ var _cat5_solarSail__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./cat5/solarSail */ "+Cl4");
/* harmony import */ var _cat5_frameMaterial__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./cat5/frameMaterial */ "wfrA");
/* harmony import */ var _cat5_dysonSphereComponent__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./cat5/dysonSphereComponent */ "QXIT");
/* harmony import */ var _cat6_photonCombiner__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./cat6/photonCombiner */ "26ce");
/* harmony import */ var _cat6_advancedPhotonCombiner__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./cat6/advancedPhotonCombiner */ "7kjt");
/* harmony import */ var _cat6_microcrystallineComponent__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./cat6/microcrystallineComponent */ "TUi5");
/* harmony import */ var _cat6_quantumChip__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./cat6/quantumChip */ "AFjd");
/* harmony import */ var _cat6_advancedCasimirCrystal__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./cat6/advancedCasimirCrystal */ "ijbo");
/* harmony import */ var _cat6_advancedParticleContainer__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./cat6/advancedParticleContainer */ "8Yfj");
/* harmony import */ var _cat6_advancedSpaceWarper__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./cat6/advancedSpaceWarper */ "MHc/");
/* harmony import */ var _cat7_electromagneticMatrix__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./cat7/electromagneticMatrix */ "G9N+");
/* harmony import */ var _cat7_energyMatrix__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./cat7/energyMatrix */ "iVdA");
/* harmony import */ var _cat7_structureMatrix__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./cat7/structureMatrix */ "W6me");
/* harmony import */ var _cat7_informationMatrix__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./cat7/informationMatrix */ "TPNF");
/* harmony import */ var _cat7_gravityMatrix__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./cat7/gravityMatrix */ "HseB");
/* harmony import */ var _cat7_foundation__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./cat7/foundation */ "YaW9");
/* harmony import */ var _cat1_energeticGraphite__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./cat1/energeticGraphite */ "uUYW");
/* harmony import */ var _multipleOutputs_advancedGraphene__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../multipleOutputs/advancedGraphene */ "N4WI");
/* harmony import */ var _cat4_SiliconOreFromStone__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./cat4/SiliconOreFromStone */ "yTwP");
































































class AllComponents {
    constructor() {
        this.components = [];
        this.components.push(new ComponentRow([
            new _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_0__["IronIngot"](),
            new _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_1__["CopperIngot"](),
            new _cat1_highPuritySilicon__WEBPACK_IMPORTED_MODULE_2__["HighPuritySilicon"](),
            new _cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_3__["TitaniumIngot"](),
            new _cat1_stone__WEBPACK_IMPORTED_MODULE_4__["Stone"](),
            new _cat1_energeticGraphite__WEBPACK_IMPORTED_MODULE_61__["EnergeticGraphite"](),
            new _cat1_plastic__WEBPACK_IMPORTED_MODULE_6__["Plastic"](),
            new _cat1_graphene__WEBPACK_IMPORTED_MODULE_7__["Graphene"]()
        ], 1), new ComponentRow([
            new _cat2_magnet__WEBPACK_IMPORTED_MODULE_8__["Magnet"](),
            new _cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_9__["MagneticCoil"](),
            new _cat2_crystalSilicon__WEBPACK_IMPORTED_MODULE_10__["CrystalSilicon"](),
            new _cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_11__["TitaniumAlloy"](),
            new _cat2_glass__WEBPACK_IMPORTED_MODULE_12__["Glass"](),
            new _cat2_diamond__WEBPACK_IMPORTED_MODULE_13__["Diamond"](),
            new _cat2_organicCrystal__WEBPACK_IMPORTED_MODULE_14__["OrganicCrystal"](),
            new _multipleOutputs_advancedGraphene__WEBPACK_IMPORTED_MODULE_62__["AdvancedGraphene"](),
            new _cat2_hydrogenFuelRod__WEBPACK_IMPORTED_MODULE_15__["HydrogenFuelRod"](),
            new _cat2_deuteronFuelRod__WEBPACK_IMPORTED_MODULE_16__["DeuteronFuelRod"]()
        ], 2), new ComponentRow([
            new _cat3_steel__WEBPACK_IMPORTED_MODULE_17__["Steel"](),
            new _cat3_electricMotor__WEBPACK_IMPORTED_MODULE_5__["ElectricMotor"](),
            new _cat3_advancedCrystalSilicon__WEBPACK_IMPORTED_MODULE_18__["AdvancedCrystalSilicon"](),
            new _cat3_titaniumGlass__WEBPACK_IMPORTED_MODULE_19__["TitaniumGlass"](),
            new _cat3_prisma__WEBPACK_IMPORTED_MODULE_20__["Prisma"](),
            new _cat3_advancedDiamond__WEBPACK_IMPORTED_MODULE_21__["AdvancedDiamond"](),
            new _cat3_titaniumCrystal__WEBPACK_IMPORTED_MODULE_22__["TitaniumCrystal"](),
            new _cat3_thruster__WEBPACK_IMPORTED_MODULE_23__["Thruster"](),
            new _cat3_reinforcedThruster__WEBPACK_IMPORTED_MODULE_24__["ReinforcedThruster"](),
            new _cat3_strangeMatter__WEBPACK_IMPORTED_MODULE_25__["StrangeMatter"]()
        ], 3), new ComponentRow([
            new _cat4_gear__WEBPACK_IMPORTED_MODULE_26__["Gear"](),
            new _cat4_electromagneticTurbine__WEBPACK_IMPORTED_MODULE_27__["ElectromagneticTurbine"](),
            new _cat4_SiliconOreFromStone__WEBPACK_IMPORTED_MODULE_63__["SiliconOreFromStone"](),
            new _cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_28__["CircuitBoard"](),
            new _cat4_gravitonLens__WEBPACK_IMPORTED_MODULE_29__["GravitonLens"](),
            new _cat4_sulfuricAcid__WEBPACK_IMPORTED_MODULE_30__["SulfuricAcid"](),
            new _cat4_deuterium__WEBPACK_IMPORTED_MODULE_31__["Deuterium"](),
            new _cat4_planeFilter__WEBPACK_IMPORTED_MODULE_32__["PlaneFilter"](),
            new _cat4_carbonNanotube__WEBPACK_IMPORTED_MODULE_33__["CarbonNanotube"](),
            new _cat4_logisticsDrone__WEBPACK_IMPORTED_MODULE_34__["LogisticsDrone"](),
            new _cat4_logisticsVessel__WEBPACK_IMPORTED_MODULE_35__["LogisticsVessel"](),
            new _cat4_smallCarrierRocket__WEBPACK_IMPORTED_MODULE_36__["SmallCarrierRocket"]()
        ], 4), new ComponentRow([
            new _cat5_plasmaExciter__WEBPACK_IMPORTED_MODULE_37__["PlasmaExciter"](),
            new _cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_38__["SuperMagneticRing"](),
            new _cat5_particleBroadband__WEBPACK_IMPORTED_MODULE_39__["ParticleBroadband"](),
            new _cat5_processor__WEBPACK_IMPORTED_MODULE_40__["Processor"](),
            new _cat5_casimirCrystal__WEBPACK_IMPORTED_MODULE_41__["CasimirCrystal"](),
            new _cat5_particleContainer__WEBPACK_IMPORTED_MODULE_42__["ParticleContainer"](),
            new _cat5_spaceWarper__WEBPACK_IMPORTED_MODULE_43__["SpaceWarper"](),
            new _cat5_advancedCarbonNanotube__WEBPACK_IMPORTED_MODULE_44__["AdvancedCarbonNanotube"](),
            new _cat5_solarSail__WEBPACK_IMPORTED_MODULE_45__["SolarSail"](),
            new _cat5_frameMaterial__WEBPACK_IMPORTED_MODULE_46__["FrameMaterial"](),
            new _cat5_dysonSphereComponent__WEBPACK_IMPORTED_MODULE_47__["DysonSphereComponent"]()
        ], 5), new ComponentRow([
            new _cat6_photonCombiner__WEBPACK_IMPORTED_MODULE_48__["PhotonCombiner"](),
            new _cat6_advancedPhotonCombiner__WEBPACK_IMPORTED_MODULE_49__["AdvancedPhotonCombiner"](),
            new _cat6_microcrystallineComponent__WEBPACK_IMPORTED_MODULE_50__["MicrocrystallineComponent"](),
            new _cat6_quantumChip__WEBPACK_IMPORTED_MODULE_51__["QuantumChip"](),
            new _cat6_advancedCasimirCrystal__WEBPACK_IMPORTED_MODULE_52__["AdvancedCasimirCrystal"](),
            new _cat6_advancedParticleContainer__WEBPACK_IMPORTED_MODULE_53__["AdvancedParticleContainer"](),
            new _cat6_advancedSpaceWarper__WEBPACK_IMPORTED_MODULE_54__["AdvancedSpaceWarper"]()
        ], 6), new ComponentRow([
            new _cat7_electromagneticMatrix__WEBPACK_IMPORTED_MODULE_55__["ElectromagneticMatrix"](),
            new _cat7_energyMatrix__WEBPACK_IMPORTED_MODULE_56__["EnergyMatrix"](),
            new _cat7_structureMatrix__WEBPACK_IMPORTED_MODULE_57__["StructureMatrix"](),
            new _cat7_informationMatrix__WEBPACK_IMPORTED_MODULE_58__["InformationMatrix"](),
            new _cat7_gravityMatrix__WEBPACK_IMPORTED_MODULE_59__["GravityMatrix"](),
            new _cat7_foundation__WEBPACK_IMPORTED_MODULE_60__["Foundation"]()
        ], 7));
    }
}
class ComponentRow {
    constructor(components, cat) {
        this.components = components;
        this.categoryNumber = cat;
    }
}


/***/ }),

/***/ "0NDV":
/*!*******************************************************!*\
  !*** ./src/app/api/model/buildings/cat4/matrixLab.ts ***!
  \*******************************************************/
/*! exports provided: MatrixLab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixLab", function() { return MatrixLab; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");
/* harmony import */ var _components_cat2_glass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat2/glass */ "/DPU");
/* harmony import */ var _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat4/circuitBoard */ "p+Xa");
/* harmony import */ var _components_cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat2/magneticCoil */ "kryw");







class MatrixLab extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MATRIX_LAB"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_glass__WEBPACK_IMPORTED_MODULE_4__["Glass"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__["CircuitBoard"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_6__["MagneticCoil"](), 4),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "0QG1":
/*!*********************************************************!*\
  !*** ./src/app/api/model/buildings/cat1/windTurbine.ts ***!
  \*********************************************************/
/*! exports provided: WindTurbine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindTurbine", function() { return WindTurbine; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");
/* harmony import */ var _components_cat4_gear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat4/gear */ "sO28");
/* harmony import */ var _components_cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat2/magneticCoil */ "kryw");






class WindTurbine extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["WIND_TURBINE"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 6),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_gear__WEBPACK_IMPORTED_MODULE_4__["Gear"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_5__["MagneticCoil"](), 3),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "0Zqd":
/*!*************************************************************!*\
  !*** ./src/app/api/model/components/cat4/logisticsDrone.ts ***!
  \*************************************************************/
/*! exports provided: LogisticsDrone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticsDrone", function() { return LogisticsDrone; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/ironIngot */ "infW");
/* harmony import */ var _cat5_processor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat5/processor */ "dlOC");
/* harmony import */ var _cat3_thruster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cat3/thruster */ "f7Jo");






class LogisticsDrone extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["LOGISTICS_DRONE"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 5),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat5_processor__WEBPACK_IMPORTED_MODULE_4__["Processor"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat3_thruster__WEBPACK_IMPORTED_MODULE_5__["Thruster"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "26ce":
/*!*************************************************************!*\
  !*** ./src/app/api/model/components/cat6/photonCombiner.ts ***!
  \*************************************************************/
/*! exports provided: PhotonCombiner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotonCombiner", function() { return PhotonCombiner; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat3_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat3/prisma */ "cHJY");
/* harmony import */ var _cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat4/circuitBoard */ "p+Xa");





class PhotonCombiner extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["PHOTON_COMBINER"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat3_prisma__WEBPACK_IMPORTED_MODULE_3__["Prisma"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_4__["CircuitBoard"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "2xQE":
/*!****************************************************************!*\
  !*** ./src/app/api/model/components/cat5/particleBroadband.ts ***!
  \****************************************************************/
/*! exports provided: ParticleBroadband */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleBroadband", function() { return ParticleBroadband; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat4_carbonNanotube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat4/carbonNanotube */ "MAHN");
/* harmony import */ var _cat2_crystalSilicon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat2/crystalSilicon */ "LjGx");
/* harmony import */ var _cat1_plastic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cat1/plastic */ "vh5G");






class ParticleBroadband extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["PARTICLE_BROADBAND"];
        this.processingTime = 8;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_carbonNanotube__WEBPACK_IMPORTED_MODULE_3__["CarbonNanotube"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_crystalSilicon__WEBPACK_IMPORTED_MODULE_4__["CrystalSilicon"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_plastic__WEBPACK_IMPORTED_MODULE_5__["Plastic"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "3KBT":
/*!*************************************************************!*\
  !*** ./src/app/api/model/components/cat2/organicCrystal.ts ***!
  \*************************************************************/
/*! exports provided: OrganicCrystal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganicCrystal", function() { return OrganicCrystal; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_plastic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/plastic */ "vh5G");
/* harmony import */ var _baseComponents_refinedOil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../baseComponents/refinedOil */ "d1eX");
/* harmony import */ var _baseComponents_water__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../baseComponents/water */ "xsJL");






class OrganicCrystal extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ORGANIC_CRYSTAL"];
        this.processingTime = 6;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CHEMICAL_PLANT"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_plastic__WEBPACK_IMPORTED_MODULE_3__["Plastic"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_refinedOil__WEBPACK_IMPORTED_MODULE_4__["RefinedOil"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_water__WEBPACK_IMPORTED_MODULE_5__["Water"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "3vuu":
/*!**************************************************************!*\
  !*** ./src/app/api/model/components/cat3/titaniumCrystal.ts ***!
  \**************************************************************/
/*! exports provided: TitaniumCrystal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitaniumCrystal", function() { return TitaniumCrystal; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat2_organicCrystal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat2/organicCrystal */ "3KBT");
/* harmony import */ var _cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat1/titaniumIngot */ "H4OS");





class TitaniumCrystal extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["TITANIUM_CRYSTAL"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_organicCrystal__WEBPACK_IMPORTED_MODULE_3__["OrganicCrystal"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_4__["TitaniumIngot"](), 3),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "4dKc":
/*!*********************************************************!*\
  !*** ./src/app/api/model/baseComponents/titaniumOre.ts ***!
  \*********************************************************/
/*! exports provided: TitaniumOre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitaniumOre", function() { return TitaniumOre; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class TitaniumOre extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["TITANIUM_ORE"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["TITANIUM_VEIN"];
    }
}


/***/ }),

/***/ "5WNh":
/*!********************************************************!*\
  !*** ./src/app/api/model/buildings/cat2/storageOne.ts ***!
  \********************************************************/
/*! exports provided: StorageOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageOne", function() { return StorageOne; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_stone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/stone */ "wDDY");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");





class StorageOne extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["STORAGE_MK_1"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_4__["IronIngot"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_stone__WEBPACK_IMPORTED_MODULE_3__["Stone"](), 4),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "5YoT":
/*!*********************************************************************!*\
  !*** ./src/app/api/model/components/cat5/advancedCarbonNanotube.ts ***!
  \*********************************************************************/
/*! exports provided: AdvancedCarbonNanotube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedCarbonNanotube", function() { return AdvancedCarbonNanotube; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _baseComponents_spiniformStalagmiteCrystal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/spiniformStalagmiteCrystal */ "nMLd");




class AdvancedCarbonNanotube extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_2__["A_CARBON_NANOTUBE"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_2__["CHEMICAL_PLANT"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_1__["Input"](new _baseComponents_spiniformStalagmiteCrystal__WEBPACK_IMPORTED_MODULE_3__["SpiniformStalagmiteCrystal"](), 2),
        ];
        this.outputAmount = 2;
    }
}


/***/ }),

/***/ "65Rc":
/*!***********************************************************!*\
  !*** ./src/app/api/model/buildings/cat2/emRailEjector.ts ***!
  \***********************************************************/
/*! exports provided: EmRailEjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmRailEjector", function() { return EmRailEjector; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat3/steel */ "DOhc");
/* harmony import */ var _components_cat4_gear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat4/gear */ "sO28");
/* harmony import */ var _components_cat5_processor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat5/processor */ "dlOC");
/* harmony import */ var _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat5/superMagneticRing */ "nKlZ");







class EmRailEjector extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["EM_RAIL_EJECTOR"];
        this.processingTime = 6;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__["Steel"](), 20),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_gear__WEBPACK_IMPORTED_MODULE_4__["Gear"](), 20),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_processor__WEBPACK_IMPORTED_MODULE_5__["Processor"](), 5),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_6__["SuperMagneticRing"](), 10),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "7DtB":
/*!*******************************************************!*\
  !*** ./src/app/api/model/components/cat1/graphene.ts ***!
  \*******************************************************/
/*! exports provided: Graphene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graphene", function() { return Graphene; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _energeticGraphite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./energeticGraphite */ "uUYW");
/* harmony import */ var _cat4_sulfuricAcid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat4/sulfuricAcid */ "l7ns");





class Graphene extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["GRAPHENE"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CHEMICAL_PLANT"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _energeticGraphite__WEBPACK_IMPORTED_MODULE_3__["EnergeticGraphite"](), 3),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_sulfuricAcid__WEBPACK_IMPORTED_MODULE_4__["SulfuricAcid"](), 1),
        ];
        this.outputAmount = 2;
    }
}


/***/ }),

/***/ "7Exa":
/*!************************************************************!*\
  !*** ./src/app/api/model/baseComponents/unipolarMagnet.ts ***!
  \************************************************************/
/*! exports provided: UnipolarMagnet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnipolarMagnet", function() { return UnipolarMagnet; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class UnipolarMagnet extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["UNIPOLAR_MAGNET"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["UNIPOLAR_MAGNET_VEIN"];
    }
}


/***/ }),

/***/ "7diH":
/*!*************************************************************!*\
  !*** ./src/app/api/model/buildings/cat2/conveyorBeltTwo.ts ***!
  \*************************************************************/
/*! exports provided: ConveyorBeltTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConveyorBeltTwo", function() { return ConveyorBeltTwo; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _conveyorBeltOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conveyorBeltOne */ "lLUC");
/* harmony import */ var _components_cat4_electromagneticTurbine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat4/electromagneticTurbine */ "ViCB");





class ConveyorBeltTwo extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CONVEYOR_BELT_MK_2"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _conveyorBeltOne__WEBPACK_IMPORTED_MODULE_3__["ConveyorBeltOne"](), 3),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_electromagneticTurbine__WEBPACK_IMPORTED_MODULE_4__["ElectromagneticTurbine"](), 1),
        ];
        this.outputAmount = 3;
    }
}


/***/ }),

/***/ "7kjt":
/*!*********************************************************************!*\
  !*** ./src/app/api/model/components/cat6/advancedPhotonCombiner.ts ***!
  \*********************************************************************/
/*! exports provided: AdvancedPhotonCombiner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedPhotonCombiner", function() { return AdvancedPhotonCombiner; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat4/circuitBoard */ "p+Xa");
/* harmony import */ var _baseComponents_opticalGratingCrystal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../baseComponents/opticalGratingCrystal */ "huwH");





class AdvancedPhotonCombiner extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["A_PHOTON_COMBINER"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_opticalGratingCrystal__WEBPACK_IMPORTED_MODULE_4__["OpticalGratingCrystal"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_3__["CircuitBoard"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "8Yfj":
/*!************************************************************************!*\
  !*** ./src/app/api/model/components/cat6/advancedParticleContainer.ts ***!
  \************************************************************************/
/*! exports provided: AdvancedParticleContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedParticleContainer", function() { return AdvancedParticleContainer; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_unipolarMagnet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/unipolarMagnet */ "7Exa");
/* harmony import */ var _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat1/copperIngot */ "eyO0");





class AdvancedParticleContainer extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["A_PARTICLE_CONTAINER"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_unipolarMagnet__WEBPACK_IMPORTED_MODULE_3__["UnipolarMagnet"](), 10),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_4__["CopperIngot"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "9ByG":
/*!*********************************************************!*\
  !*** ./src/app/api/model/buildings/cat3/oilRefinery.ts ***!
  \*********************************************************/
/*! exports provided: OilRefinery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilRefinery", function() { return OilRefinery; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat3/steel */ "DOhc");
/* harmony import */ var _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/stone */ "wDDY");
/* harmony import */ var _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat4/circuitBoard */ "p+Xa");
/* harmony import */ var _components_cat5_plasmaExciter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat5/plasmaExciter */ "dQjM");







class OilRefinery extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["OIL_REFINERY"];
        this.processingTime = 6;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__["Steel"](), 10),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__["Stone"](), 10),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__["CircuitBoard"](), 6),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_plasmaExciter__WEBPACK_IMPORTED_MODULE_6__["PlasmaExciter"](), 6),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "9EoU":
/*!************************************************************!*\
  !*** ./src/app/api/model/components/cat3/titaniumGlass.ts ***!
  \************************************************************/
/*! exports provided: TitaniumGlass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitaniumGlass", function() { return TitaniumGlass; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat2_glass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat2/glass */ "/DPU");
/* harmony import */ var _cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat1/titaniumIngot */ "H4OS");
/* harmony import */ var _baseComponents_water__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../baseComponents/water */ "xsJL");






class TitaniumGlass extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["TITANIUM_GLASS"];
        this.processingTime = 5;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_glass__WEBPACK_IMPORTED_MODULE_3__["Glass"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_4__["TitaniumIngot"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_water__WEBPACK_IMPORTED_MODULE_5__["Water"](), 2),
        ];
        this.outputAmount = 2;
    }
}


/***/ }),

/***/ "AFjd":
/*!**********************************************************!*\
  !*** ./src/app/api/model/components/cat6/quantumChip.ts ***!
  \**********************************************************/
/*! exports provided: QuantumChip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantumChip", function() { return QuantumChip; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat5_processor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat5/processor */ "dlOC");
/* harmony import */ var _cat4_planeFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat4/planeFilter */ "bmJb");





class QuantumChip extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["QUANTUM_CHIP"];
        this.processingTime = 6;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat5_processor__WEBPACK_IMPORTED_MODULE_3__["Processor"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_planeFilter__WEBPACK_IMPORTED_MODULE_4__["PlaneFilter"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "AM62":
/*!**********************************************************!*\
  !*** ./src/app/api/model/buildings/cat3/oilExtractor.ts ***!
  \**********************************************************/
/*! exports provided: OilExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilExtractor", function() { return OilExtractor; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat3/steel */ "DOhc");
/* harmony import */ var _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/stone */ "wDDY");
/* harmony import */ var _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat4/circuitBoard */ "p+Xa");
/* harmony import */ var _components_cat5_plasmaExciter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat5/plasmaExciter */ "dQjM");







class OilExtractor extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["OIL_EXTRACTOR"];
        this.processingTime = 8;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__["Steel"](), 12),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__["Stone"](), 12),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__["CircuitBoard"](), 6),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_plasmaExciter__WEBPACK_IMPORTED_MODULE_6__["PlasmaExciter"](), 4),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "AaFA":
/*!*******************************************************!*\
  !*** ./src/app/api/model/buildings/cat3/sorterTwo.ts ***!
  \*******************************************************/
/*! exports provided: SorterTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterTwo", function() { return SorterTwo; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat3_electricMotor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat3/electricMotor */ "hBfu");
/* harmony import */ var _sorterOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sorterOne */ "ecWr");





class SorterTwo extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SORTER_MK_2"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _sorterOne__WEBPACK_IMPORTED_MODULE_4__["SorterOne"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat3_electricMotor__WEBPACK_IMPORTED_MODULE_3__["ElectricMotor"](), 1),
        ];
        this.outputAmount = 2;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DLQs":
/*!*********************************************************************!*\
  !*** ./src/app/api/model/components/cat3/advancedCrystalSilicon.ts ***!
  \*********************************************************************/
/*! exports provided: AdvancedCrystalSilicon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedCrystalSilicon", function() { return AdvancedCrystalSilicon; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _baseComponents_fractalSilicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/fractalSilicon */ "tmKS");




class AdvancedCrystalSilicon extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_2__["A_CRYSTAL_SILICON"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_2__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_1__["Input"](new _baseComponents_fractalSilicon__WEBPACK_IMPORTED_MODULE_3__["FractalSilicon"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "DOhc":
/*!****************************************************!*\
  !*** ./src/app/api/model/components/cat3/steel.ts ***!
  \****************************************************/
/*! exports provided: Steel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Steel", function() { return Steel; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/ironIngot */ "infW");




class Steel extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["STEEL"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 3),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "E3Hn":
/*!**********************************************************!*\
  !*** ./src/app/api/model/buildings/cat4/fractionator.ts ***!
  \**********************************************************/
/*! exports provided: Fractionator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fractionator", function() { return Fractionator; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat3/steel */ "DOhc");
/* harmony import */ var _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/stone */ "wDDY");
/* harmony import */ var _components_cat2_glass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat2/glass */ "/DPU");
/* harmony import */ var _components_cat5_processor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat5/processor */ "dlOC");







class Fractionator extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["FRACTIONATOR"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__["Steel"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__["Stone"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_glass__WEBPACK_IMPORTED_MODULE_5__["Glass"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_processor__WEBPACK_IMPORTED_MODULE_6__["Processor"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "EWYf":
/*!*****************************************************!*\
  !*** ./src/app/api/model/components/cat2/magnet.ts ***!
  \*****************************************************/
/*! exports provided: Magnet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Magnet", function() { return Magnet; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_ironOre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/ironOre */ "lBGu");




class Magnet extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MAGNET"];
        this.processingTime = 1.5;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_ironOre__WEBPACK_IMPORTED_MODULE_3__["IronOre"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "ElOO":
/*!*****************************************************!*\
  !*** ./src/app/api/model/buildings/allBuildings.ts ***!
  \*****************************************************/
/*! exports provided: AllBuildings, BuildingRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBuildings", function() { return AllBuildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingRow", function() { return BuildingRow; });
/* harmony import */ var _cat1_teslaTower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat1/teslaTower */ "/nJM");
/* harmony import */ var _cat1_wirelessPowerTower__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat1/wirelessPowerTower */ "l9lQ");
/* harmony import */ var _cat1_satelliteSubstation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cat1/satelliteSubstation */ "ubz/");
/* harmony import */ var _cat1_windTurbine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cat1/windTurbine */ "0QG1");
/* harmony import */ var _cat1_thermalPowerStation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cat1/thermalPowerStation */ "lQT/");
/* harmony import */ var _cat1_solarPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cat1/solarPanel */ "kR/r");
/* harmony import */ var _cat1_accumulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cat1/accumulator */ "U/PE");
/* harmony import */ var _cat1_rayReceiver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cat1/rayReceiver */ "ULqe");
/* harmony import */ var _cat1_miniFusionPowerStation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cat1/miniFusionPowerStation */ "MLRr");
/* harmony import */ var _cat2_conveyorBeltOne__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cat2/conveyorBeltOne */ "lLUC");
/* harmony import */ var _cat2_conveyorBeltTwo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cat2/conveyorBeltTwo */ "7diH");
/* harmony import */ var _cat2_conveyorBeltThree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cat2/conveyorBeltThree */ "tG12");
/* harmony import */ var _cat2_splitter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cat2/splitter */ "PDSW");
/* harmony import */ var _cat2_storageOne__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cat2/storageOne */ "5WNh");
/* harmony import */ var _cat2_storageTwo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cat2/storageTwo */ "RbVb");
/* harmony import */ var _cat2_storageTank__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cat2/storageTank */ "JBM0");
/* harmony import */ var _cat2_emRailEjector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cat2/emRailEjector */ "65Rc");
/* harmony import */ var _cat2_planetaryLogisticsStation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cat2/planetaryLogisticsStation */ "fXpC");
/* harmony import */ var _cat2_miniParticleCollider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cat2/miniParticleCollider */ "Io5e");
/* harmony import */ var _cat3_sorterOne__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cat3/sorterOne */ "ecWr");
/* harmony import */ var _cat3_sorterTwo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cat3/sorterTwo */ "AaFA");
/* harmony import */ var _cat3_sorterThree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cat3/sorterThree */ "g25I");
/* harmony import */ var _cat3_miningMachine__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cat3/miningMachine */ "qL10");
/* harmony import */ var _cat3_waterPump__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cat3/waterPump */ "p1Tu");
/* harmony import */ var _cat3_oilExtractor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cat3/oilExtractor */ "AM62");
/* harmony import */ var _cat3_oilRefinery__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cat3/oilRefinery */ "9ByG");
/* harmony import */ var _cat3_verticalLaunchingSilo__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cat3/verticalLaunchingSilo */ "zVFJ");
/* harmony import */ var _cat3_interstellarLogisticsStation__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cat3/interstellarLogisticsStation */ "I8I7");
/* harmony import */ var _cat4_assemblerOne__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cat4/assemblerOne */ "vYGM");
/* harmony import */ var _cat4_assemblerTwo__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./cat4/assemblerTwo */ "QMy+");
/* harmony import */ var _cat4_assemblerThree__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./cat4/assemblerThree */ "znLF");
/* harmony import */ var _cat4_smelter__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./cat4/smelter */ "PkVW");
/* harmony import */ var _cat4_fractionator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./cat4/fractionator */ "E3Hn");
/* harmony import */ var _cat4_chemicalPlant__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./cat4/chemicalPlant */ "i6f2");
/* harmony import */ var _cat4_matrixLab__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./cat4/matrixLab */ "0NDV");
/* harmony import */ var _cat4_orbitCollector__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./cat4/orbitCollector */ "KNno");




































class AllBuildings {
    constructor() {
        this.buildings = [];
        this.buildings.push(new BuildingRow([
            new _cat1_teslaTower__WEBPACK_IMPORTED_MODULE_0__["TeslaTower"](),
            new _cat1_wirelessPowerTower__WEBPACK_IMPORTED_MODULE_1__["WirelessPowerTower"](),
            new _cat1_satelliteSubstation__WEBPACK_IMPORTED_MODULE_2__["SatelliteSubstation"](),
            new _cat1_windTurbine__WEBPACK_IMPORTED_MODULE_3__["WindTurbine"](),
            new _cat1_thermalPowerStation__WEBPACK_IMPORTED_MODULE_4__["ThermalPowerStation"](),
            new _cat1_solarPanel__WEBPACK_IMPORTED_MODULE_5__["SolarPanel"](),
            new _cat1_accumulator__WEBPACK_IMPORTED_MODULE_6__["Accumulator"](),
            new _cat1_rayReceiver__WEBPACK_IMPORTED_MODULE_7__["RayReceiver"](),
            new _cat1_miniFusionPowerStation__WEBPACK_IMPORTED_MODULE_8__["MiniFusionPowerStation"](),
            new _cat1_accumulator__WEBPACK_IMPORTED_MODULE_6__["Accumulator"]()
        ], 1), new BuildingRow([
            new _cat2_conveyorBeltOne__WEBPACK_IMPORTED_MODULE_9__["ConveyorBeltOne"](),
            new _cat2_conveyorBeltTwo__WEBPACK_IMPORTED_MODULE_10__["ConveyorBeltTwo"](),
            new _cat2_conveyorBeltThree__WEBPACK_IMPORTED_MODULE_11__["ConveyorBeltThree"](),
            new _cat2_splitter__WEBPACK_IMPORTED_MODULE_12__["Splitter"](),
            new _cat2_storageOne__WEBPACK_IMPORTED_MODULE_13__["StorageOne"](),
            new _cat2_storageTwo__WEBPACK_IMPORTED_MODULE_14__["StorageTwo"](),
            new _cat2_storageTank__WEBPACK_IMPORTED_MODULE_15__["StorageTank"](),
            new _cat2_emRailEjector__WEBPACK_IMPORTED_MODULE_16__["EmRailEjector"](),
            new _cat2_planetaryLogisticsStation__WEBPACK_IMPORTED_MODULE_17__["PlanetaryLogisticsStation"](),
            new _cat2_miniParticleCollider__WEBPACK_IMPORTED_MODULE_18__["MiniParticleCollider"]()
        ], 2), new BuildingRow([
            new _cat3_sorterOne__WEBPACK_IMPORTED_MODULE_19__["SorterOne"](),
            new _cat3_sorterTwo__WEBPACK_IMPORTED_MODULE_20__["SorterTwo"](),
            new _cat3_sorterThree__WEBPACK_IMPORTED_MODULE_21__["SorterThree"](),
            new _cat3_miningMachine__WEBPACK_IMPORTED_MODULE_22__["MiningMachine"](),
            new _cat3_waterPump__WEBPACK_IMPORTED_MODULE_23__["WaterPump"](),
            new _cat3_oilExtractor__WEBPACK_IMPORTED_MODULE_24__["OilExtractor"](),
            new _cat3_oilRefinery__WEBPACK_IMPORTED_MODULE_25__["OilRefinery"](),
            new _cat3_verticalLaunchingSilo__WEBPACK_IMPORTED_MODULE_26__["VerticalLaunchingSilo"](),
            new _cat3_interstellarLogisticsStation__WEBPACK_IMPORTED_MODULE_27__["InterstellarLogisticsStation"]()
        ], 3), new BuildingRow([
            new _cat4_assemblerOne__WEBPACK_IMPORTED_MODULE_28__["AssemblerOne"](),
            new _cat4_assemblerTwo__WEBPACK_IMPORTED_MODULE_29__["AssemblerTwo"](),
            new _cat4_assemblerThree__WEBPACK_IMPORTED_MODULE_30__["AssemblerThree"](),
            new _cat4_smelter__WEBPACK_IMPORTED_MODULE_31__["Smelter"](),
            new _cat4_fractionator__WEBPACK_IMPORTED_MODULE_32__["Fractionator"](),
            new _cat4_chemicalPlant__WEBPACK_IMPORTED_MODULE_33__["ChemicalPlant"](),
            new _cat4_matrixLab__WEBPACK_IMPORTED_MODULE_34__["MatrixLab"](),
            new _cat4_orbitCollector__WEBPACK_IMPORTED_MODULE_35__["OrbitCollector"]()
        ], 4));
    }
}
class BuildingRow {
    constructor(buildings, cat) {
        this.buildings = buildings;
        this.categoryNumber = cat;
    }
}


/***/ }),

/***/ "FTmP":
/*!*************************************************************!*\
  !*** ./src/app/api/model/components/cat5/casimirCrystal.ts ***!
  \*************************************************************/
/*! exports provided: CasimirCrystal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasimirCrystal", function() { return CasimirCrystal; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat3_titaniumCrystal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat3/titaniumCrystal */ "3vuu");
/* harmony import */ var _cat1_graphene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat1/graphene */ "7DtB");
/* harmony import */ var _baseComponents_hydrogen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../baseComponents/hydrogen */ "w4ev");






class CasimirCrystal extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CASIMIR_CRYSTAL"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat3_titaniumCrystal__WEBPACK_IMPORTED_MODULE_3__["TitaniumCrystal"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_graphene__WEBPACK_IMPORTED_MODULE_4__["Graphene"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_hydrogen__WEBPACK_IMPORTED_MODULE_5__["Hydrogen"](), 12),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "G9N+":
/*!********************************************************************!*\
  !*** ./src/app/api/model/components/cat7/electromagneticMatrix.ts ***!
  \********************************************************************/
/*! exports provided: ElectromagneticMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectromagneticMatrix", function() { return ElectromagneticMatrix; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat2/magneticCoil */ "kryw");
/* harmony import */ var _cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat4/circuitBoard */ "p+Xa");





class ElectromagneticMatrix extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ELECTROMAGNETIC_MATRIX"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["RESEARCH_FACILITY"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_3__["MagneticCoil"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_4__["CircuitBoard"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "GW4o":
/*!**************************************************************!*\
  !*** ./src/app/api/model/components/cat2/hydrogenFuelRod.ts ***!
  \**************************************************************/
/*! exports provided: HydrogenFuelRod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HydrogenFuelRod", function() { return HydrogenFuelRod; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/titaniumIngot */ "H4OS");
/* harmony import */ var _baseComponents_hydrogen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../baseComponents/hydrogen */ "w4ev");





class HydrogenFuelRod extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["HYDROGEN_FUEL_ROD"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_3__["TitaniumIngot"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_hydrogen__WEBPACK_IMPORTED_MODULE_4__["Hydrogen"](), 5),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "H4OS":
/*!************************************************************!*\
  !*** ./src/app/api/model/components/cat1/titaniumIngot.ts ***!
  \************************************************************/
/*! exports provided: TitaniumIngot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitaniumIngot", function() { return TitaniumIngot; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_titaniumOre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/titaniumOre */ "4dKc");




class TitaniumIngot extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["TITANIUM_INGOT"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_titaniumOre__WEBPACK_IMPORTED_MODULE_3__["TitaniumOre"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "H9yT":
/*!**********************************!*\
  !*** ./src/app/api/util/tree.ts ***!
  \**********************************/
/*! exports provided: Tree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return Tree; });
class Tree {
    constructor(step) {
        this.step = step;
        this.results = [];
    }
}


/***/ }),

/***/ "HseB":
/*!************************************************************!*\
  !*** ./src/app/api/model/components/cat7/gravityMatrix.ts ***!
  \************************************************************/
/*! exports provided: GravityMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GravityMatrix", function() { return GravityMatrix; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat4_gravitonLens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat4/gravitonLens */ "KWYO");
/* harmony import */ var _cat6_quantumChip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat6/quantumChip */ "AFjd");





class GravityMatrix extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["GRAVITY_MATRIX"];
        this.processingTime = 24;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["RESEARCH_FACILITY"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_gravitonLens__WEBPACK_IMPORTED_MODULE_3__["GravitonLens"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat6_quantumChip__WEBPACK_IMPORTED_MODULE_4__["QuantumChip"](), 1),
        ];
        this.outputAmount = 2;
    }
}


/***/ }),

/***/ "I8I7":
/*!**************************************************************************!*\
  !*** ./src/app/api/model/buildings/cat3/interstellarLogisticsStation.ts ***!
  \**************************************************************************/
/*! exports provided: InterstellarLogisticsStation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterstellarLogisticsStation", function() { return InterstellarLogisticsStation; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat2_planetaryLogisticsStation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat2/planetaryLogisticsStation */ "fXpC");
/* harmony import */ var _components_cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat2/titaniumAlloy */ "dr5w");
/* harmony import */ var _components_cat5_particleContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat5/particleContainer */ "OJSu");






class InterstellarLogisticsStation extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["INTERSTELLAR_LOGISTICS_STATION"];
        this.processingTime = 30;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_planetaryLogisticsStation__WEBPACK_IMPORTED_MODULE_3__["PlanetaryLogisticsStation"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_4__["TitaniumAlloy"](), 40),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_particleContainer__WEBPACK_IMPORTED_MODULE_5__["ParticleContainer"](), 20),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "Io5e":
/*!******************************************************************!*\
  !*** ./src/app/api/model/buildings/cat2/miniParticleCollider.ts ***!
  \******************************************************************/
/*! exports provided: MiniParticleCollider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniParticleCollider", function() { return MiniParticleCollider; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat2/titaniumAlloy */ "dr5w");
/* harmony import */ var _components_cat5_frameMaterial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat5/frameMaterial */ "wfrA");
/* harmony import */ var _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat5/superMagneticRing */ "nKlZ");
/* harmony import */ var _components_cat1_graphene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat1/graphene */ "7DtB");
/* harmony import */ var _components_cat5_processor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/cat5/processor */ "dlOC");








class MiniParticleCollider extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINI_PARTICLE_COLLIDER"];
        this.processingTime = 15;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_3__["TitaniumAlloy"](), 20),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_frameMaterial__WEBPACK_IMPORTED_MODULE_4__["FrameMaterial"](), 20),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_5__["SuperMagneticRing"](), 50),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_graphene__WEBPACK_IMPORTED_MODULE_6__["Graphene"](), 10),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_processor__WEBPACK_IMPORTED_MODULE_7__["Processor"](), 8),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "JBM0":
/*!*********************************************************!*\
  !*** ./src/app/api/model/buildings/cat2/storageTank.ts ***!
  \*********************************************************/
/*! exports provided: StorageTank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTank", function() { return StorageTank; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat2_glass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat2/glass */ "/DPU");
/* harmony import */ var _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/stone */ "wDDY");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");






class StorageTank extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["STORAGE_TANK"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_5__["IronIngot"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__["Stone"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_glass__WEBPACK_IMPORTED_MODULE_3__["Glass"](), 4),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "JM5d":
/*!*******************************************************!*\
  !*** ./src/app/api/model/baseComponents/copperOre.ts ***!
  \*******************************************************/
/*! exports provided: CopperOre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopperOre", function() { return CopperOre; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class CopperOre extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["COPPER_ORE"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["COPPER_VEIN"];
    }
}


/***/ }),

/***/ "KNno":
/*!************************************************************!*\
  !*** ./src/app/api/model/buildings/cat4/orbitCollector.ts ***!
  \************************************************************/
/*! exports provided: OrbitCollector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrbitCollector", function() { return OrbitCollector; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat3_interstellarLogisticsStation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat3/interstellarLogisticsStation */ "I8I7");
/* harmony import */ var _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat5/superMagneticRing */ "nKlZ");
/* harmony import */ var _components_cat3_reinforcedThruster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat3/reinforcedThruster */ "Nkc5");
/* harmony import */ var _cat1_accumulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cat1/accumulator */ "U/PE");







class OrbitCollector extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ORBIT_COLLECTOR"];
        this.processingTime = 30;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat3_interstellarLogisticsStation__WEBPACK_IMPORTED_MODULE_3__["InterstellarLogisticsStation"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_4__["SuperMagneticRing"](), 50),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat3_reinforcedThruster__WEBPACK_IMPORTED_MODULE_5__["ReinforcedThruster"](), 20),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_accumulator__WEBPACK_IMPORTED_MODULE_6__["Accumulator"](), 20),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "KWYO":
/*!***********************************************************!*\
  !*** ./src/app/api/model/components/cat4/gravitonLens.ts ***!
  \***********************************************************/
/*! exports provided: GravitonLens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GravitonLens", function() { return GravitonLens; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat2_diamond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat2/diamond */ "T+IO");
/* harmony import */ var _cat3_strangeMatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat3/strangeMatter */ "k4vE");





class GravitonLens extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["GRAVITON_LENS"];
        this.processingTime = 6;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_diamond__WEBPACK_IMPORTED_MODULE_3__["Diamond"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat3_strangeMatter__WEBPACK_IMPORTED_MODULE_4__["StrangeMatter"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "KmAk":
/*!*****************************************************************!*\
  !*** ./src/app/api/model/components/cat4/smallCarrierRocket.ts ***!
  \*****************************************************************/
/*! exports provided: SmallCarrierRocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallCarrierRocket", function() { return SmallCarrierRocket; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat5_dysonSphereComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat5/dysonSphereComponent */ "QXIT");
/* harmony import */ var _cat2_deuteronFuelRod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat2/deuteronFuelRod */ "wW5/");
/* harmony import */ var _cat6_quantumChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cat6/quantumChip */ "AFjd");






class SmallCarrierRocket extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMALL_CARRIER_ROCKET"];
        this.processingTime = 6;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat5_dysonSphereComponent__WEBPACK_IMPORTED_MODULE_3__["DysonSphereComponent"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_deuteronFuelRod__WEBPACK_IMPORTED_MODULE_4__["DeuteronFuelRod"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat6_quantumChip__WEBPACK_IMPORTED_MODULE_5__["QuantumChip"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "LXRz":
/*!**************************************************************!*\
  !*** ./src/app/api/model/components/cat4/logisticsVessel.ts ***!
  \**************************************************************/
/*! exports provided: LogisticsVessel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticsVessel", function() { return LogisticsVessel; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat2/titaniumAlloy */ "dr5w");
/* harmony import */ var _cat5_processor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat5/processor */ "dlOC");
/* harmony import */ var _cat3_reinforcedThruster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cat3/reinforcedThruster */ "Nkc5");






class LogisticsVessel extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["LOGISTICS_VESSEL"];
        this.processingTime = 6;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_3__["TitaniumAlloy"](), 10),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat5_processor__WEBPACK_IMPORTED_MODULE_4__["Processor"](), 10),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat3_reinforcedThruster__WEBPACK_IMPORTED_MODULE_5__["ReinforcedThruster"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "LjGx":
/*!*************************************************************!*\
  !*** ./src/app/api/model/components/cat2/crystalSilicon.ts ***!
  \*************************************************************/
/*! exports provided: CrystalSilicon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrystalSilicon", function() { return CrystalSilicon; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_highPuritySilicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/highPuritySilicon */ "eX+S");




class CrystalSilicon extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CRYSTAL_SILICON"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_highPuritySilicon__WEBPACK_IMPORTED_MODULE_3__["HighPuritySilicon"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "MAHN":
/*!*************************************************************!*\
  !*** ./src/app/api/model/components/cat4/carbonNanotube.ts ***!
  \*************************************************************/
/*! exports provided: CarbonNanotube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarbonNanotube", function() { return CarbonNanotube; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_graphene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/graphene */ "7DtB");
/* harmony import */ var _cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat1/titaniumIngot */ "H4OS");





class CarbonNanotube extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CARBON_NANOTUBE"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CHEMICAL_PLANT"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_graphene__WEBPACK_IMPORTED_MODULE_3__["Graphene"](), 3),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_4__["TitaniumIngot"](), 1),
        ];
        this.outputAmount = 2;
    }
}


/***/ }),

/***/ "MHc/":
/*!******************************************************************!*\
  !*** ./src/app/api/model/components/cat6/advancedSpaceWarper.ts ***!
  \******************************************************************/
/*! exports provided: AdvancedSpaceWarper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSpaceWarper", function() { return AdvancedSpaceWarper; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat7_gravityMatrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat7/gravityMatrix */ "HseB");




class AdvancedSpaceWarper extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["A_SPACE_WARPER"];
        this.processingTime = 10;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat7_gravityMatrix__WEBPACK_IMPORTED_MODULE_3__["GravityMatrix"](), 1),
        ];
        this.outputAmount = 8;
    }
}


/***/ }),

/***/ "MLRr":
/*!********************************************************************!*\
  !*** ./src/app/api/model/buildings/cat1/miniFusionPowerStation.ts ***!
  \********************************************************************/
/*! exports provided: MiniFusionPowerStation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniFusionPowerStation", function() { return MiniFusionPowerStation; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat2/titaniumAlloy */ "dr5w");
/* harmony import */ var _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat5/superMagneticRing */ "nKlZ");
/* harmony import */ var _components_cat5_processor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat5/processor */ "dlOC");
/* harmony import */ var _components_cat4_carbonNanotube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat4/carbonNanotube */ "MAHN");







class MiniFusionPowerStation extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINI_FUSION_POWER_STATION"];
        this.processingTime = 10;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_3__["TitaniumAlloy"](), 12),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_4__["SuperMagneticRing"](), 10),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_carbonNanotube__WEBPACK_IMPORTED_MODULE_6__["CarbonNanotube"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_processor__WEBPACK_IMPORTED_MODULE_5__["Processor"](), 4),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "Mu9/":
/*!***********************************!*\
  !*** ./src/app/api/util/input.ts ***!
  \***********************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
class Input {
    constructor(item, inputAmount) {
        this.item = item;
        this.inputAmount = inputAmount;
    }
}


/***/ }),

/***/ "N4WI":
/*!***************************************************************!*\
  !*** ./src/app/api/model/multipleOutputs/advancedGraphene.ts ***!
  \***************************************************************/
/*! exports provided: AdvancedGraphene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedGraphene", function() { return AdvancedGraphene; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_fireIce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../baseComponents/fireIce */ "c0F3");




class AdvancedGraphene extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["A_GRAPHENE"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CHEMICAL_PLANT"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_fireIce__WEBPACK_IMPORTED_MODULE_3__["FireIce"](), 2),
        ];
        this.outputAmount = 1; //TODO
        // 2x Graphene
        // 1x Hydrogen
    }
}


/***/ }),

/***/ "Nkc5":
/*!*****************************************************************!*\
  !*** ./src/app/api/model/components/cat3/reinforcedThruster.ts ***!
  \*****************************************************************/
/*! exports provided: ReinforcedThruster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReinforcedThruster", function() { return ReinforcedThruster; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat2/titaniumAlloy */ "dr5w");
/* harmony import */ var _cat4_electromagneticTurbine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat4/electromagneticTurbine */ "ViCB");





class ReinforcedThruster extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["REINFORCED_THRUSTER"];
        this.processingTime = 6;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_3__["TitaniumAlloy"](), 5),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_electromagneticTurbine__WEBPACK_IMPORTED_MODULE_4__["ElectromagneticTurbine"](), 5),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "OJSu":
/*!****************************************************************!*\
  !*** ./src/app/api/model/components/cat5/particleContainer.ts ***!
  \****************************************************************/
/*! exports provided: ParticleContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleContainer", function() { return ParticleContainer; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat4_electromagneticTurbine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat4/electromagneticTurbine */ "ViCB");
/* harmony import */ var _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat1/copperIngot */ "eyO0");
/* harmony import */ var _cat1_graphene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cat1/graphene */ "7DtB");






class ParticleContainer extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["PARTICLE_CONTAINER"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_electromagneticTurbine__WEBPACK_IMPORTED_MODULE_3__["ElectromagneticTurbine"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_4__["CopperIngot"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_graphene__WEBPACK_IMPORTED_MODULE_5__["Graphene"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "PDSW":
/*!******************************************************!*\
  !*** ./src/app/api/model/buildings/cat2/splitter.ts ***!
  \******************************************************/
/*! exports provided: Splitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Splitter", function() { return Splitter; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");
/* harmony import */ var _components_cat4_gear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat4/gear */ "sO28");
/* harmony import */ var _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat4/circuitBoard */ "p+Xa");






class Splitter extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SPLITTER"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 3),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_gear__WEBPACK_IMPORTED_MODULE_4__["Gear"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__["CircuitBoard"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "PadR":
/*!************************************!*\
  !*** ./src/app/api/util/result.ts ***!
  \************************************/
/*! exports provided: Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
class Result {
}


/***/ }),

/***/ "PkVW":
/*!*****************************************************!*\
  !*** ./src/app/api/model/buildings/cat4/smelter.ts ***!
  \*****************************************************/
/*! exports provided: Smelter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Smelter", function() { return Smelter; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");
/* harmony import */ var _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/stone */ "wDDY");
/* harmony import */ var _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat4/circuitBoard */ "p+Xa");
/* harmony import */ var _components_cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat2/magneticCoil */ "kryw");







class Smelter extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__["Stone"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__["CircuitBoard"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_6__["MagneticCoil"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "QLRj":
/*!********************************************************!*\
  !*** ./src/app/api/model/components/cat4/deuterium.ts ***!
  \********************************************************/
/*! exports provided: Deuterium */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deuterium", function() { return Deuterium; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_hydrogen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/hydrogen */ "w4ev");




class Deuterium extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["DEUTERIUM"];
        this.processingTime = 5;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINI_PARTICLE_COLLIDER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_hydrogen__WEBPACK_IMPORTED_MODULE_3__["Hydrogen"](), 10),
        ];
        this.outputAmount = 5;
    }
}


/***/ }),

/***/ "QMy+":
/*!**********************************************************!*\
  !*** ./src/app/api/model/buildings/cat4/assemblerTwo.ts ***!
  \**********************************************************/
/*! exports provided: AssemblerTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssemblerTwo", function() { return AssemblerTwo; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _assemblerOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assemblerOne */ "vYGM");
/* harmony import */ var _components_cat1_graphene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/graphene */ "7DtB");
/* harmony import */ var _components_cat5_processor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat5/processor */ "dlOC");






class AssemblerTwo extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLING_MACHINE_MK_2"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _assemblerOne__WEBPACK_IMPORTED_MODULE_3__["AssemblerOne"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_graphene__WEBPACK_IMPORTED_MODULE_4__["Graphene"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_processor__WEBPACK_IMPORTED_MODULE_5__["Processor"](), 4),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "QXIT":
/*!*******************************************************************!*\
  !*** ./src/app/api/model/components/cat5/dysonSphereComponent.ts ***!
  \*******************************************************************/
/*! exports provided: DysonSphereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DysonSphereComponent", function() { return DysonSphereComponent; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _frameMaterial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frameMaterial */ "wfrA");
/* harmony import */ var _solarSail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solarSail */ "+Cl4");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./processor */ "dlOC");






class DysonSphereComponent extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["DYSON_SPHERE_COMPONENT"];
        this.processingTime = 8;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _frameMaterial__WEBPACK_IMPORTED_MODULE_3__["FrameMaterial"](), 3),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _solarSail__WEBPACK_IMPORTED_MODULE_4__["SolarSail"](), 3),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _processor__WEBPACK_IMPORTED_MODULE_5__["Processor"](), 3),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "RbVb":
/*!********************************************************!*\
  !*** ./src/app/api/model/buildings/cat2/storageTwo.ts ***!
  \********************************************************/
/*! exports provided: StorageTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTwo", function() { return StorageTwo; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat3/steel */ "DOhc");
/* harmony import */ var _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/stone */ "wDDY");





class StorageTwo extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["STORAGE_MK_2"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__["Steel"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__["Stone"](), 8),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_model_buildings_allBuildings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/model/buildings/allBuildings */ "ElOO");
/* harmony import */ var _api_model_components_allComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/model/components/allComponents */ "0Bnm");
/* harmony import */ var _api_util_constants_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/util/constants/names */ "xucN");
/* harmony import */ var _api_util_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/util/result */ "PadR");
/* harmony import */ var _api_util_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/util/tree */ "H9yT");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");













function AppComponent_tr_60_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_60_td_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const building_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.selectItem(building_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const building_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](building_r5.name);
} }
function AppComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_tr_60_td_4_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r3.categoryNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cat_r3.buildings);
} }
function AppComponent_tr_73_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_73_td_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const component_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.selectItem(component_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const component_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](component_r10.name);
} }
function AppComponent_tr_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_tr_73_td_4_Template, 3, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r8.categoryNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cat_r8.components);
} }
function AppComponent_tr_88_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r15.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Generated Output: ", result_r15.generatedOutput, "/min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", result_r15.neededBuildingsDisplay.toFixed(2), "x ", result_r15.item.veinType || result_r15.item.neededMachine, " ");
} }
function AppComponent_tr_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_tr_88_td_4_Template, 9, 4, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r13.step);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", entry_r13.results);
} }
class AppComponent {
    constructor() {
        this.title = 'Dyson Sphere Program Calculator';
        this.version = '0.0.0';
        this.allBuildings = new _api_model_buildings_allBuildings__WEBPACK_IMPORTED_MODULE_1__["AllBuildings"]();
        this.allComponents = new _api_model_components_allComponents__WEBPACK_IMPORTED_MODULE_2__["AllComponents"]();
        this.currentAssemblerMultiplier = 0.75;
        this.wantedOutput = 60;
        this.fasterMiningPercent = 0;
        this.results = [];
        this.resultTree = [];
    }
    //////////
    // Ui Actions
    //////////
    selectItem(item) {
        this.wantedItem = item;
        this.startCalc();
    }
    setOutput(e) {
        this.wantedOutput = Number(e.target.value);
        this.startCalc();
    }
    startCalc() {
        if (!this.wantedItem)
            return;
        this.results = [];
        this.calc(this.wantedItem, this.wantedOutput, 0);
        this.evaluateDisplayTree();
    }
    //////////
    // Logic
    //////////
    calc(wantedItem, wantedOutput, iteration) {
        let currentOutput = this.calculateCurrentOutput(wantedItem);
        let result = new _api_util_result__WEBPACK_IMPORTED_MODULE_4__["Result"]();
        result.item = wantedItem;
        result.iteration = iteration;
        let neededBuildings = wantedOutput / currentOutput;
        result.neededBuildingsCalculation = neededBuildings;
        result.neededBuildingsDisplay = neededBuildings;
        if (result.item.neededMachine === _api_util_constants_names__WEBPACK_IMPORTED_MODULE_3__["ASSEMBLER"]) {
            // needed for the correct number of assembler display
            result.neededBuildingsDisplay = wantedOutput / (currentOutput * this.currentAssemblerMultiplier);
        }
        result.generatedOutput = wantedOutput;
        this.results.push(result);
        for (let input of wantedItem.inputs) {
            let prevMatOutput = result.neededBuildingsCalculation * this.calculateNeededInput(wantedItem, input);
            this.calc(input.item, prevMatOutput, iteration + 1);
        }
    }
    calculateNeededInput(wantedItem, neededItem) {
        let result;
        result = (60 / wantedItem.processingTime) * neededItem.inputAmount;
        return result;
    }
    calculateCurrentOutput(wantedItem) {
        let result;
        if (wantedItem.baseItem) {
            if (wantedItem.name === _api_util_constants_names__WEBPACK_IMPORTED_MODULE_3__["WATER"]) {
                result = 60;
            }
            else {
                result = 30 * (1 + (this.fasterMiningPercent / 100));
            }
        }
        else {
            result = (60 / wantedItem.processingTime) * wantedItem.outputAmount;
        }
        return result;
    }
    evaluateDisplayTree() {
        this.resultTree = [];
        let maxSteps = this.evaluateMaxSteps();
        for (let i = 0; i < maxSteps + 1; i++) {
            this.resultTree.push(new _api_util_tree__WEBPACK_IMPORTED_MODULE_5__["Tree"](i));
        }
        for (let entry of this.results) {
            this.resultTree[entry.iteration].results.push(entry);
        }
    }
    evaluateMaxSteps() {
        let result = 1;
        for (let entry of this.results) {
            if (entry.iteration > result) {
                result = entry.iteration;
            }
        }
        return result;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 89, vars: 18, consts: [["fxLayout", "row", "fxFlex", ""], ["fxLayout", "column", "fxFlex", ""], ["fxLayoutAlign", "center"], ["fxLayout", "row"], ["fxFlex", ""], ["fxLayout", "column", 3, "ngModel", "ngModelChange", "change"], [3, "value"], ["fxFlex", "20", "type", "number", 3, "value", "keyup"], [1, "mat-table"], ["fxLayout", "row", "fxLayoutGap", "0.25rem", "fxFlex", "5", "fxLayoutAlign", "center"], ["fxLayout", "row", "fxLayoutGap", "0.25rem", "fxFlex", "", "fxLayoutAlign", "center"], [4, "ngFor", "ngForOf"], [1, "table", "table-hover"], ["fxLayout", "row", "fxFlex", "", "fxLayoutGap", "0.25rem"], ["fxLayoutGap", "0.25rem", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "center", "fxLayout", "column"], ["fxFlex", "5", "fxLayoutAlign", "center"], ["fxFlex", "", 4, "ngFor", "ngForOf"], ["fxFlex", "", 3, "click"], ["fxLayoutGap", "0.25rem"], ["fxFlex", "", "fxLayoutGap", "0.25rem", 4, "ngFor", "ngForOf"], ["fxFlex", "", "fxLayoutGap", "0.25rem"], ["fxFlex", "", "fxLayoutGap", "0.25rem", "fxLayoutAlign", "center", 4, "ngFor", "ngForOf"], ["fxFlex", "", "fxLayoutGap", "0.25rem", "fxLayoutAlign", "center"], ["fxFlex", "30", "fxLayoutGap", "1%", 1, "mat-card"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select your current research progress (Veins utilization):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-radio-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_radio_group_ngModelChange_14_listener($event) { return ctx.fasterMiningPercent = $event; })("change", function AppComponent_Template_mat_radio_group_change_14_listener() { return ctx.startCalc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Stufe 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Stufe 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Stufe 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Stufe 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Stufe 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Stufe 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Stufe 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Select Assembler level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-radio-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_radio_group_ngModelChange_33_listener($event) { return ctx.currentAssemblerMultiplier = $event; })("change", function AppComponent_Template_mat_radio_group_change_33_listener() { return ctx.startCalc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Mk. 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Mk. 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Mk. 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Insert your wanted Output:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AppComponent_Template_input_keyup_44_listener($event) { return ctx.setOutput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "/min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Buildings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AppComponent_tr_60_Template, 5, 2, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, AppComponent_tr_73_Template, 5, 2, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " The holy calculation area (in fugly)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AppComponent_tr_88_Template, 5, 2, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("v.", ctx.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fasterMiningPercent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentAssemblerMultiplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0.75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.wantedOutput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allBuildings.buildings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allComponents.components);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resultTree);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"]], styles: [".versionNumber[_ngcontent-%COMP%] {\r\n  color: #555;\r\n  font-size: large;\r\n}\r\n\r\n.titleString[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%] {\r\n  background: lightgray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJzaW9uTnVtYmVyIHtcclxuICBjb2xvcjogIzU1NTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4udGl0bGVTdHJpbmcge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "T+IO":
/*!******************************************************!*\
  !*** ./src/app/api/model/components/cat2/diamond.ts ***!
  \******************************************************/
/*! exports provided: Diamond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diamond", function() { return Diamond; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_energeticGraphite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/energeticGraphite */ "uUYW");




class Diamond extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["DIAMOND"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_energeticGraphite__WEBPACK_IMPORTED_MODULE_3__["EnergeticGraphite"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "TPNF":
/*!****************************************************************!*\
  !*** ./src/app/api/model/components/cat7/informationMatrix.ts ***!
  \****************************************************************/
/*! exports provided: InformationMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationMatrix", function() { return InformationMatrix; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat5_processor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat5/processor */ "dlOC");
/* harmony import */ var _cat5_particleBroadband__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat5/particleBroadband */ "2xQE");





class InformationMatrix extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["INFORMATION_MATRIX"];
        this.processingTime = 10;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["RESEARCH_FACILITY"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat5_processor__WEBPACK_IMPORTED_MODULE_3__["Processor"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat5_particleBroadband__WEBPACK_IMPORTED_MODULE_4__["ParticleBroadband"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "TUi5":
/*!************************************************************************!*\
  !*** ./src/app/api/model/components/cat6/microcrystallineComponent.ts ***!
  \************************************************************************/
/*! exports provided: MicrocrystallineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicrocrystallineComponent", function() { return MicrocrystallineComponent; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_highPuritySilicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/highPuritySilicon */ "eX+S");
/* harmony import */ var _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat1/copperIngot */ "eyO0");





class MicrocrystallineComponent extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MICROCRYSTALLINE_COMPONENT"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_highPuritySilicon__WEBPACK_IMPORTED_MODULE_3__["HighPuritySilicon"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_4__["CopperIngot"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "U/PE":
/*!*********************************************************!*\
  !*** ./src/app/api/model/buildings/cat1/accumulator.ts ***!
  \*********************************************************/
/*! exports provided: Accumulator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accumulator", function() { return Accumulator; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat2_crystalSilicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat2/crystalSilicon */ "LjGx");
/* harmony import */ var _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat5/superMagneticRing */ "nKlZ");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");






class Accumulator extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ACCUMULATOR"];
        this.processingTime = 5;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_5__["IronIngot"](), 6),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_4__["SuperMagneticRing"](), 6),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_crystalSilicon__WEBPACK_IMPORTED_MODULE_3__["CrystalSilicon"](), 4),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "U6OI":
/*!**********************************************************!*\
  !*** ./src/app/api/model/components/cat5/spaceWarper.ts ***!
  \**********************************************************/
/*! exports provided: SpaceWarper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceWarper", function() { return SpaceWarper; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat4_gravitonLens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat4/gravitonLens */ "KWYO");




class SpaceWarper extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SPACE_WARPER"];
        this.processingTime = 10;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_gravitonLens__WEBPACK_IMPORTED_MODULE_3__["GravitonLens"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "ULqe":
/*!*********************************************************!*\
  !*** ./src/app/api/model/buildings/cat1/rayReceiver.ts ***!
  \*********************************************************/
/*! exports provided: RayReceiver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RayReceiver", function() { return RayReceiver; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat3/steel */ "DOhc");
/* harmony import */ var _components_cat1_highPuritySilicon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/highPuritySilicon */ "eX+S");
/* harmony import */ var _components_cat6_photonCombiner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat6/photonCombiner */ "26ce");
/* harmony import */ var _components_cat5_processor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat5/processor */ "dlOC");
/* harmony import */ var _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/cat5/superMagneticRing */ "nKlZ");








class RayReceiver extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["RAY_RECEIVER"];
        this.processingTime = 8;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__["Steel"](), 20),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_highPuritySilicon__WEBPACK_IMPORTED_MODULE_4__["HighPuritySilicon"](), 20),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat6_photonCombiner__WEBPACK_IMPORTED_MODULE_5__["PhotonCombiner"](), 10),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_processor__WEBPACK_IMPORTED_MODULE_6__["Processor"](), 5),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_7__["SuperMagneticRing"](), 20),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "ViCB":
/*!*********************************************************************!*\
  !*** ./src/app/api/model/components/cat4/electromagneticTurbine.ts ***!
  \*********************************************************************/
/*! exports provided: ElectromagneticTurbine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectromagneticTurbine", function() { return ElectromagneticTurbine; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat3_electricMotor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat3/electricMotor */ "hBfu");
/* harmony import */ var _cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat2/magneticCoil */ "kryw");





class ElectromagneticTurbine extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ELECTROMAGNETIC_TURBINE"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat3_electricMotor__WEBPACK_IMPORTED_MODULE_3__["ElectricMotor"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_4__["MagneticCoil"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "W6me":
/*!**************************************************************!*\
  !*** ./src/app/api/model/components/cat7/structureMatrix.ts ***!
  \**************************************************************/
/*! exports provided: StructureMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructureMatrix", function() { return StructureMatrix; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat2_diamond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat2/diamond */ "T+IO");
/* harmony import */ var _cat3_titaniumCrystal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat3/titaniumCrystal */ "3vuu");





class StructureMatrix extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["STRUCTURE_MATRIX"];
        this.processingTime = 8;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["RESEARCH_FACILITY"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_diamond__WEBPACK_IMPORTED_MODULE_3__["Diamond"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat3_titaniumCrystal__WEBPACK_IMPORTED_MODULE_4__["TitaniumCrystal"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "YaW9":
/*!*********************************************************!*\
  !*** ./src/app/api/model/components/cat7/foundation.ts ***!
  \*********************************************************/
/*! exports provided: Foundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foundation", function() { return Foundation; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_stone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/stone */ "wDDY");
/* harmony import */ var _cat3_steel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat3/steel */ "DOhc");





class Foundation extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["FOUNDATION"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_stone__WEBPACK_IMPORTED_MODULE_3__["Stone"](), 3),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat3_steel__WEBPACK_IMPORTED_MODULE_4__["Steel"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "QibW");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bmJb":
/*!**********************************************************!*\
  !*** ./src/app/api/model/components/cat4/planeFilter.ts ***!
  \**********************************************************/
/*! exports provided: PlaneFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaneFilter", function() { return PlaneFilter; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat5_casimirCrystal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat5/casimirCrystal */ "FTmP");
/* harmony import */ var _cat3_titaniumGlass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat3/titaniumGlass */ "9EoU");





class PlaneFilter extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["PLANE_FILTER"];
        this.processingTime = 12;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat5_casimirCrystal__WEBPACK_IMPORTED_MODULE_3__["CasimirCrystal"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat3_titaniumGlass__WEBPACK_IMPORTED_MODULE_4__["TitaniumGlass"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "c0F3":
/*!*****************************************************!*\
  !*** ./src/app/api/model/baseComponents/fireIce.ts ***!
  \*****************************************************/
/*! exports provided: FireIce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireIce", function() { return FireIce; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class FireIce extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["FIRE_ICE"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["FIRE_ICE_VEIN"];
    }
}


/***/ }),

/***/ "cHJY":
/*!*****************************************************!*\
  !*** ./src/app/api/model/components/cat3/prisma.ts ***!
  \*****************************************************/
/*! exports provided: Prisma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prisma", function() { return Prisma; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat2_glass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat2/glass */ "/DPU");




class Prisma extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["PRISMA"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_glass__WEBPACK_IMPORTED_MODULE_3__["Glass"](), 3),
        ];
        this.outputAmount = 2;
    }
}


/***/ }),

/***/ "d1eX":
/*!********************************************************!*\
  !*** ./src/app/api/model/baseComponents/refinedOil.ts ***!
  \********************************************************/
/*! exports provided: RefinedOil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefinedOil", function() { return RefinedOil; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/input */ "Mu9/");
/* harmony import */ var _rawOil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rawOil */ "lvHr");




class RefinedOil extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["REFINED_OIL"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["OIL_REFINERY"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _rawOil__WEBPACK_IMPORTED_MODULE_3__["RawOil"](), 2),
        ];
        this.outputAmount = 2;
    }
}


/***/ }),

/***/ "dQjM":
/*!************************************************************!*\
  !*** ./src/app/api/model/components/cat5/plasmaExciter.ts ***!
  \************************************************************/
/*! exports provided: PlasmaExciter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlasmaExciter", function() { return PlasmaExciter; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat2/magneticCoil */ "kryw");
/* harmony import */ var _cat3_prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat3/prisma */ "cHJY");





class PlasmaExciter extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["PLASMA_EXCITER"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_3__["MagneticCoil"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat3_prisma__WEBPACK_IMPORTED_MODULE_4__["Prisma"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "dlOC":
/*!********************************************************!*\
  !*** ./src/app/api/model/components/cat5/processor.ts ***!
  \********************************************************/
/*! exports provided: Processor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Processor", function() { return Processor; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat4/circuitBoard */ "p+Xa");
/* harmony import */ var _cat6_microcrystallineComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat6/microcrystallineComponent */ "TUi5");





class Processor extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["PROCESSOR"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_3__["CircuitBoard"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat6_microcrystallineComponent__WEBPACK_IMPORTED_MODULE_4__["MicrocrystallineComponent"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "dr5w":
/*!************************************************************!*\
  !*** ./src/app/api/model/components/cat2/titaniumAlloy.ts ***!
  \************************************************************/
/*! exports provided: TitaniumAlloy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitaniumAlloy", function() { return TitaniumAlloy; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/titaniumIngot */ "H4OS");
/* harmony import */ var _cat3_steel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat3/steel */ "DOhc");
/* harmony import */ var _cat4_sulfuricAcid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cat4/sulfuricAcid */ "l7ns");






class TitaniumAlloy extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["TITANIUM_ALLOY"];
        this.processingTime = 12;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_3__["TitaniumIngot"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat3_steel__WEBPACK_IMPORTED_MODULE_4__["Steel"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_sulfuricAcid__WEBPACK_IMPORTED_MODULE_5__["SulfuricAcid"](), 8),
        ];
        this.outputAmount = 4;
    }
}


/***/ }),

/***/ "eX+S":
/*!****************************************************************!*\
  !*** ./src/app/api/model/components/cat1/highPuritySilicon.ts ***!
  \****************************************************************/
/*! exports provided: HighPuritySilicon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighPuritySilicon", function() { return HighPuritySilicon; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_siliconOre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/siliconOre */ "qmRk");




class HighPuritySilicon extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["HIGH_PURITY_SILICON"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_siliconOre__WEBPACK_IMPORTED_MODULE_3__["SiliconOre"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "ecWr":
/*!*******************************************************!*\
  !*** ./src/app/api/model/buildings/cat3/sorterOne.ts ***!
  \*******************************************************/
/*! exports provided: SorterOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterOne", function() { return SorterOne; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");
/* harmony import */ var _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat4/circuitBoard */ "p+Xa");





class SorterOne extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SORTER_MK_1"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_4__["CircuitBoard"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "eyO0":
/*!**********************************************************!*\
  !*** ./src/app/api/model/components/cat1/copperIngot.ts ***!
  \**********************************************************/
/*! exports provided: CopperIngot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopperIngot", function() { return CopperIngot; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_copperOre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/copperOre */ "JM5d");




class CopperIngot extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["COPPER_INGOT"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_copperOre__WEBPACK_IMPORTED_MODULE_3__["CopperOre"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "f7Jo":
/*!*******************************************************!*\
  !*** ./src/app/api/model/components/cat3/thruster.ts ***!
  \*******************************************************/
/*! exports provided: Thruster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thruster", function() { return Thruster; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _steel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./steel */ "DOhc");
/* harmony import */ var _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat1/copperIngot */ "eyO0");





class Thruster extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["THRUSTER"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _steel__WEBPACK_IMPORTED_MODULE_3__["Steel"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_4__["CopperIngot"](), 3),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "fXpC":
/*!***********************************************************************!*\
  !*** ./src/app/api/model/buildings/cat2/planetaryLogisticsStation.ts ***!
  \***********************************************************************/
/*! exports provided: PlanetaryLogisticsStation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetaryLogisticsStation", function() { return PlanetaryLogisticsStation; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat3/steel */ "DOhc");
/* harmony import */ var _components_cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/titaniumIngot */ "H4OS");
/* harmony import */ var _components_cat5_processor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat5/processor */ "dlOC");
/* harmony import */ var _components_cat5_particleContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat5/particleContainer */ "OJSu");







class PlanetaryLogisticsStation extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["PLANETARY_LOGISTICS_STATION"];
        this.processingTime = 20;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__["Steel"](), 40),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_titaniumIngot__WEBPACK_IMPORTED_MODULE_4__["TitaniumIngot"](), 40),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_processor__WEBPACK_IMPORTED_MODULE_5__["Processor"](), 40),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_particleContainer__WEBPACK_IMPORTED_MODULE_6__["ParticleContainer"](), 20),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "g25I":
/*!*********************************************************!*\
  !*** ./src/app/api/model/buildings/cat3/sorterThree.ts ***!
  \*********************************************************/
/*! exports provided: SorterThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterThree", function() { return SorterThree; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _sorterTwo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sorterTwo */ "AaFA");
/* harmony import */ var _components_cat4_electromagneticTurbine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat4/electromagneticTurbine */ "ViCB");





class SorterThree extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SORTER_MK_3"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _sorterTwo__WEBPACK_IMPORTED_MODULE_3__["SorterTwo"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_electromagneticTurbine__WEBPACK_IMPORTED_MODULE_4__["ElectromagneticTurbine"](), 1),
        ];
        this.outputAmount = 2;
    }
}


/***/ }),

/***/ "g75Q":
/*!***********************************************************!*\
  !*** ./src/app/api/model/baseComponents/kimberliteOre.ts ***!
  \***********************************************************/
/*! exports provided: KimberliteOre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KimberliteOre", function() { return KimberliteOre; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class KimberliteOre extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["KIMBERLITE_ORE"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["KIMBERLITE_VEIN"];
    }
}


/***/ }),

/***/ "hBfu":
/*!************************************************************!*\
  !*** ./src/app/api/model/components/cat3/electricMotor.ts ***!
  \************************************************************/
/*! exports provided: ElectricMotor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricMotor", function() { return ElectricMotor; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/ironIngot */ "infW");
/* harmony import */ var _cat4_gear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat4/gear */ "sO28");
/* harmony import */ var _cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cat2/magneticCoil */ "kryw");






class ElectricMotor extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ELECTRIC_MOTOR"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_gear__WEBPACK_IMPORTED_MODULE_4__["Gear"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_5__["MagneticCoil"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "huwH":
/*!*******************************************************************!*\
  !*** ./src/app/api/model/baseComponents/opticalGratingCrystal.ts ***!
  \*******************************************************************/
/*! exports provided: OpticalGratingCrystal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpticalGratingCrystal", function() { return OpticalGratingCrystal; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class OpticalGratingCrystal extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["OPTICAL_GRATING_CRYSTAL"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["OPTICAL_GRATING_CRYSTAL_VEIN"];
    }
}


/***/ }),

/***/ "i6f2":
/*!***********************************************************!*\
  !*** ./src/app/api/model/buildings/cat4/chemicalPlant.ts ***!
  \***********************************************************/
/*! exports provided: ChemicalPlant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChemicalPlant", function() { return ChemicalPlant; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat3/steel */ "DOhc");
/* harmony import */ var _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/stone */ "wDDY");
/* harmony import */ var _components_cat2_glass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat2/glass */ "/DPU");
/* harmony import */ var _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat4/circuitBoard */ "p+Xa");







class ChemicalPlant extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CHEMICAL_PLANT"];
        this.processingTime = 5;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat3_steel__WEBPACK_IMPORTED_MODULE_3__["Steel"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__["Stone"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_glass__WEBPACK_IMPORTED_MODULE_5__["Glass"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_6__["CircuitBoard"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "iVdA":
/*!***********************************************************!*\
  !*** ./src/app/api/model/components/cat7/energyMatrix.ts ***!
  \***********************************************************/
/*! exports provided: EnergyMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergyMatrix", function() { return EnergyMatrix; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_energeticGraphite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/energeticGraphite */ "uUYW");
/* harmony import */ var _baseComponents_hydrogen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../baseComponents/hydrogen */ "w4ev");





class EnergyMatrix extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ENERGY_MATRIX"];
        this.processingTime = 6;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["RESEARCH_FACILITY"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_energeticGraphite__WEBPACK_IMPORTED_MODULE_3__["EnergeticGraphite"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_hydrogen__WEBPACK_IMPORTED_MODULE_4__["Hydrogen"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "ijbo":
/*!*********************************************************************!*\
  !*** ./src/app/api/model/components/cat6/advancedCasimirCrystal.ts ***!
  \*********************************************************************/
/*! exports provided: AdvancedCasimirCrystal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedCasimirCrystal", function() { return AdvancedCasimirCrystal; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_opticalGratingCrystal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/opticalGratingCrystal */ "huwH");
/* harmony import */ var _cat1_graphene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat1/graphene */ "7DtB");
/* harmony import */ var _baseComponents_hydrogen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../baseComponents/hydrogen */ "w4ev");






class AdvancedCasimirCrystal extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["A_CASIMIR_CRYSTAL"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_opticalGratingCrystal__WEBPACK_IMPORTED_MODULE_3__["OpticalGratingCrystal"](), 6),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_graphene__WEBPACK_IMPORTED_MODULE_4__["Graphene"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_hydrogen__WEBPACK_IMPORTED_MODULE_5__["Hydrogen"](), 12),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "infW":
/*!********************************************************!*\
  !*** ./src/app/api/model/components/cat1/ironIngot.ts ***!
  \********************************************************/
/*! exports provided: IronIngot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronIngot", function() { return IronIngot; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_ironOre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/ironOre */ "lBGu");




class IronIngot extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["IRON_INGOT"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_ironOre__WEBPACK_IMPORTED_MODULE_3__["IronOre"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "k4vE":
/*!************************************************************!*\
  !*** ./src/app/api/model/components/cat3/strangeMatter.ts ***!
  \************************************************************/
/*! exports provided: StrangeMatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrangeMatter", function() { return StrangeMatter; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat5_particleContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat5/particleContainer */ "OJSu");
/* harmony import */ var _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat1/ironIngot */ "infW");
/* harmony import */ var _cat4_deuterium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cat4/deuterium */ "QLRj");






class StrangeMatter extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["STRANGE_MATTER"];
        this.processingTime = 8;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINI_PARTICLE_COLLIDER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat5_particleContainer__WEBPACK_IMPORTED_MODULE_3__["ParticleContainer"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_4__["IronIngot"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_deuterium__WEBPACK_IMPORTED_MODULE_5__["Deuterium"](), 10),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "kR/r":
/*!********************************************************!*\
  !*** ./src/app/api/model/buildings/cat1/solarPanel.ts ***!
  \********************************************************/
/*! exports provided: SolarPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarPanel", function() { return SolarPanel; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_copperIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/copperIngot */ "eyO0");
/* harmony import */ var _components_cat1_highPuritySilicon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/highPuritySilicon */ "eX+S");
/* harmony import */ var _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat4/circuitBoard */ "p+Xa");






class SolarPanel extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SOLAR_PANEL"];
        this.processingTime = 5;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_copperIngot__WEBPACK_IMPORTED_MODULE_3__["CopperIngot"](), 6),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_highPuritySilicon__WEBPACK_IMPORTED_MODULE_4__["HighPuritySilicon"](), 6),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__["CircuitBoard"](), 4),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "kryw":
/*!***********************************************************!*\
  !*** ./src/app/api/model/components/cat2/magneticCoil.ts ***!
  \***********************************************************/
/*! exports provided: MagneticCoil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagneticCoil", function() { return MagneticCoil; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _magnet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./magnet */ "EWYf");
/* harmony import */ var _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat1/copperIngot */ "eyO0");





class MagneticCoil extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MAGNETIC_COIL"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _magnet__WEBPACK_IMPORTED_MODULE_3__["Magnet"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_4__["CopperIngot"](), 1),
        ];
        this.outputAmount = 2;
    }
}


/***/ }),

/***/ "l7ns":
/*!***********************************************************!*\
  !*** ./src/app/api/model/components/cat4/sulfuricAcid.ts ***!
  \***********************************************************/
/*! exports provided: SulfuricAcid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulfuricAcid", function() { return SulfuricAcid; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_refinedOil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/refinedOil */ "d1eX");
/* harmony import */ var _baseComponents_stoneOre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../baseComponents/stoneOre */ "nyWs");
/* harmony import */ var _baseComponents_water__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../baseComponents/water */ "xsJL");






class SulfuricAcid extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SULFURIC_ACID"];
        this.processingTime = 6;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CHEMICAL_PLANT"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_refinedOil__WEBPACK_IMPORTED_MODULE_3__["RefinedOil"](), 6),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_stoneOre__WEBPACK_IMPORTED_MODULE_4__["StoneOre"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_water__WEBPACK_IMPORTED_MODULE_5__["Water"](), 4),
        ];
        this.outputAmount = 4;
    }
}


/***/ }),

/***/ "l9lQ":
/*!****************************************************************!*\
  !*** ./src/app/api/model/buildings/cat1/wirelessPowerTower.ts ***!
  \****************************************************************/
/*! exports provided: WirelessPowerTower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WirelessPowerTower", function() { return WirelessPowerTower; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _teslaTower__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teslaTower */ "/nJM");
/* harmony import */ var _components_cat5_plasmaExciter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat5/plasmaExciter */ "dQjM");





class WirelessPowerTower extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["WIRELESS_POWER_TOWER"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _teslaTower__WEBPACK_IMPORTED_MODULE_3__["TeslaTower"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_plasmaExciter__WEBPACK_IMPORTED_MODULE_4__["PlasmaExciter"](), 3),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "lBGu":
/*!*****************************************************!*\
  !*** ./src/app/api/model/baseComponents/ironOre.ts ***!
  \*****************************************************/
/*! exports provided: IronOre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOre", function() { return IronOre; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class IronOre extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["IRON_ORE"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["IRON_VEIN"];
    }
}


/***/ }),

/***/ "lLUC":
/*!*************************************************************!*\
  !*** ./src/app/api/model/buildings/cat2/conveyorBeltOne.ts ***!
  \*************************************************************/
/*! exports provided: ConveyorBeltOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConveyorBeltOne", function() { return ConveyorBeltOne; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");
/* harmony import */ var _components_cat4_gear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat4/gear */ "sO28");





class ConveyorBeltOne extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CONVEYOR_BELT_MK_1"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_gear__WEBPACK_IMPORTED_MODULE_4__["Gear"](), 1),
        ];
        this.outputAmount = 3;
    }
}


/***/ }),

/***/ "lQT/":
/*!*****************************************************************!*\
  !*** ./src/app/api/model/buildings/cat1/thermalPowerStation.ts ***!
  \*****************************************************************/
/*! exports provided: ThermalPowerStation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThermalPowerStation", function() { return ThermalPowerStation; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");
/* harmony import */ var _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/stone */ "wDDY");
/* harmony import */ var _components_cat4_gear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat4/gear */ "sO28");
/* harmony import */ var _components_cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat2/magneticCoil */ "kryw");







class ThermalPowerStation extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["THERMAL_POWER_STATION"];
        this.processingTime = 5;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 10),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__["Stone"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_gear__WEBPACK_IMPORTED_MODULE_5__["Gear"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_6__["MagneticCoil"](), 4),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "lvHr":
/*!****************************************************!*\
  !*** ./src/app/api/model/baseComponents/rawOil.ts ***!
  \****************************************************/
/*! exports provided: RawOil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawOil", function() { return RawOil; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class RawOil extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["RAW_OIL"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["OIL_EXTRACTOR"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["RAW_OIL_SPOT"];
    }
}


/***/ }),

/***/ "nKlZ":
/*!****************************************************************!*\
  !*** ./src/app/api/model/components/cat5/superMagneticRing.ts ***!
  \****************************************************************/
/*! exports provided: SuperMagneticRing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperMagneticRing", function() { return SuperMagneticRing; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat4_electromagneticTurbine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat4/electromagneticTurbine */ "ViCB");
/* harmony import */ var _cat2_magnet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat2/magnet */ "EWYf");
/* harmony import */ var _cat1_energeticGraphite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cat1/energeticGraphite */ "uUYW");






class SuperMagneticRing extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SUPER_MAGNETIC_RING"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_electromagneticTurbine__WEBPACK_IMPORTED_MODULE_3__["ElectromagneticTurbine"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_magnet__WEBPACK_IMPORTED_MODULE_4__["Magnet"](), 3),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_energeticGraphite__WEBPACK_IMPORTED_MODULE_5__["EnergeticGraphite"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "nMLd":
/*!************************************************************************!*\
  !*** ./src/app/api/model/baseComponents/spiniformStalagmiteCrystal.ts ***!
  \************************************************************************/
/*! exports provided: SpiniformStalagmiteCrystal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpiniformStalagmiteCrystal", function() { return SpiniformStalagmiteCrystal; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class SpiniformStalagmiteCrystal extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SPINIFORM_STALGMITE_CRYSTAL"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SPINIFORM_STALGMITE_CRYSTAL_VEIN"];
    }
}


/***/ }),

/***/ "nyWs":
/*!******************************************************!*\
  !*** ./src/app/api/model/baseComponents/stoneOre.ts ***!
  \******************************************************/
/*! exports provided: StoneOre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoneOre", function() { return StoneOre; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class StoneOre extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["STONE_ORE"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["STONE_VEIN"];
    }
}


/***/ }),

/***/ "p+Xa":
/*!***********************************************************!*\
  !*** ./src/app/api/model/components/cat4/circuitBoard.ts ***!
  \***********************************************************/
/*! exports provided: CircuitBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircuitBoard", function() { return CircuitBoard; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/ironIngot */ "infW");
/* harmony import */ var _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat1/copperIngot */ "eyO0");





class CircuitBoard extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CIRCUIT_BOARD"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_copperIngot__WEBPACK_IMPORTED_MODULE_4__["CopperIngot"](), 1),
        ];
        this.outputAmount = 2;
    }
}


/***/ }),

/***/ "p1Tu":
/*!*******************************************************!*\
  !*** ./src/app/api/model/buildings/cat3/waterPump.ts ***!
  \*******************************************************/
/*! exports provided: WaterPump */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterPump", function() { return WaterPump; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");
/* harmony import */ var _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat1/stone */ "wDDY");
/* harmony import */ var _components_cat3_electricMotor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat3/electricMotor */ "hBfu");
/* harmony import */ var _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat4/circuitBoard */ "p+Xa");







class WaterPump extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["WATER_PUMP"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_stone__WEBPACK_IMPORTED_MODULE_4__["Stone"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat3_electricMotor__WEBPACK_IMPORTED_MODULE_5__["ElectricMotor"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_6__["CircuitBoard"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "qL10":
/*!***********************************************************!*\
  !*** ./src/app/api/model/buildings/cat3/miningMachine.ts ***!
  \***********************************************************/
/*! exports provided: MiningMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiningMachine", function() { return MiningMachine; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");
/* harmony import */ var _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat4/circuitBoard */ "p+Xa");
/* harmony import */ var _components_cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat2/magneticCoil */ "kryw");
/* harmony import */ var _components_cat4_gear__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat4/gear */ "sO28");







class MiningMachine extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_4__["CircuitBoard"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_magneticCoil__WEBPACK_IMPORTED_MODULE_5__["MagneticCoil"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_gear__WEBPACK_IMPORTED_MODULE_6__["Gear"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "qmRk":
/*!********************************************************!*\
  !*** ./src/app/api/model/baseComponents/siliconOre.ts ***!
  \********************************************************/
/*! exports provided: SiliconOre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiliconOre", function() { return SiliconOre; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class SiliconOre extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SILICON_ORE"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SILICON_VEIN"];
    }
}


/***/ }),

/***/ "sO28":
/*!***************************************************!*\
  !*** ./src/app/api/model/components/cat4/gear.ts ***!
  \***************************************************/
/*! exports provided: Gear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gear", function() { return Gear; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat1/ironIngot */ "infW");




class Gear extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["GEAR"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "tG12":
/*!***************************************************************!*\
  !*** ./src/app/api/model/buildings/cat2/conveyorBeltThree.ts ***!
  \***************************************************************/
/*! exports provided: ConveyorBeltThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConveyorBeltThree", function() { return ConveyorBeltThree; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_graphene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/graphene */ "7DtB");
/* harmony import */ var _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat5/superMagneticRing */ "nKlZ");
/* harmony import */ var _conveyorBeltTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conveyorBeltTwo */ "7diH");






class ConveyorBeltThree extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CONVEYOR_BELT_MK_3"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _conveyorBeltTwo__WEBPACK_IMPORTED_MODULE_5__["ConveyorBeltTwo"](), 3),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_4__["SuperMagneticRing"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_graphene__WEBPACK_IMPORTED_MODULE_3__["Graphene"](), 1),
        ];
        this.outputAmount = 3;
    }
}


/***/ }),

/***/ "tdEO":
/*!**************************************************************!*\
  !*** ./src/app/api/model/components/cat3/advancedDiamond.ts ***!
  \**************************************************************/
/*! exports provided: AdvancedDiamond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedDiamond", function() { return AdvancedDiamond; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_kimberliteOre__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../baseComponents/kimberliteOre */ "g75Q");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");




class AdvancedDiamond extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_3__["A_DIAMOND"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_3__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_1__["Input"](new _baseComponents_kimberliteOre__WEBPACK_IMPORTED_MODULE_2__["KimberliteOre"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "tmKS":
/*!************************************************************!*\
  !*** ./src/app/api/model/baseComponents/fractalSilicon.ts ***!
  \************************************************************/
/*! exports provided: FractalSilicon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FractalSilicon", function() { return FractalSilicon; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class FractalSilicon extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["FRACTAL_SILICON"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["FRACTAL_SILICON_VEIN"];
    }
}


/***/ }),

/***/ "uUYW":
/*!****************************************************************!*\
  !*** ./src/app/api/model/components/cat1/energeticGraphite.ts ***!
  \****************************************************************/
/*! exports provided: EnergeticGraphite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergeticGraphite", function() { return EnergeticGraphite; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_coalOre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/coalOre */ "zanG");




class EnergeticGraphite extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ENERGETIC_GRAPHITE"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_coalOre__WEBPACK_IMPORTED_MODULE_3__["CoalOre"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "ubz/":
/*!*****************************************************************!*\
  !*** ./src/app/api/model/buildings/cat1/satelliteSubstation.ts ***!
  \*****************************************************************/
/*! exports provided: SatelliteSubstation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SatelliteSubstation", function() { return SatelliteSubstation; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _wirelessPowerTower__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wirelessPowerTower */ "l9lQ");
/* harmony import */ var _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat5/superMagneticRing */ "nKlZ");
/* harmony import */ var _components_cat5_frameMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat5/frameMaterial */ "wfrA");






class SatelliteSubstation extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SATELLITE_SUBSTATION"];
        this.processingTime = 5;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _wirelessPowerTower__WEBPACK_IMPORTED_MODULE_3__["WirelessPowerTower"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_4__["SuperMagneticRing"](), 10),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_frameMaterial__WEBPACK_IMPORTED_MODULE_5__["FrameMaterial"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vYGM":
/*!**********************************************************!*\
  !*** ./src/app/api/model/buildings/cat4/assemblerOne.ts ***!
  \**********************************************************/
/*! exports provided: AssemblerOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssemblerOne", function() { return AssemblerOne; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat1/ironIngot */ "infW");
/* harmony import */ var _components_cat4_gear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat4/gear */ "sO28");
/* harmony import */ var _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat4/circuitBoard */ "p+Xa");






class AssemblerOne extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLING_MACHINE_MK_1"];
        this.processingTime = 2;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat1_ironIngot__WEBPACK_IMPORTED_MODULE_3__["IronIngot"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_gear__WEBPACK_IMPORTED_MODULE_4__["Gear"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_circuitBoard__WEBPACK_IMPORTED_MODULE_5__["CircuitBoard"](), 4),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "vh5G":
/*!******************************************************!*\
  !*** ./src/app/api/model/components/cat1/plastic.ts ***!
  \******************************************************/
/*! exports provided: Plastic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plastic", function() { return Plastic; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_refinedOil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/refinedOil */ "d1eX");
/* harmony import */ var _energeticGraphite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./energeticGraphite */ "uUYW");





class Plastic extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["PLASTIC"];
        this.processingTime = 3;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["CHEMICAL_PLANT"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_refinedOil__WEBPACK_IMPORTED_MODULE_3__["RefinedOil"](), 2),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _energeticGraphite__WEBPACK_IMPORTED_MODULE_4__["EnergeticGraphite"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "w4ev":
/*!******************************************************!*\
  !*** ./src/app/api/model/baseComponents/hydrogen.ts ***!
  \******************************************************/
/*! exports provided: Hydrogen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hydrogen", function() { return Hydrogen; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/input */ "Mu9/");
/* harmony import */ var _rawOil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rawOil */ "lvHr");




class Hydrogen extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["HYDROGEN"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["OIL_REFINERY"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _rawOil__WEBPACK_IMPORTED_MODULE_3__["RawOil"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "wDDY":
/*!****************************************************!*\
  !*** ./src/app/api/model/components/cat1/stone.ts ***!
  \****************************************************/
/*! exports provided: Stone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stone", function() { return Stone; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_stoneOre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/stoneOre */ "nyWs");




class Stone extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["STONE"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_stoneOre__WEBPACK_IMPORTED_MODULE_3__["StoneOre"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "wW5/":
/*!**************************************************************!*\
  !*** ./src/app/api/model/components/cat2/deuteronFuelRod.ts ***!
  \**************************************************************/
/*! exports provided: DeuteronFuelRod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeuteronFuelRod", function() { return DeuteronFuelRod; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _titaniumAlloy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./titaniumAlloy */ "dr5w");
/* harmony import */ var _cat4_deuterium__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat4/deuterium */ "QLRj");
/* harmony import */ var _cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cat5/superMagneticRing */ "nKlZ");






class DeuteronFuelRod extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["DEUTERON_FUEL_ROD"];
        this.processingTime = 6;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _titaniumAlloy__WEBPACK_IMPORTED_MODULE_3__["TitaniumAlloy"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_deuterium__WEBPACK_IMPORTED_MODULE_4__["Deuterium"](), 10),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat5_superMagneticRing__WEBPACK_IMPORTED_MODULE_5__["SuperMagneticRing"](), 1),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "wfrA":
/*!************************************************************!*\
  !*** ./src/app/api/model/components/cat5/frameMaterial.ts ***!
  \************************************************************/
/*! exports provided: FrameMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameMaterial", function() { return FrameMaterial; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _cat4_carbonNanotube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat4/carbonNanotube */ "MAHN");
/* harmony import */ var _cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat2/titaniumAlloy */ "dr5w");
/* harmony import */ var _cat1_highPuritySilicon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cat1/highPuritySilicon */ "eX+S");






class FrameMaterial extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["FRAME_MATERIAL"];
        this.processingTime = 6;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat4_carbonNanotube__WEBPACK_IMPORTED_MODULE_3__["CarbonNanotube"](), 4),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_4__["TitaniumAlloy"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _cat1_highPuritySilicon__WEBPACK_IMPORTED_MODULE_5__["HighPuritySilicon"](), 1),
        ];
        this.outputAmount = 6;
    }
}


/***/ }),

/***/ "xsJL":
/*!***************************************************!*\
  !*** ./src/app/api/model/baseComponents/water.ts ***!
  \***************************************************/
/*! exports provided: Water */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Water", function() { return Water; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class Water extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["WATER"];
        this.processingTime = 1;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["WATER_PUMP"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["WATER_PUMP"] + 's';
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "xucN":
/*!*********************************************!*\
  !*** ./src/app/api/util/constants/names.ts ***!
  \*********************************************/
/*! exports provided: ASSEMBLER, RESEARCH_FACILITY, IRON_ORE, COPPER_ORE, SILICON_ORE, TITANIUM_ORE, STONE_ORE, COAL_ORE, FRACTAL_SILICON, KIMBERLITE_ORE, UNIPOLAR_MAGNET, OPTICAL_GRATING_CRYSTAL, SPINIFORM_STALGMITE_CRYSTAL, RAW_OIL, WATER, FIRE_ICE, HYDROGEN, REFINED_OIL, IRON_VEIN, COPPER_VEIN, SILICON_VEIN, TITANIUM_VEIN, STONE_VEIN, COAL_VEIN, KIMBERLITE_VEIN, UNIPOLAR_MAGNET_VEIN, OPTICAL_GRATING_CRYSTAL_VEIN, SPINIFORM_STALGMITE_CRYSTAL_VEIN, FRACTAL_SILICON_VEIN, RAW_OIL_SPOT, FIRE_ICE_VEIN, IRON_INGOT, COPPER_INGOT, HIGH_PURITY_SILICON, TITANIUM_INGOT, STONE, ENERGETIC_GRAPHITE, PLASMA_REFINING, PLASTIC, GRAPHENE, MAGNET, MAGNETIC_COIL, CRYSTAL_SILICON, TITANIUM_ALLOY, GLASS, DIAMOND, X_RAY_CRACKING, ORGANIC_CRYSTAL, A_GRAPHENE, HYDROGEN_FUEL_ROD, DEUTERON_FUEL_ROD, STEEL, ELECTRIC_MOTOR, A_CRYSTAL_SILICON, TITANIUM_GLASS, PRISMA, A_DIAMOND, TITANIUM_CRYSTAL, THRUSTER, REINFORCED_THRUSTER, STRANGE_MATTER, GEAR, ELECTROMAGNETIC_TURBINE, CIRCUIT_BOARD, GRAVITON_LENS, SULFURIC_ACID, DEUTERIUM, PLANE_FILTER, CARBON_NANOTUBE, LOGISTICS_DRONE, LOGISTICS_VESSEL, SMALL_CARRIER_ROCKET, SILICON_ORE_FROM_STONE, PLASMA_EXCITER, SUPER_MAGNETIC_RING, PARTICLE_BROADBAND, PROCESSOR, CASIMIR_CRYSTAL, PARTICLE_CONTAINER, SPACE_WARPER, A_CARBON_NANOTUBE, SOLAR_SAIL, FRAME_MATERIAL, DYSON_SPHERE_COMPONENT, PHOTON_COMBINER, A_PHOTON_COMBINER, MICROCRYSTALLINE_COMPONENT, QUANTUM_CHIP, A_CASIMIR_CRYSTAL, A_PARTICLE_CONTAINER, A_SPACE_WARPER, ELECTROMAGNETIC_MATRIX, ENERGY_MATRIX, STRUCTURE_MATRIX, INFORMATION_MATRIX, GRAVITY_MATRIX, FOUNDATION, TESLA_TOWER, WIRELESS_POWER_TOWER, SATELLITE_SUBSTATION, WIND_TURBINE, THERMAL_POWER_STATION, SOLAR_PANEL, ACCUMULATOR, RAY_RECEIVER, MINI_FUSION_POWER_STATION, ENERGY_EXCHANGER, CONVEYOR_BELT_MK_1, CONVEYOR_BELT_MK_2, CONVEYOR_BELT_MK_3, SPLITTER, STORAGE_MK_1, STORAGE_MK_2, STORAGE_TANK, EM_RAIL_EJECTOR, PLANETARY_LOGISTICS_STATION, MINI_PARTICLE_COLLIDER, SORTER_MK_1, SORTER_MK_2, SORTER_MK_3, MINING_MACHINE, WATER_PUMP, OIL_EXTRACTOR, OIL_REFINERY, VERTICAL_LAUNCHING_SILO, INTERSTELLAR_LOGISTICS_STATION, ASSEMBLING_MACHINE_MK_1, ASSEMBLING_MACHINE_MK_2, ASSEMBLING_MACHINE_MK_3, SMELTER, FRACTIONATOR, CHEMICAL_PLANT, MATRIX_LAB, ORBIT_COLLECTOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSEMBLER", function() { return ASSEMBLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESEARCH_FACILITY", function() { return RESEARCH_FACILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRON_ORE", function() { return IRON_ORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COPPER_ORE", function() { return COPPER_ORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SILICON_ORE", function() { return SILICON_ORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITANIUM_ORE", function() { return TITANIUM_ORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STONE_ORE", function() { return STONE_ORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COAL_ORE", function() { return COAL_ORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRACTAL_SILICON", function() { return FRACTAL_SILICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KIMBERLITE_ORE", function() { return KIMBERLITE_ORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIPOLAR_MAGNET", function() { return UNIPOLAR_MAGNET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTICAL_GRATING_CRYSTAL", function() { return OPTICAL_GRATING_CRYSTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINIFORM_STALGMITE_CRYSTAL", function() { return SPINIFORM_STALGMITE_CRYSTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RAW_OIL", function() { return RAW_OIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WATER", function() { return WATER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRE_ICE", function() { return FIRE_ICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HYDROGEN", function() { return HYDROGEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFINED_OIL", function() { return REFINED_OIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRON_VEIN", function() { return IRON_VEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COPPER_VEIN", function() { return COPPER_VEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SILICON_VEIN", function() { return SILICON_VEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITANIUM_VEIN", function() { return TITANIUM_VEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STONE_VEIN", function() { return STONE_VEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COAL_VEIN", function() { return COAL_VEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KIMBERLITE_VEIN", function() { return KIMBERLITE_VEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIPOLAR_MAGNET_VEIN", function() { return UNIPOLAR_MAGNET_VEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTICAL_GRATING_CRYSTAL_VEIN", function() { return OPTICAL_GRATING_CRYSTAL_VEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINIFORM_STALGMITE_CRYSTAL_VEIN", function() { return SPINIFORM_STALGMITE_CRYSTAL_VEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRACTAL_SILICON_VEIN", function() { return FRACTAL_SILICON_VEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RAW_OIL_SPOT", function() { return RAW_OIL_SPOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRE_ICE_VEIN", function() { return FIRE_ICE_VEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRON_INGOT", function() { return IRON_INGOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COPPER_INGOT", function() { return COPPER_INGOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGH_PURITY_SILICON", function() { return HIGH_PURITY_SILICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITANIUM_INGOT", function() { return TITANIUM_INGOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STONE", function() { return STONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENERGETIC_GRAPHITE", function() { return ENERGETIC_GRAPHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLASMA_REFINING", function() { return PLASMA_REFINING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLASTIC", function() { return PLASTIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPHENE", function() { return GRAPHENE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGNET", function() { return MAGNET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGNETIC_COIL", function() { return MAGNETIC_COIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRYSTAL_SILICON", function() { return CRYSTAL_SILICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITANIUM_ALLOY", function() { return TITANIUM_ALLOY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLASS", function() { return GLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIAMOND", function() { return DIAMOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X_RAY_CRACKING", function() { return X_RAY_CRACKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORGANIC_CRYSTAL", function() { return ORGANIC_CRYSTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_GRAPHENE", function() { return A_GRAPHENE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HYDROGEN_FUEL_ROD", function() { return HYDROGEN_FUEL_ROD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEUTERON_FUEL_ROD", function() { return DEUTERON_FUEL_ROD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEEL", function() { return STEEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELECTRIC_MOTOR", function() { return ELECTRIC_MOTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_CRYSTAL_SILICON", function() { return A_CRYSTAL_SILICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITANIUM_GLASS", function() { return TITANIUM_GLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRISMA", function() { return PRISMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_DIAMOND", function() { return A_DIAMOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITANIUM_CRYSTAL", function() { return TITANIUM_CRYSTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THRUSTER", function() { return THRUSTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REINFORCED_THRUSTER", function() { return REINFORCED_THRUSTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRANGE_MATTER", function() { return STRANGE_MATTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEAR", function() { return GEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELECTROMAGNETIC_TURBINE", function() { return ELECTROMAGNETIC_TURBINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIRCUIT_BOARD", function() { return CIRCUIT_BOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAVITON_LENS", function() { return GRAVITON_LENS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SULFURIC_ACID", function() { return SULFURIC_ACID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEUTERIUM", function() { return DEUTERIUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLANE_FILTER", function() { return PLANE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARBON_NANOTUBE", function() { return CARBON_NANOTUBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGISTICS_DRONE", function() { return LOGISTICS_DRONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGISTICS_VESSEL", function() { return LOGISTICS_VESSEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMALL_CARRIER_ROCKET", function() { return SMALL_CARRIER_ROCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SILICON_ORE_FROM_STONE", function() { return SILICON_ORE_FROM_STONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLASMA_EXCITER", function() { return PLASMA_EXCITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPER_MAGNETIC_RING", function() { return SUPER_MAGNETIC_RING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_BROADBAND", function() { return PARTICLE_BROADBAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESSOR", function() { return PROCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASIMIR_CRYSTAL", function() { return CASIMIR_CRYSTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_CONTAINER", function() { return PARTICLE_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE_WARPER", function() { return SPACE_WARPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_CARBON_NANOTUBE", function() { return A_CARBON_NANOTUBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLAR_SAIL", function() { return SOLAR_SAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRAME_MATERIAL", function() { return FRAME_MATERIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYSON_SPHERE_COMPONENT", function() { return DYSON_SPHERE_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTON_COMBINER", function() { return PHOTON_COMBINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_PHOTON_COMBINER", function() { return A_PHOTON_COMBINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MICROCRYSTALLINE_COMPONENT", function() { return MICROCRYSTALLINE_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUANTUM_CHIP", function() { return QUANTUM_CHIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_CASIMIR_CRYSTAL", function() { return A_CASIMIR_CRYSTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_PARTICLE_CONTAINER", function() { return A_PARTICLE_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_SPACE_WARPER", function() { return A_SPACE_WARPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELECTROMAGNETIC_MATRIX", function() { return ELECTROMAGNETIC_MATRIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENERGY_MATRIX", function() { return ENERGY_MATRIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRUCTURE_MATRIX", function() { return STRUCTURE_MATRIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFORMATION_MATRIX", function() { return INFORMATION_MATRIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAVITY_MATRIX", function() { return GRAVITY_MATRIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUNDATION", function() { return FOUNDATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESLA_TOWER", function() { return TESLA_TOWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIRELESS_POWER_TOWER", function() { return WIRELESS_POWER_TOWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SATELLITE_SUBSTATION", function() { return SATELLITE_SUBSTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIND_TURBINE", function() { return WIND_TURBINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THERMAL_POWER_STATION", function() { return THERMAL_POWER_STATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLAR_PANEL", function() { return SOLAR_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCUMULATOR", function() { return ACCUMULATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RAY_RECEIVER", function() { return RAY_RECEIVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINI_FUSION_POWER_STATION", function() { return MINI_FUSION_POWER_STATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENERGY_EXCHANGER", function() { return ENERGY_EXCHANGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVEYOR_BELT_MK_1", function() { return CONVEYOR_BELT_MK_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVEYOR_BELT_MK_2", function() { return CONVEYOR_BELT_MK_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVEYOR_BELT_MK_3", function() { return CONVEYOR_BELT_MK_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPLITTER", function() { return SPLITTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_MK_1", function() { return STORAGE_MK_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_MK_2", function() { return STORAGE_MK_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_TANK", function() { return STORAGE_TANK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EM_RAIL_EJECTOR", function() { return EM_RAIL_EJECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLANETARY_LOGISTICS_STATION", function() { return PLANETARY_LOGISTICS_STATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINI_PARTICLE_COLLIDER", function() { return MINI_PARTICLE_COLLIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORTER_MK_1", function() { return SORTER_MK_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORTER_MK_2", function() { return SORTER_MK_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORTER_MK_3", function() { return SORTER_MK_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINING_MACHINE", function() { return MINING_MACHINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WATER_PUMP", function() { return WATER_PUMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OIL_EXTRACTOR", function() { return OIL_EXTRACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OIL_REFINERY", function() { return OIL_REFINERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTICAL_LAUNCHING_SILO", function() { return VERTICAL_LAUNCHING_SILO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERSTELLAR_LOGISTICS_STATION", function() { return INTERSTELLAR_LOGISTICS_STATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSEMBLING_MACHINE_MK_1", function() { return ASSEMBLING_MACHINE_MK_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSEMBLING_MACHINE_MK_2", function() { return ASSEMBLING_MACHINE_MK_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSEMBLING_MACHINE_MK_3", function() { return ASSEMBLING_MACHINE_MK_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMELTER", function() { return SMELTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRACTIONATOR", function() { return FRACTIONATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEMICAL_PLANT", function() { return CHEMICAL_PLANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATRIX_LAB", function() { return MATRIX_LAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORBIT_COLLECTOR", function() { return ORBIT_COLLECTOR; });
// -----------------------------------------------------------------------------------------
// Other
// -----------------------------------------------------------------------------------------
const ASSEMBLER = 'Assembler';
const RESEARCH_FACILITY = 'Research Facility';
// -----------------------------------------------------------------------------------------
// Base Components
// -----------------------------------------------------------------------------------------
const IRON_ORE = 'Iron Ore';
const COPPER_ORE = 'Copper Ore';
const SILICON_ORE = 'Silicon Ore';
const TITANIUM_ORE = 'Titanium Ore';
const STONE_ORE = 'Stone Ore';
const COAL_ORE = 'Coal Ore';
const FRACTAL_SILICON = 'Fractal Silicon';
const KIMBERLITE_ORE = 'Kimberlite Ore';
const UNIPOLAR_MAGNET = 'Unipolar magnet';
const OPTICAL_GRATING_CRYSTAL = 'Optical Grating Crystal';
const SPINIFORM_STALGMITE_CRYSTAL = 'Spiniform Stalagmite Crystal';
const RAW_OIL = 'Raw Oil';
const WATER = 'Water';
const FIRE_ICE = 'Fire ice';
const HYDROGEN = 'Hydrogen';
const REFINED_OIL = 'Refined Oil';
// -----------------------------------------------------------------------------------------
// Veins
// -----------------------------------------------------------------------------------------
const IRON_VEIN = 'Iron Veins';
const COPPER_VEIN = 'Copper Veins';
const SILICON_VEIN = 'Silicon Veins';
const TITANIUM_VEIN = 'Titanium Veins';
const STONE_VEIN = 'Stone Veins';
const COAL_VEIN = 'Coal Veins';
const KIMBERLITE_VEIN = 'Kimberlite Veins';
const UNIPOLAR_MAGNET_VEIN = 'Unipolar magnet Veins';
const OPTICAL_GRATING_CRYSTAL_VEIN = 'Optical Grating Crystal Veins';
const SPINIFORM_STALGMITE_CRYSTAL_VEIN = 'Spiniform Stalagmite Crystal Veins';
const FRACTAL_SILICON_VEIN = 'Fractal Silicon Veins';
const RAW_OIL_SPOT = 'Raw Oil Spots';
const FIRE_ICE_VEIN = 'Fire ice veins';
// -----------------------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------------------
// 1
const IRON_INGOT = 'Iron Ingot';
const COPPER_INGOT = 'Copper Ingot';
const HIGH_PURITY_SILICON = 'High-purity silicon';
const TITANIUM_INGOT = 'Titanium Ingot';
const STONE = 'Stone';
const ENERGETIC_GRAPHITE = 'Energetic graphite';
const PLASMA_REFINING = '(Recipe) Plasma Refining';
const PLASTIC = 'Plastic';
const GRAPHENE = 'Graphene';
// 2
const MAGNET = 'Magnet';
const MAGNETIC_COIL = 'Magnetic Coil';
const CRYSTAL_SILICON = 'Crystal silicon';
const TITANIUM_ALLOY = 'Titanium alloy';
const GLASS = 'Glass';
const DIAMOND = 'Diamond';
const X_RAY_CRACKING = '(Recipe) x-ray cracking';
const ORGANIC_CRYSTAL = 'Organic Crystal';
const A_GRAPHENE = '(Recipe) Graphene (advanced)';
const HYDROGEN_FUEL_ROD = 'Hydrogen Fuel Rod';
const DEUTERON_FUEL_ROD = 'Deuteron Fuel Rod';
// 3
const STEEL = 'Steel';
const ELECTRIC_MOTOR = 'Electric Motor';
const A_CRYSTAL_SILICON = '(Recipe) Crystal silicon (advanced)';
const TITANIUM_GLASS = 'Titanium Glass';
const PRISMA = 'Prisma';
const A_DIAMOND = '(Recipe) Diamond (advanced)';
const TITANIUM_CRYSTAL = 'Titanium Crystal';
const THRUSTER = 'Thruster';
const REINFORCED_THRUSTER = 'Reinforced Thruster';
const STRANGE_MATTER = 'Strange matter';
// 4
const GEAR = 'Gear';
const ELECTROMAGNETIC_TURBINE = 'Electromagnetic turbine';
const CIRCUIT_BOARD = 'Circuit Board';
const GRAVITON_LENS = 'Graviton lens';
const SULFURIC_ACID = 'sulfuric acid';
const DEUTERIUM = 'Deuterium';
const PLANE_FILTER = 'Plane filter';
const CARBON_NANOTUBE = 'Carbon nanotube';
const LOGISTICS_DRONE = 'Logistics drone';
const LOGISTICS_VESSEL = 'Logistics vessel';
const SMALL_CARRIER_ROCKET = 'Small carrier rocket';
const SILICON_ORE_FROM_STONE = 'Silicon ore from stone';
// 5
const PLASMA_EXCITER = 'Plasma exciter';
const SUPER_MAGNETIC_RING = 'super-magnetic ring';
const PARTICLE_BROADBAND = 'particle broadband';
const PROCESSOR = 'processor';
const CASIMIR_CRYSTAL = 'casimir crystal';
const PARTICLE_CONTAINER = 'particle container';
const SPACE_WARPER = 'space warper';
const A_CARBON_NANOTUBE = '(Recipe) Carbon nanotube (advanced)';
const SOLAR_SAIL = 'solar sail';
const FRAME_MATERIAL = 'frame material';
const DYSON_SPHERE_COMPONENT = 'dyson sphere component';
// 6
const PHOTON_COMBINER = 'photon combiner';
const A_PHOTON_COMBINER = '(Recipe) photon combiner (advanced)';
const MICROCRYSTALLINE_COMPONENT = 'microcrystalline component';
const QUANTUM_CHIP = 'quantum chip';
const A_CASIMIR_CRYSTAL = '(Recipe) casimir crystal (advanced)';
const A_PARTICLE_CONTAINER = '(Recipe) particle container (advanced)';
const A_SPACE_WARPER = '(Recipe) space warper (advanced)';
// 7
const ELECTROMAGNETIC_MATRIX = 'Electromagnetic Matrix';
const ENERGY_MATRIX = 'Energy Matrix';
const STRUCTURE_MATRIX = 'Structure Matrix';
const INFORMATION_MATRIX = 'Information Matrix';
const GRAVITY_MATRIX = 'Gravity Matrix';
const FOUNDATION = 'Foundation';
// -----------------------------------------------------------------------------------------
// Buildings
// -----------------------------------------------------------------------------------------
// 1
const TESLA_TOWER = 'Tesla tower';
const WIRELESS_POWER_TOWER = 'wireless power tower';
const SATELLITE_SUBSTATION = 'satellite substation';
const WIND_TURBINE = 'wind turbine';
const THERMAL_POWER_STATION = 'thermal power station';
const SOLAR_PANEL = 'solar panel';
const ACCUMULATOR = 'accumulator';
const RAY_RECEIVER = 'ray receiver';
const MINI_FUSION_POWER_STATION = 'mini fusion power station';
const ENERGY_EXCHANGER = 'energy exchanger';
// 2
const CONVEYOR_BELT_MK_1 = 'Conveyor Belt MK. 1';
const CONVEYOR_BELT_MK_2 = 'Conveyor Belt MK. 2';
const CONVEYOR_BELT_MK_3 = 'Conveyor Belt MK. 3';
const SPLITTER = 'Splitter(4-direction)';
const STORAGE_MK_1 = 'Storage MK. 1';
const STORAGE_MK_2 = 'Storage MK. 2';
const STORAGE_TANK = 'Storage Tank';
const EM_RAIL_EJECTOR = 'EM-Rail Ejector';
const PLANETARY_LOGISTICS_STATION = 'Planetary Logistics Station';
const MINI_PARTICLE_COLLIDER = 'Mini particle collider';
// 3
const SORTER_MK_1 = 'Sorter MK. 1';
const SORTER_MK_2 = 'Sorter MK. 2';
const SORTER_MK_3 = 'Sorter MK. 3';
const MINING_MACHINE = 'Mining machine';
const WATER_PUMP = 'Water pump';
const OIL_EXTRACTOR = 'Oil Extractor';
const OIL_REFINERY = 'Oil refinery';
const VERTICAL_LAUNCHING_SILO = 'Vertical launching silo';
const INTERSTELLAR_LOGISTICS_STATION = 'Interstellar Logistics Station';
// 4
const ASSEMBLING_MACHINE_MK_1 = 'Assembling machine MK. 1';
const ASSEMBLING_MACHINE_MK_2 = 'Assembling machine MK. 2';
const ASSEMBLING_MACHINE_MK_3 = 'Assembling machine MK. 3';
const SMELTER = 'Smelter';
const FRACTIONATOR = 'Fractionator';
const CHEMICAL_PLANT = 'Chemical plant';
const MATRIX_LAB = 'Matrix Lab';
const ORBIT_COLLECTOR = 'Orbit Collector';


/***/ }),

/***/ "yTwP":
/*!******************************************************************!*\
  !*** ./src/app/api/model/components/cat4/SiliconOreFromStone.ts ***!
  \******************************************************************/
/*! exports provided: SiliconOreFromStone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiliconOreFromStone", function() { return SiliconOreFromStone; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _baseComponents_stoneOre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../baseComponents/stoneOre */ "nyWs");




class SiliconOreFromStone extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SILICON_ORE_FROM_STONE"];
        this.processingTime = 10;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["SMELTER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _baseComponents_stoneOre__WEBPACK_IMPORTED_MODULE_3__["StoneOre"](), 10),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zVFJ":
/*!*******************************************************************!*\
  !*** ./src/app/api/model/buildings/cat3/verticalLaunchingSilo.ts ***!
  \*******************************************************************/
/*! exports provided: VerticalLaunchingSilo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalLaunchingSilo", function() { return VerticalLaunchingSilo; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _components_cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cat2/titaniumAlloy */ "dr5w");
/* harmony import */ var _components_cat5_frameMaterial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat5/frameMaterial */ "wfrA");
/* harmony import */ var _components_cat4_gravitonLens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat4/gravitonLens */ "KWYO");
/* harmony import */ var _components_cat6_quantumChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cat6/quantumChip */ "AFjd");







class VerticalLaunchingSilo extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["VERTICAL_LAUNCHING_SILO"];
        this.processingTime = 30;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat2_titaniumAlloy__WEBPACK_IMPORTED_MODULE_3__["TitaniumAlloy"](), 80),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_frameMaterial__WEBPACK_IMPORTED_MODULE_4__["FrameMaterial"](), 30),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat4_gravitonLens__WEBPACK_IMPORTED_MODULE_5__["GravitonLens"](), 20),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat6_quantumChip__WEBPACK_IMPORTED_MODULE_6__["QuantumChip"](), 10),
        ];
        this.outputAmount = 1;
    }
}


/***/ }),

/***/ "zanG":
/*!*****************************************************!*\
  !*** ./src/app/api/model/baseComponents/coalOre.ts ***!
  \*****************************************************/
/*! exports provided: CoalOre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoalOre", function() { return CoalOre; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/constants/names */ "xucN");


class CoalOre extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["COAL_ORE"];
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["MINING_MACHINE"];
        this.baseItem = true;
        this.veinType = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["COAL_VEIN"];
    }
}


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "znLF":
/*!************************************************************!*\
  !*** ./src/app/api/model/buildings/cat4/assemblerThree.ts ***!
  \************************************************************/
/*! exports provided: AssemblerThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssemblerThree", function() { return AssemblerThree; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item */ "/OEb");
/* harmony import */ var _util_constants_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/constants/names */ "xucN");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/input */ "Mu9/");
/* harmony import */ var _assemblerTwo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assemblerTwo */ "QMy+");
/* harmony import */ var _components_cat5_particleBroadband__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cat5/particleBroadband */ "2xQE");
/* harmony import */ var _components_cat6_quantumChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cat6/quantumChip */ "AFjd");






class AssemblerThree extends _item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
    constructor() {
        super(...arguments);
        this.name = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLING_MACHINE_MK_3"];
        this.processingTime = 4;
        this.neededMachine = _util_constants_names__WEBPACK_IMPORTED_MODULE_1__["ASSEMBLER"];
        this.inputs = [
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _assemblerTwo__WEBPACK_IMPORTED_MODULE_3__["AssemblerTwo"](), 1),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat5_particleBroadband__WEBPACK_IMPORTED_MODULE_4__["ParticleBroadband"](), 8),
            new _util_input__WEBPACK_IMPORTED_MODULE_2__["Input"](new _components_cat6_quantumChip__WEBPACK_IMPORTED_MODULE_5__["QuantumChip"](), 2),
        ];
        this.outputAmount = 1;
    }
}


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map