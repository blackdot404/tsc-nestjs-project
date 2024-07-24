import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-courses.dto';
import { UpdateCourseDTO } from './dto/update-courses.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(+id);
  }

  @Post()
  create(@Body() createCourseDTO: CreateCourseDTO) {
    return this.coursesService.create(createCourseDTO);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCourseDTO: UpdateCourseDTO) {
    return this.coursesService.update(id, updateCourseDTO);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coursesService.remove(id);
  }
}
