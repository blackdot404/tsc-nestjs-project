import { Injectable } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Course 1',
      description: 'Description 1',
      tags: ['tag1', 'tag2'],
    },
  ];
}
