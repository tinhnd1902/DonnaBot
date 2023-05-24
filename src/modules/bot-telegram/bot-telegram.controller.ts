import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BotTelegramService } from './bot-telegram.service';
import { CreateBotTelegramDto } from './dto/create-bot-telegram.dto';
import { UpdateBotTelegramDto } from './dto/update-bot-telegram.dto';

@Controller('bot-telegram')
export class BotTelegramController {
  constructor(private readonly botTelegramService: BotTelegramService) {}

  @Post()
  create(@Body() createBotTelegramDto: CreateBotTelegramDto) {
    return this.botTelegramService.create(createBotTelegramDto);
  }

  @Get()
  findAll() {
    return this.botTelegramService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.botTelegramService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBotTelegramDto: UpdateBotTelegramDto) {
    return this.botTelegramService.update(+id, updateBotTelegramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.botTelegramService.remove(+id);
  }
}
