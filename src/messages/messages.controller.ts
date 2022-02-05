import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './messages.service';
@Controller('messages')
export class MessagesController {
  messageService: MessageService;

  constructor() {
    this.messageService = new MessageService();
  }
  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  creteMessages(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);

    if (!message)
      throw new NotFoundException('message not found', 'kindly try valid id');

    return message;
  }
}
