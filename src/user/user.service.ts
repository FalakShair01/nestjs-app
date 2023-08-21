import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from './dto/update-user-create.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}


    findAll(): Promise<User[]>{
        return this.usersRepository.find();
    }


    create(createUserDto: CreateUserDTO){
        return this.usersRepository.save(createUserDto)
    }


    update(updateUserDTO: UpdateUserDTO, userId: number){
        return this.usersRepository.update(userId, updateUserDTO)
    }


    delete(userId: number){
        return this.usersRepository.delete(userId)
    }


    getUser(userId: number){
        return this.usersRepository.findOne({where: {id: userId}})
    }
    
    findUserByEmail(email: string){
        return this.usersRepository.findOne({where: { email}})
    }
}
