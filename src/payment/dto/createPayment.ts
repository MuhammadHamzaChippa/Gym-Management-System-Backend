import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePayment {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  memberId: string;
}
