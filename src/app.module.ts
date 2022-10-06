import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CrudModule,
    MongooseModule.forRoot('mongodb+srv://aandresccastro123:EeP7ZeUVVb2hstEJ@cluster0.4pgxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    CommentsModule,
    AuthModule,
   // MongooseModule.forFeature([{name:'user', schema:UserSchema}]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
