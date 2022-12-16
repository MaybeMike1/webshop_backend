import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
  private userRepository: Repository<User>
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User | undefined> {
    const savedUser = await this.userRepository.save(createUserDto);

    if(savedUser) {
      return savedUser;
    }

    return undefined; 
  }

  async findAll() {
    return await this.userRepository.find();
  }

  findOne(id: number) {
    const user = this.userRepository.findOne({where: {id: id}});
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
