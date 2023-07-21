import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePayment } from './dto';

@Controller('payment')
export class PaymentController {
  constructor(private payment: PaymentService) {}

  @Post(':memberId')
  createPayment(
    @Body() dto: CreatePayment,
  ) {
    console.log('Create Payment');
  }

  @Get(':memberId')
  getMemberPayments(@Param('memberId') memberId: string) {
    console.log('Get User Payments');
  }

  @Get(':month')
  getMonthlyPayments(@Param('month') month: string) {
    console.log('Get Monthly Payments');
  }

  @Get(':year')
  getYearlyPayments(@Param('year') year: string) {
    console.log('Get Yearly Payments');
  }
}
