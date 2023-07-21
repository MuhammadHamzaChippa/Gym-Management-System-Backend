import {
  IsDate,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateMember {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  fatherName: string;

  @IsNumber()
  @Min(16)
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['Male', 'Female'])
  gender: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['Morning', 'Evening'])
  time: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['Weight Training', 'Weight Training + Cardio', 'Personal Training'])
  membershipType: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsDate()
  admissionDate?: Date;
}
