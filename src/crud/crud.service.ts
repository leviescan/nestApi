import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCrudDto } from './dto/crud.dto';
import { User, UserDocument } from './schemas/crud.schema';


@Injectable()
export class CrudService {

    constructor(
        @InjectModel('user') private readonly userModel: Model<UserDocument>
      ){}
    
      async createUser(user: User): Promise<User>{
    
           const createdUser =new this.userModel(user)
           return await createdUser.save();
      }
      
      async readUsers(){
        return await this.userModel.find({})
         .then((user)=>{return user})
         .catch((er)=>console.log(er)) 
          
        
      }
      async readUser(id) {
        return await this.userModel.findById(id)
        .then((user)=>{return user})
        .catch((er)=>console.log(er)) 
          
        
      }
    
      async updateUser(id:string, data:CreateCrudDto):Promise<User>{
       return await this.userModel.findByIdAndUpdate(id,data,{new:true})
    
      }
    
      async deleteUser(id){
        return await this.userModel.findByIdAndDelete(id);
      }
    
}
