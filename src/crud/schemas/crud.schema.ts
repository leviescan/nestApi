import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  price: number;

  @Prop({default:Date.now})
  createdDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);