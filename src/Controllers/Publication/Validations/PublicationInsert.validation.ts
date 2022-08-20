import { PublicationDto } from "../Dtos/PublicationDto";
import { PublicationType } from "../Enums/PublicationTypes.enum";

export default function (publicationDto: PublicationDto): string[] {
    let errorMessages = [];

    if (!publicationDto.name) errorMessages.push('Please inform the publication name.');
    if (!publicationDto.author_name) errorMessages.push('Please inform an author name.');
    if (typeof(publicationDto.qty) !== 'number' || publicationDto.qty <= 0) errorMessages.push('Please inform a valid quantity');
    if (!Object.values(PublicationType).includes(publicationDto.type)) errorMessages.push('Please inform a valid publication type');
    return errorMessages;
}