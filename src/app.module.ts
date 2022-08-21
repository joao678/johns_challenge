import { Module } from '@nestjs/common';
import { PersonController } from './Controllers/Person/Person.controller';
import { PublicationController } from './Controllers/Publication/Publication.controller';
import { RentalController } from './Controllers/Rental/Rental.controller';
import { PersonService } from './Services/Person/Person.service';
import { PublicationService } from './Services/Publication/Publication.service';
import { RentalService } from './Services/Rental/Rental.service';

@Module({
    imports: [],
    controllers: [PersonController, PublicationController, RentalController],
    providers: [PersonService, PublicationService, RentalService],
})
export class AppModule { }
