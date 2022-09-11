import { Body, Controller, Delete, Get, Header, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Publication } from '@prisma/client';
import { PublicationService } from 'src/Services/Publication/Publication.service';
import { PublicationDto } from './Dtos/PublicationDto';

@Controller('publication')
@ApiTags('publication')
export class PublicationController {
    constructor(private readonly publicationService: PublicationService) { }

    @Get()
    async getAllPublication(): Promise<Publication[]> {
        return await this.publicationService.getAllPublication();
    }

    @Post()
    async insertPublication(@Body() publicationDto: PublicationDto): Promise<Object> {
        const result = await this.publicationService.insertPublication(publicationDto),
            errors = result as { errorMessages: string[] };

        if (errors.errorMessages && errors.errorMessages.length) throw new HttpException(errors.errorMessages, HttpStatus.BAD_REQUEST);
        return result;
    }

    @Put(':id')
    async updatePublicationQty(@Param() params, @Body() qtyDto: { qty }): Promise<Object> {
        const result = await this.publicationService.updatePublicationQty(params.id, qtyDto.qty),
            errors = result as { errorMessages: string[] };

        if (errors.errorMessages && errors.errorMessages.length) throw new HttpException(errors.errorMessages, HttpStatus.BAD_REQUEST);
        return result;
    }

    @Delete(':id')
    async deletePublication(@Param() params): Promise<Publication> {
        return await this.publicationService.deletePublication(params.id);
    }
}
