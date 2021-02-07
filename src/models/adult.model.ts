import { PictureInfo } from "./picture.model";
import { Litter } from "./puppy.model";

export interface Adult { 
    id: string;
    fullName: string;
    nickName: string;
    sex: string;
    sexDescription: string;
    mainPictureId: string;
    dateOfBirth: string;
    dateOfDeath: string;
    color: string;
    markings: string;
    registration: string;
    weight: string;
    height: string;
    testingInfo: string;
    retired: string;
    comments: string;
    litters: Litter[];
    pictures: PictureInfo[];
}