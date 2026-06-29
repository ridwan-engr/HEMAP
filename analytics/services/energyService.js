/**
 * ============================================================
 * HEMAP
 * Energy Service
 *
 * Hybrid Energy Management Platform
 *
 * Central Energy Orchestration Engine
 *
 * Used By
 *
 * Dashboard
 * Monitoring
 * Reports
 * Forecast
 * Digital Twin
 * Socket.IO
 * Optimization Engine
 *
 * ============================================================
 */

import {

    solarDashboard

}

from "./solarService.js";

import {

    batteryDashboard

}

from "./batteryService.js";

import {

    generatorDashboard

}

from "./generatorService.js";

import {

    gridDashboard

}

from "./gridService.js";

import {

    calculateEnergyReport

}

from "../calculations/energyBalance.js";



/**
 * ============================================================
 * Overall Energy Dashboard
 * ============================================================
 */

export async function energyDashboard(){

    const [

        solar,

        battery,

        generator,

        grid

    ] = await Promise.all([

        solarDashboard(),

        batteryDashboard(),

        generatorDashboard(),

        gridDashboard()

    ]);



    const report =

        calculateEnergyReport({

            solar:

                solar.acPower,

            batteryDischarge:

                battery.totalRemainingEnergy,

            batteryCharge:0,

            generator:

                generator.totalGenerators

                ?

                generator.averageLoadFactor *

                generator.totalGenerators

                :

                0,

            gridImport:

                grid.totalImport,

            gridExport:

                grid.totalExport,

            load:

                solar.acPower +

                grid.totalImport +

                generator.totalGenerators,

            duration:1

        });



    return{

        timestamp:new Date(),

        solar,

        battery,

        generator,

        grid,

        energy:report

    };

}



/**
 * ============================================================
 * Live Energy Flow
 * ============================================================
 */

export async function liveEnergyFlow(){

    const dashboard=

        await energyDashboard();

    return{

        solar:

            dashboard.solar.acPower,

        battery:

            dashboard.battery.totalRemainingEnergy,

        generator:

            dashboard.generator.averageLoadFactor,

        grid:

            dashboard.grid.totalImport,

        load:

            dashboard.energy.consumption,

        balance:

            dashboard.energy.balance,

        status:

            dashboard.energy.status

    };

}



/**
 * ============================================================
 * Energy KPI
 * ============================================================
 */

export async function energyKPI(){

    const dashboard=

        await energyDashboard();

    return{

        generation:

            dashboard.energy.generation,

        consumption:

            dashboard.energy.consumption,

        surplus:

            dashboard.energy.balance,

        renewable:

            dashboard.energy.renewablePercentage,

        ens:

            dashboard.energy.energyNotSupplied

    };

}



/**
 * ============================================================
 * Daily Energy Report
 * ============================================================
 */

export async function dailyEnergyReport(){

    const dashboard=

        await energyDashboard();

    return{

        reportDate:

            new Date(),

        generation:

            dashboard.energy.generation,

        consumption:

            dashboard.energy.consumption,

        renewable:

            dashboard.energy.renewablePercentage,

        batterySOC:

            dashboard.battery.averageSOC,

        fuelConsumption:

            dashboard.generator.totalFuel,

        gridImport:

            dashboard.grid.totalImport,

        gridExport:

            dashboard.grid.totalExport,

        balance:

            dashboard.energy.balance

    };

}



/**
 * ============================================================
 * Digital Twin Snapshot
 * ============================================================
 */

export async function digitalTwinSnapshot(){

    const dashboard=

        await energyDashboard();

    return{

        timestamp:

            new Date(),

        solar:dashboard.solar,

        battery:dashboard.battery,

        generator:dashboard.generator,

        grid:dashboard.grid,

        energy:dashboard.energy

    };

}



/**
 * ============================================================
 * Optimization Inputs
 * ============================================================
 */

export async function optimizationInputs(){

    const dashboard=

        await energyDashboard();

    return{

        renewableGeneration:

            dashboard.solar.acPower,

        batteryEnergy:

            dashboard.battery.totalRemainingEnergy,

        generatorCapacity:

            dashboard.generator.totalGenerators,

        gridEnergy:

            dashboard.grid.totalImport,

        demand:

            dashboard.energy.consumption,

        renewableFraction:

            dashboard.energy.renewablePercentage

    };

}