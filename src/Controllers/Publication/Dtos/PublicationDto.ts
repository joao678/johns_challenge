import { ApiProperty } from "@nestjs/swagger";
import { PublicationType } from "../Enums/PublicationTypes.enum";

export class PublicationDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    author_name: string;
    @ApiProperty()
    qty: number;
    @ApiProperty({ enum: PublicationType, enumName: 'PublicationType' })
    type: PublicationType
};