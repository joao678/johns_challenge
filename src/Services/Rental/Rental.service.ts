import { Injectable } from '@nestjs/common';
import { PrismaClient, Rental } from '@prisma/client';
import { RentalDto } from 'src/Controllers/Rental/Dtos/RentalDto';
import RentalInsertValidation from 'src/Controllers/Rental/Validations/RentalInsert.validation';
import { PublicationService } from '../Publication/Publication.service';

const prisma = new PrismaClient();

@Injectable()
export class RentalService {
    constructor(private publicationService: PublicationService) {}

    async insertRental(rentalDto: RentalDto): Promise<Object | Rental> {
        try {
            const publication = await prisma.publication.findFirst({ where: { id: rentalDto.publicationId } });
            const person = await prisma.person.findFirst({ where: { id: rentalDto.personId } });

            const rentalInsertValidation = RentalInsertValidation(rentalDto, publication, person);
            if (rentalInsertValidation.length) throw rentalInsertValidation;

            const rental = await prisma.rental.create({
                data: {
                    dueDate: rentalDto.dueDate,
                    publicationId: rentalDto.publicationId,
                    personId: rentalDto.personId
                }
            });

            this.publicationService.updatePublicationQty(publication.id, publication.qty - 1);

            return rental;
        } catch (error) {
            return { errorMessages: error }
        }
    }

    async returnRental(id: string): Promise<Object | Rental> {
        try {
            const rental = await prisma.rental.findFirst({ where: { id: id } });
            const publication = await prisma.publication.findFirst({ where: { id: rental.publicationId } });

            this.publicationService.updatePublicationQty(publication.id, publication.qty + 1);

            return await prisma.rental.update({
                where: { id: id },
                data: { returned: true }
            })
        } catch (error) {
            return error
        }
    }

    async getAllRental(): Promise<Rental[]> {
        return await prisma.rental.findMany();
    }
}
