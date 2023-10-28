export class Talks{
    constructor(title,hour,speaker,image){
        this.id = self.crypto.randomUUID();
        this.title = title;
        this.hour = hour;
        this.speaker = speaker;
        this.image = image
    }
}