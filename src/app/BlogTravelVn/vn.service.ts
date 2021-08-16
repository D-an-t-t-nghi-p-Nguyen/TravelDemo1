import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentRequest } from './comment-request';
import { Comments } from './comments';
import { Oder } from './oder';
import { OderRequest } from './oder-request';
import { Vn } from './vn';
import { VnRequest } from './vn-request';

@Injectable({
  providedIn: 'root'
})
export class VnService {

  private BaseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  GetBlog(){
    return this.httpClient.get<Vn[]>(`${this.BaseURL}/blog`);
  }
  
  SaveBlog(userEntity:VnRequest){
    return this.httpClient.post<VnRequest>(`${this.BaseURL}/blog`,userEntity);
  }

  UploadFile(file: File,id){
    const formData=new FormData();
    formData.append('file',file);
    return this.httpClient.post<VnRequest>(`${this.BaseURL}/blog/upload/${id}`,formData);
  }

  GetBlogById(id:number){
    return this.httpClient.get<Vn>(`${this.BaseURL}/blog/${id}`);
  }

  UpdatBlog(userEntity:Vn,id:number){
    return this.httpClient.put<Vn>(`${this.BaseURL}/blog/${id}`,userEntity)
  }

  DeleteBlog(id:number){
    return this.httpClient.delete<Boolean>(`${this.BaseURL}/blog/${id}`)
  }
  AddComment(commentEntity:Comments){
    return this.httpClient.post<Comments>(`${this.BaseURL}/comment`,commentEntity);
  }
  
  GetComment(){
    return this.httpClient.get<CommentRequest[]>(`${this.BaseURL}/comment`);
  }
  //hien thi comment theo bai viet
  GetCommentByMotelId(motel_id:number){
    return this.httpClient.get<CommentRequest[]>(`${this.BaseURL}/comment-bymotel?motel_id=${motel_id}`);
  }
  AddOder(odertEntity:Oder){
    return this.httpClient.post<Oder>(`${this.BaseURL}/oder`,odertEntity);
  }
  
  GetOder(){
    return this.httpClient.get<OderRequest[]>(`${this.BaseURL}/oder`);
  }
  //hien thi comment theo bai viet
  GetOderByBlogId(motel_id:number){
    return this.httpClient.get<OderRequest[]>(`${this.BaseURL}/oder-bymotel?motel_id=${motel_id}`);
  }
}
