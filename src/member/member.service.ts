import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMember, EditMember } from './dto';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}

  async createMember(dto: CreateMember) {
    return this.prisma.member.create({
      data: dto,
    });
  }

  async getMember(id: string) {
    return this.prisma.member.findUnique({
      where: {
        id,
      },
    });
  }

  async getAllMember() {
    return this.prisma.member.findMany();
  }

  async getMemberByMatchString(matchString: string) {
    return this.prisma.member.findMany({
      where: {
        name: {
          contains: matchString,
        },
      },
    });
  }

  async editMember(dto: EditMember, id: string) {
    const member = await this.prisma.member.findUnique({
      where: {
        id,
      },
    });

    if (!member) {
      throw new ForbiddenException('Access to Resource Denied');
    }

    return this.prisma.member.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  async deleteMember(id: string) {
    const member = await this.prisma.member.findUnique({
      where: {
        id,
      },
    });

    if (!member) {
      throw new ForbiddenException('Access to Resource Denied');
    }

    return this.prisma.member.delete({
      where: {
        id,
      },
    });
  }
}
