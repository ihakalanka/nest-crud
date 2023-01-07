import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('/create')
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get('/get-all')
  findAll() {
    return this.studentsService.findAll();
  }

  @Get('/get/:firstName')
  findOne(@Param('firstName') firstName: string) {
    return this.studentsService.findOne(firstName);
  }

  @Patch('/update/:firstName')
  update(
    @Param('firstName') firstName: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentsService.update(firstName, updateStudentDto);
  }

  @Delete('/delete/:firstName')
  remove(@Param('firstName') firstName: string) {
    return this.studentsService.remove(firstName);
  }
}
