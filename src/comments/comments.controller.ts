import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { response } from 'express';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentDocument, Comment } from './schemas/comment.schema';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('/create')
  async createComment(@Res() r, @Body() dataComment: Comment){
    const comment = await this.commentsService.createComment(dataComment);
    return r.status(HttpStatus.OK).json({
      message: 'Comment created successfuly',
      comment
    });
  }

  @Get('/read')
  async readComments(@Res() response, @Body() commentData: Comment){
    const comment = await this.commentsService.readComments();
    if(!comment) throw new NotFoundException('comentario inexistente');
    return response.status(HttpStatus.OK).json({  comment });

  }

  @Get('/read/:id')
  async readComment(@Res() response, @Param('id') id:string){
    const comment = await this.commentsService.readComment(id);
    if(!comment) throw new NotFoundException('comwntario inexistente');
    return response.status(HttpStatus.OK).json({  comment });
  }

  @Put(':id')
  async updateComment(@Res() response, @Param('id') id:string, @Body() commentData:Comment):Promise<Comment>{
     const comment = await this.commentsService.updateComment(id,commentData);
     if(!comment) throw new NotFoundException('usuario inexistente');
     return response.status(HttpStatus.OK).json({ message: 'comentario actualizado', comment });

}

  @Delete(':id')
  async deleteComment(@Res() r, @Param('id') id:string){
    const comment = await this.commentsService.deleteComment(id);
    if(!comment) throw new NotFoundException('comentario inexistente');
    return r.status(HttpStatus.OK).json({   message: 'eliminado con exito', comment });
  }
}
