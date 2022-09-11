import { ApiProperty } from "@nestjs/swagger";

export class PersonDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    is_employee: boolean;
};