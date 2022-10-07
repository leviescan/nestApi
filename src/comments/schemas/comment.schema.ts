import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {

  @Prop()
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({default:Date.now})
  createdDate: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);