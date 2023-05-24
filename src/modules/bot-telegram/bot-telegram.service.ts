import { Injectable } from '@nestjs/common';
import { CreateBotTelegramDto } from './dto/create-bot-telegram.dto';
import { UpdateBotTelegramDto } from './dto/update-bot-telegram.dto';

@Injectable()
export class BotTelegramService {
  create(createBotTelegramDto: CreateBotTelegramDto) {
    return 'This action adds a new botTelegram';
  }

  findAll() {
    return `This action returns all botTelegram`;
  }

  findOne(id: number) {
    return `This action returns a #${id} botTelegram`;
  }

  update(id: number, updateBotTelegramDto: UpdateBotTelegramDto) {
    return `This action updates a #${id} botTelegram`;
  }

  remove(id: number) {
    return `This action removes a #${id} botTelegram`;
  }
}
