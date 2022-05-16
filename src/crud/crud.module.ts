import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/crud.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{name:'user', schema:UserSchema}]),
  ],
  controllers: [CrudController],
  providers: [CrudService]
})
export class CrudModule {}
