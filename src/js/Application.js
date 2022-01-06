import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

   
   
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;

    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = "Ah";

    document.querySelector(".main").appendChild(message);
    
   
    this.emit(Application.events.READY);
    this._beat = new Beat();
    this._beat.addListener(Beat.events.BIT, function(){
    for(let i = 0; i < lyrics.length; i++){

      const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = lyrics[i];
  
      document.querySelector(".main").appendChild(message);

    }
     
   });
    this._beat.emit(Beat.events.BIT)

  }
  _create(){
    
  }
}
