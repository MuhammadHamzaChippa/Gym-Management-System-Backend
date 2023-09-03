import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePayment } from './dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('payment')
@ApiTags('Payments')
export class PaymentController {
  constructor(private payment: PaymentService) {}

  @Post()
  createPayment(@Body() dto: CreatePayment) {
    return this.payment.createPayment(dto);
  }

  @Get('')
  getAllPayments() {
    return this.payment.getAllPayment();
  }

  @Get(':memberId')
  getMemberPayments(@Param('memberId') memberId: string) {
    return this.payment.getUserPayments(memberId);
  }

  @Get(':month')
  getMonthlyPayments(@Param('month') month: string) {
    return this.payment.getMonthlyPayments(month);
  }

  @Get(':year')
  getYearlyPayments(@Param('year') year: string) {
    return this.payment.getYearlyPayments(year);
  }

  @Post('range')
  getPaymentRange(@Body() dto: { fromDate: Date; toDate: Date }) {
    return this.payment.getPaymentsRage(dto.fromDate, dto.toDate);
  }
}
