import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDocument, Comment } from './schemas/comment.schema';

@Injectable()
export class CommentsService {

  constructor(
    @InjectModel('comment') private readonly commentModel: Model<CommentDocument>){}

    async createComment(comment: Comment): Promise<Comment>{
      const createdComment =new this.commentModel(comment)
      return await createdComment.save();
    }

  async readComments(){
   return await this.commentModel.find({})
    .then((comment)=>{return comment})
    .catch((er)=>console.log(er))
  }
  async readComment(id:string) {
   return await this.commentModel.findById(id)
   .then((comment)=>{return comment})
   .catch((er)=>console.log(er))
  }

 async updateComment(id:string, commentData:Comment):Promise<Comment>{
   return await this.commentModel.findByIdAndUpdate(id,commentData,{new:true})
  }

  async deleteComment(id:string){
   return await this.commentModel.findByIdAndDelete(id);
  }

}
