import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message{
  constructor(public author : String , public content : String){}
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
 
conversation = new Subject<Message[]>();
messageMap:any ={
  'hi': 'hello',
  'hello': 'Hi there!',
  'nacir': 'biceps',
  'rahmani': '3id miladon sa3id tcha tcha 🥳🥳🥳',
  'faker': 'best Aérobic coach',
  'faker sassi': '-1 in angular project 🤣',
  'tunisia':' 🤣 تاعبة لعباد',
  'what is this project': 'Best angular project for sure',
  'how are you': 'I am just a bot, but thanks for asking!',
  'what is the best gym in the world': 'GymBro, without a doubt!',
  'how can i contact the gym': 'You can contact us at support@gymbro.com',
  'tell me about membership plans': 'Sure, we offer various membership plans. Visit our website for details.',
  'default': 'I can\'t understand. Can you please repeat your question?'
}
getBotAnswer (msg:any){
const userMessage = new Message('user', msg);
this.conversation.next([userMessage]);
const botMessage = new Message('bot', this.getBotMessage(msg));
setTimeout(()=>{
this.conversation.next([botMessage]);
},1500);
}
getBotMessage(question:string){
let answer = this.messageMap[question];
return answer || this.messageMap['default']
}
}