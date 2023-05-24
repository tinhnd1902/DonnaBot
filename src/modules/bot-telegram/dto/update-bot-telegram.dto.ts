import { PartialType } from '@nestjs/mapped-types';
import { CreateBotTelegramDto } from './create-bot-telegram.dto';

export class UpdateBotTelegramDto extends PartialType(CreateBotTelegramDto) {}
