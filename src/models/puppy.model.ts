import { PictureInfo } from "./picture.model";

export interface Litter {
    id: string;
    femaleId: string;
    female: string;
    femalePictureId: string;
    maleId: string;
    male: string;
    malePictureId: string;
    litterPictureId: string;
    dateOfBirth: string;
    comments: string;
    theme: string;
    registrationId: string;
    registration: string;
    pictures: PictureInfo[];
    puppies: Pup[];
}

export interface Pup {
    id: string;
    name: string;
    nickName: string;
    pictureId?: string;
    mainPicture?: string;
    litterId: string;
    litter: Litter;
    sex: string;
    color: string;
    markings: string;
    comments: string;
    collar: string;
    saleStatusId: string;
    saleStatus: string;
    family: string;
    homeTown: string;
    newName: string;
    dateOfBirth: string;
    departureDate: string;
    female: string;
    male: string;
    pictures: PictureInfo[];
}