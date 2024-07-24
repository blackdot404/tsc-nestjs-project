import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDTO } from './create-courses.dto';

export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {
  readonly name?: string;
  readonly description?: string;
  readonly tags?: string[];
}
