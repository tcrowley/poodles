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
    pictureId: string;
    litterId: string;
    sex: string;
    saleStatusId: string;
    saleStatus: string;
    dateOfBirth: string;
    female: string;
    male: string;
}