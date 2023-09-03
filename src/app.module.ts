import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { MemberModule } from './member/member.module';
import { PaymentModule } from './payment/payment.module';
import { UtilModule } from './util/util.module';

@Module({
  imports: [PrismaModule, MemberModule, PaymentModule, UtilModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
