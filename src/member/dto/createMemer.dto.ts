import {
  IsDate,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMember {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  fatherName: string;

  @IsNumber()
  @Min(16)
  @IsNotEmpty()
  @ApiProperty()
  age: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['Male', 'Female'])
  @ApiProperty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  image: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  contactNumber: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['Morning', 'Evening'])
  @ApiProperty()
  time: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['Weight Training', 'Weight Training + Cardio', 'Personal Training'])
  @ApiProperty()
  membershipType: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  address: string;

  @IsOptional()
  @IsDate()
  @ApiProperty()
  admissionDate?: Date;
}
