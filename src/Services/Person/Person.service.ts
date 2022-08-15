import { Injectable } from '@nestjs/common';
import { PrismaClient, Person } from '@prisma/client'
import { PersonDto } from 'src/Controllers/Person/Dtos/PersonDto';
import * as bcrypt from 'bcrypt';
import PersonInsertValidation from 'src/Controllers/Person/Validations/PersonInsert.validation';

const prisma = new PrismaClient();

@Injectable()
export class PersonService {
    async insertPerson(personDto: PersonDto): Promise<Object | Person> {
        try {
            const personInsertValidation = PersonInsertValidation(personDto);
            if (personInsertValidation.length) throw personInsertValidation;

            return await prisma.person.create({
                data: {
                    name: personDto.name,
                    password: await bcrypt.hash(personDto.password, 10),
                    is_employee: personDto.is_employee
                }
            });
        } catch (error) {
            return { errorMessages: error }
        }
    }

    async deletePerson(id: string): Promise<Person> {
        try {
            return await prisma.person.delete({ where: { id: id } })
        } catch (error) {
            return error
        }
    }

    async getAllPerson(): Promise<Person[]> {
        return await prisma.person.findMany();
    }
}
