import { IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  Student_ID: string;

  @IsString()
  Course_ID: string;

  @IsNumber()
  Section: number;

  @IsString()
  Year: string;

  @IsNumber()
  Grade: number;
}
