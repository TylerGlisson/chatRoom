// adding new chats
// setting up real-time listeners to get new chats
// updating the username
// updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats'); 
  }
  async addChat(message) {
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    //save chat 
    const response = await this.chats.add(chat);
    return response;
  }
}

const chatroom = new Chatroom('general', 'mario');

chatroom.addChat('Hello world!')
  .then(() => console.log('success, chat added'))
  .catch(err => console.log(err));