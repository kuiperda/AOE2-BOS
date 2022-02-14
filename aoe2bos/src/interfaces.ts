
interface CivObject {
    name: string, //i.e. "Aztecs"
    logo: string, //name of image file. components handle the path. 
    buildings: {
        townCenter: BuildingObject,
        house?: BuildingObject,
        lumberCamp: BuildingObject,
        mill: BuildingObject,
        farm: BuildingObject,
        miningCamp: BuildingObject,
        barracks: BuildingObject,
        archeryRange: BuildingObject,
        stable: BuildingObject,
        blacksmith: BuildingObject,
        monastery: BuildingObject,
        university: BuildingObject,
        siegeWorkshop: BuildingObject,
        castle: BuildingObject,
        wonder: BuildingObject
    },
    techs: {
        loom: TechObject,
        wheelbarrow: TechObject,
        handCart: TechObject,
        townWatch: TechObject,
        townPatrol: TechObject,
        feudalAge: TechObject,
        castleAge: TechObject,
        imperialAge: TechObject
    },
    units: {
        villager: UnitObject
    }
}

interface BuildingObject {
    name: string, //i.e "Barracks"
    logo: string, //name of image file. components handle the path.  
    woodCost?: number,
    goldCost?: number,
    stoneCost?: number,
    buildTime: number,
    popSpace?: number,
    foodAmount?: number,
    produces?: Array<string>,
    requires?: Array<string>
}

interface UnitObject {
    name: string,
    logo: string, 
    foodCost?: number,
    woodCost?: number,
    goldCost?: number,
    trainTime: number,
    builds?: Array<string>,
    requires?: Array<string>
}

interface TechObject {
    name: string,
    logo: string, 
    foodCost?: number,
    woodCost?: number,
    goldCost?: number,
    stoneCost?: number,
    researchTime: number,
    requires?: Array<string>
}

interface TimelineBuilding {
    ref: BuildingObject, // references the JSON property for that BuildingObject
    history: Array<TimelineBuildingTasks>
}

interface TimelineBuildingTasks {
    time: number,
    action: any,
    queue: Array<any>
}
