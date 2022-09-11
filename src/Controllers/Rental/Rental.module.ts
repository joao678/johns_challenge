import { Module } from '@nestjs/common';
import { PublicationService } from 'src/Services/Publication/Publication.service';
import { RentalService } from 'src/Services/Rental/Rental.service';
import { RentalController } from './Rental.controller';

@Module({
  controllers: [RentalController],
  providers: [PublicationService, RentalService],
})
export class RentalModule {}