import { Injectable } from '@nestjs/common';
import { PrismaClient, Publication } from '@prisma/client';
import { PublicationDto } from 'src/Controllers/Publication/Dtos/PublicationDto';
import PublicationInsertValidation from 'src/Controllers/Publication/Validations/PublicationInsert.validation';

const prisma = new PrismaClient();

@Injectable()
export class PublicationService {
    async insertPublication(publicationDto: PublicationDto): Promise<Object | Publication> {
        try {
            const publicationInsertValidation = PublicationInsertValidation(publicationDto);
            if (publicationInsertValidation.length) throw publicationInsertValidation;

            return await prisma.publication.create({
                data: {
                    name: publicationDto.name,
                    author_name: publicationDto.author_name,
                    qty: publicationDto.qty,
                    type: publicationDto.type
                }
            });
        } catch (error) {
            return { errorMessages: error }
        }
    }

    async updatePublicationQty(id: string, qty: number): Promise<Object | Publication> {
        try {
            return await prisma.publication.update({
                where: { id: id },
                data: { qty: qty }
            })
        } catch (error) {
            return error
        }
    }

    async deletePublication(id: string): Promise<Publication> {
        try {
            return await prisma.publication.delete({ where: { id: id } })
        } catch (error) {
            return error
        }
    }

    async getAllPublication(): Promise<Publication[]> {
        return await prisma.publication.findMany();
    }
}
