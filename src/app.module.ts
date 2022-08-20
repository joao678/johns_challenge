import { Module } from '@nestjs/common';
import { PersonController } from './Controllers/Person/Person.controller';
import { PublicationController } from './Controllers/Publication/Publication.controller';
import { PersonService } from './Services/Person/Person.service';
import { PublicationService } from './Services/Publication/Publication.service';

@Module({
    imports: [],
    controllers: [PersonController, PublicationController],
    providers: [PersonService, PublicationService],
})
export class AppModule { }
