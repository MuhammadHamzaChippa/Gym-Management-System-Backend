import { IsDate, IsIn, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EditMember {
  @IsString()
  @IsOptional()
  @ApiProperty()
  name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  fatherName?: string;

  @IsNumber()
  @Min(16)
  @IsOptional()
  @ApiProperty()
  age?: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  image?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  contactNumber?: string;

  @IsString()
  @IsOptional()
  @IsIn(['Morning', 'Evening'])
  @ApiProperty()
  time?: string;

  @IsString()
  @IsOptional()
  @IsIn(['Weight Training', 'Weight Training + Cardio', 'Personal Training'])
  @ApiProperty()
  memebershipType?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  address?: string;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  admissionDate?: Date;
}
