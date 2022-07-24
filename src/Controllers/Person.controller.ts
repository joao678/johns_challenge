import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Person } from '@prisma/client';
import { PersonService } from 'src/Services/Person.service';
import { PersonDto } from './Dtos/PersonDto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async getAllPeople(): Promise<Person[]> {
    return await this.personService.getAllPeople();
  }

  @Post()
  async insertPerson(@Body() personDto: PersonDto): Promise<Object> {
    const result = await this.personService.insertPerson(personDto),
        errors = result as { errorMessages: string[] };

    if(errors.errorMessages && errors.errorMessages.length) throw new HttpException(errors.errorMessages, HttpStatus.BAD_REQUEST);
    return result;
  }

  @Delete(':id')
  async deletePerson(@Param() params): Promise<Person> {
    return await this.personService.deletePerson(params.id);
  }
}
