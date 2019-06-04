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
      created_at: firebase.firestore.Timestamp.fromDate
    };
    //save chat 
    const response = await this.chats.add(chat);
    return response;
  }
}