import EventEmitter from "eventemitter3";

export default class Beat extends EventEmitter{
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    super();

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];

    setInterval(() => {
      this.emit(Beat.events.BIT)
      this.addListener(Beat.events.BIT, function(){
        for(let i = 0; i < lyrics.length; i++){
    
          const message = document.createElement("div");
          message.classList.add("message");
          message.innerText = lyrics[i];
      
          document.querySelector(".main").appendChild(message);
    
        }
         
       });
      console.log("bit");
    }, 600);
  }
}
