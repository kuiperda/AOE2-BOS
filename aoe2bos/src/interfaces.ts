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
    units: Object,
    techs: Object
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

}

interface TechObject {
    
}