import { PublicationType } from "../Enums/PublicationTypes.enum";

export type PublicationDto = {
    name: string;
    author_name: string;
    qty: number;
    type: PublicationType
};