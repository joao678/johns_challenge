import { PersonDto } from "../Dtos/PersonDto";

export default function (personDto: PersonDto): string[] {
    let errorMessages = [];

    if (!personDto.name) errorMessages.push('Please inform your name.');
    if (!personDto.password) errorMessages.push('Please inform a password.');
    return errorMessages;
}