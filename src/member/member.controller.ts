import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMember, EditMember } from './dto';
import { ApiTags } from '@nestjs/swagger';


@Controller('member')
@ApiTags('Members')
export class MemberController {
  constructor(private member: MemberService) {}

  @Post('')
  createMember(@Body() dto: CreateMember) {
    return this.member.createMember(dto);
  }

  @Get('/:id')
  getMember(@Param('id') memeberId: string) {
    return this.member.getMember(memeberId);
  }

  @Get('/all')
  getAllMember() {
    return this.member.getAllMember();
  }

  @Get('/:matchString')
  getMemberByMatchString(@Param('matchString') matchString: string) {
    return this.member.getMemberByMatchString(matchString);
  }

  @Patch('/:id')
  editMemebr(@Body() dto: EditMember, @Param('id') memeberId: string) {
    return this.member.editMember(dto, memeberId);
  }

  @Delete('/:id')
  deleteMember( @Param('id') memeberId: string) {
    return this.member.deleteMember(memeberId);
  }
}
