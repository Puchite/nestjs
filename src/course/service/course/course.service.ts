/* eslint-disable prettier/prettier */
import { CourseEntity } from 'src/course/entity/course.entity';
import { CourseDto } from 'src/course/dto/course.dto/course-dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CourseService {
  public Course: CourseDto[] = [];

  constructor(
    @InjectRepository(CourseEntity)
    private CourseRepository: Repository<CourseEntity>,
  ) {}

  Load_Course(): Promise<CourseDto[]> {
    return this.CourseRepository.query('SELECT * FROM Course');
  }

  Load_Course_ID(Course_ID: string): Promise<CourseDto[]> {
    return this.CourseRepository.query('SELECT * FROM Course WHERE Course_ID="'+Course_ID+'"');
  }

  Load_Course_Semester(Student_ID: string, Semester: number): Promise<CourseDto[]> {
    return this.CourseRepository.query(`SELECT Course.Course_ID, Course.Course_Name, UserData.Name FROM Course 
                                        JOIN UserData 
                                        WHERE Student_ID="`+Student_ID+'"AND Course.Semester='+Semester+' AND Course.Years=UserData.Years');
  }
}
