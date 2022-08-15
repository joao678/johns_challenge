import { Module } from '@nestjs/common';
import { PersonController } from './Controllers/Person/Person.controller';
import { PersonService } from './Services/Person/Person.service';

@Module({
    imports: [],
    controllers: [PersonController],
    providers: [PersonService],
})
export class AppModule { }
