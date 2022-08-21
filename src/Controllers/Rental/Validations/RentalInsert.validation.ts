import { Person, Publication } from "@prisma/client";
import { RentalDto } from "../Dtos/RentalDto";

export default function (rentalDto: RentalDto, publication: Publication, person: Person): string[] {
    const today = new Date();
    today.setHours(0,0,0,0);
    
    let errorMessages = [];

    if (!publication) errorMessages.push('Error. Publication not found');
    if (!person) errorMessages.push('Error. Person not found');
    if (rentalDto.dueDate.getTime() <= today.getTime()) errorMessages.push('The due date for the rental cannot be before today');
    if (!rentalDto.personId) errorMessages.push('Please inform a person that is renting the publication');
    if (!rentalDto.publicationId) errorMessages.push('Please inform the publication that is being rented');
    return errorMessages;
}