import { Body, Controller, Delete, Get, Header, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Rental } from '@prisma/client';
import { RentalService } from 'src/Services/Rental/Rental.service';
import { RentalDto } from './Dtos/RentalDto';

@Controller('rental')
export class RentalController {
    constructor(private readonly rentalService: RentalService) { }

    @Get()
    async getAllRental(): Promise<Rental[]> {
        return await this.rentalService.getAllRental();
    }

    @Post()
    async insertRental(@Body() publicationDto: RentalDto): Promise<Object> {
        const result = await this.rentalService.insertRental(publicationDto),
            errors = result as { errorMessages: string[] };

        if (errors.errorMessages && errors.errorMessages.length) throw new HttpException(errors.errorMessages, HttpStatus.BAD_REQUEST);
        return result;
    }

    @Put(':id')
    async returnRental(@Param() params): Promise<Object> {
        const result = await this.rentalService.returnRental(params.id),
            errors = result as { errorMessages: string[] };

        if (errors.errorMessages && errors.errorMessages.length) throw new HttpException(errors.errorMessages, HttpStatus.BAD_REQUEST);
        return result;
    }
}
