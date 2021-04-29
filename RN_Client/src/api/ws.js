import io from 'socket.io-client';

const BASE_URL = 'http://192.168.3.8:3000';

let socket;
const connect = (id, cb) => {
  socket = io(BASE_URL, { transports: ['websocket'] });

  if (socket && id) {
    socket.on(id, (data) => cb(null, data));
  }
};
const disconnect = () => {
  if (socket) socket.disconnect();
};

export default { connect, disconnect };
