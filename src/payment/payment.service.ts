import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePayment } from './dto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async createPayment(dto: CreatePayment) {
    return await this.prisma.payment.create({
      data: dto,
    });
  }

  async getAllPayment() {
    return await this.prisma.payment.findMany();
  }

  async getUserPayments(memberId: string) {
    return await this.prisma.payment.findMany({
      where: {
        memberId,
      },
    });
  }

  monthNameToNumber(monthName: string) {
    const date = new Date(`${monthName} 1, 2000`);
    const monthNumber = date.getMonth() + 1; // JavaScript months are zero-based (0-11), so we add 1.
    return monthNumber;
  }

  async getMonthlyPayments(month: string) {
    const targetMonth = this.monthNameToNumber(month);
    return await this.prisma.payment.findMany({
      where: {
        AND: [
          {
            paymentDate: {
              gte: new Date(`${new Date().getFullYear()}-${targetMonth}-01`),
            },
          },
          {
            paymentDate: {
              gte: new Date(
                `${new Date().getFullYear()}-${targetMonth + 1}-01`,
              ),
            },
          },
        ],
      },
    });
  }

  async getYearlyPayments(year: string) {
    return await this.prisma.payment.findMany({
      where: {
        paymentDate: {
          gte: new Date(`${year}-01-01`),
          lt: new Date(`${year + 1}-01-01`),
        },
      },
    });
  }

  async getPaymentsRage(startDate: Date, endDate: Date) {
    return await this.prisma.payment.findMany({
      where: {
        paymentDate: {
          gte: new Date(startDate).toISOString(),
          lt: new Date(endDate).toISOString(),
        },
      },
    });
  }
}
