import { IsNotEmpty, IsUUID, Length } from 'class-validator'

export class CreateNotificationBody {
    @IsNotEmpty()
    @IsUUID()
    recipientId: string;

    @IsNotEmpty()
    @Length(5, 240) //? o tamanho do texto do content da notificação deve ter de 5 a 240 caracteres
    content: string;

    @IsNotEmpty()
    category: string;
}
