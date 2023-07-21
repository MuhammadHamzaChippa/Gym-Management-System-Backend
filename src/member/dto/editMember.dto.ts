import { IsDate, IsIn, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class EditMember {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  fatherName?: string;

  @IsNumber()
  @Min(16)
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  contactNumber?: string;

  @IsString()
  @IsOptional()
  @IsIn(['Morning', 'Evening'])
  time?: string;

  @IsString()
  @IsOptional()
  @IsIn(['Weight Training', 'Weight Training + Cardio', 'Personal Training'])
  memebershipType?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsDate()
  @IsOptional()
  admissionDate?: Date;
}
