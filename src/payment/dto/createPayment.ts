import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePayment {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  memberId: string;
}
