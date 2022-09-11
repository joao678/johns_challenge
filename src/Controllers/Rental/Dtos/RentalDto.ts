import { ApiProperty } from "@nestjs/swagger";

export class RentalDto {
    @ApiProperty()
    dueDate: Date;
    @ApiProperty()
    publicationId: string;
    @ApiProperty()
    personId: string;
};