import { CrudService } from './crud.service';
import { CreateCrudDto } from './dto/crud.dto';
import { Controller, Post, Get, Delete, Put, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { User } from './schemas/crud.schema';

@Controller('crud')
export class CrudController {

    constructor( private readonly crudService:CrudService){}

    @Post('/create')
  async createUser(@Res() r,@Body() dataUser: User){
    
    const user = await this.crudService.createUser(dataUser);

    return r.status(HttpStatus.OK).json({
      message: 'con ok',
      user
  });    
  }

  @Get('/read')
 async readUsers(@Res() r,){
    const user = await this.crudService.readUsers();

    return r.status(HttpStatus.OK).json({
      message: 'con ok',
      user
  }); 
  }
  
  

  @Get('/read/:id')
  async readUser(@Res() r, @Param('id') id:string){

    const user = await this.crudService.readUser(id);

    if(!user) throw new NotFoundException('usuario inexistente');

    return r.status(HttpStatus.OK).json({
      message: 'con ok',
      user
  }); 
  }

  @Put(':id')
  async updateUser(@Res() r, @Param('id') id:string, @Body() updateData:CreateCrudDto):Promise<User>{
  const user = await this.crudService.updateUser(id,updateData);

  if(!user) throw new NotFoundException('usuario inexistente');

 return r.status(HttpStatus.OK).json({
      message: 'usuario actualizado',
      user
  }); 

}

  @Delete(':id')
  async deleteUser(@Res() r, @Param('id') id:string){

    const user = await this.crudService.deleteUser(id);

    if(!user) throw new NotFoundException('usuario inexistente');

    return r.status(HttpStatus.OK).json({
      message: 'eliminado con exito',
      user
  }); 
  }
   
 

}
