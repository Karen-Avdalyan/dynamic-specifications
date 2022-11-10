import { v4 as uuidv4 } from 'uuid';

enum FieldType {
    text,
    choose,
    list,
}

interface Configuration {
    name: string;
    type: FieldType;
    value: number | string | boolean;
}

type IInputSpecification = Configuration[];

export class Car {
    uuid: String;
    specificatinoName: String;
    engine: String;
    interiorMaterials: String;
    color: String;
    wheelRims: Number;
    typeOfWheels: String;
    airSuspension: Boolean;
    signatureOnHood: String;
    configs: Configuration[];

    constructor({
        specificatinoName,
        engine,
        interiorMaterials,
        color,
        wheelRims,
        typeOfWheels,
        airSuspension,
        signatureOnHood,
        optionConnfiguration,
    }: IInputSpecification) {
        this.uuid = uuidv4();
        this.specificatinoName = specificatinoName;
        this.engine = engine;
        this.interiorMaterials = interiorMaterials;
        this.color = color;
        this.wheelRims = wheelRims;
        this.typeOfWheels = typeOfWheels;
        this.airSuspension = airSuspension;
        this.signatureOnHood = signatureOnHood;

    }

    getCarInfo() {
        return {
            "uuid": this.uuid,
            "specificatinoName": this.specificatinoName,
            "engine": this.engine,
            "interiorMaterials": this.interiorMaterials,
            "color": this.color,
            "wheelRims": this.wheelRims,
            "typeOfWheels": this.typeOfWheels,
            "airSuspension": this.airSuspension,
            "signatureOnHood": this.signatureOnHood,
            ...this.configs.reduce((config, confgurationObject) => {
                return confgurationObject[config.configurationName] = config.configurationValue;
            }, {})
        }
    }

    // update (updatedInfo: any) {
    //     const keys = Object.keys(updatedInfo);
    //     keys.forEach(key => {
    //         this[key] = updatedInfo[key] || this[key];
    //     });
    // }
}

class Specifciation {
    uuid: String;
    configuration: Configuration[];

    constructor() {
        this.uuid = uuidv4();
    }

    addConfigs(configs: IInputSpecification) {
        configs.forEach((config) => {
            this.addConfig(config);
        })
    }

    addConfig(config: Configuration) {
        this.configuration.push(config);
    }

    getConfigs() {

    }
}

class Builder {
    specification: Specifciation;

    build(configs: IInputSpecification) {
        this.specification.addConfigs(configs);
    };

    buildOne(config: Configuration) {
        this.specification.addConfig(config);
    }
}

class Director
{
    // Builder uses a complex series of steps
    construct(builder: Builder)
    {
        builder.;
    }
}