import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from 'src/schemas/student.schema';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('Student') private studentModel: Model<StudentDocument>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    return new this.studentModel(createStudentDto).save();
  }

  async findAll() {
    return this.studentModel.find();
  }

  async findOne(firstName: string) {
    return this.studentModel.findOne({ firstName });
  }

  async update(firstName: string, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.updateOne(
      { firstName },
      { $set: updateStudentDto },
    );
  }

  remove(firstName: string) {
    return this.studentModel.remove({ firstName });
  }
}
