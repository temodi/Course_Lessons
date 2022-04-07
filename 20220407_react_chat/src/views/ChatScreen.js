import { useState, useEffect, useCallback} from 'react';
import { sendMessage, loadMessages, watchMessage, whatchAllMessage } from '../services/chat';

 

function ChatScreen() {
  const [enableChat, setEnableChat] = useState(false);
  const [userName, setUserName] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

/*   const loadAllMessage = () => {
    console.log('loadMessage meghiiiva')
    loadMessages()
    .then(snapshot => setMessages(Object.entries(snapshot.val())))
  } */
 
  useEffect(() => {
    const removeEvent = whatchAllMessage((snapshot) => {
      setMessages(Object.entries(snapshot.val()))
    })

    // return removeEvent
    return () => {
      removeEvent()
    }
  }, [])

  const changeHandler = useCallback((event) => setUserName(event.target.value), []);
  const changeHandlerMessage = useCallback((event) => setMessage(event.target.value), []);

  const clickHandler = (event) => { 
    if (userName) {
      setEnableChat(true);
     /*  loadAllMessage(); */
    }
  }

  const clickHandlerSend = (event) => {
    if (message && userName) {
      console.log(userName, message);
     /*  sendMessage({
        userName: userName,
        message: message
      }) */
      sendMessage({
        userName,
        message,
      })
      .then(() => setMessage(''))
      .catch(e => console.log(e));
    } 
  }

  /*
  messages = [
    [
      0 => 'mzt123123'
      1 => {
        userName: 'Tibi',
        message: 'hello',
      }
    ],
    [
      0 => 'mzt123123'
      1 => {
        userName: 'Tibi',
        message: 'hello',
      }
    ],
    
  ]
  */
  return (<div className="flex direction-column">
    <div className="flex padding username-container">
      <div>Username:</div>
      <div className="flex-grow-1"><input type="text" name="username" onChange={ changeHandler }/></div>
      <div><button type="button" onClick={ clickHandler }>Chatezz!</button></div>
    </div>
    {enableChat && <>
      <div className="padding">
        <div className="chat">
          {messages && messages.map(item => {
            const key = item[0];
            const data = item[1]; 
            return <p key={ `msg_${key}` }><strong>{ data.userName }</strong>: {data.message}</p>
          })}
        </div>
      </div> 
      <div className="flex padding msg-container">
        <textarea name="msg" onChange={ changeHandlerMessage } value={ message }></textarea>
        <button type="button" onClick={ clickHandlerSend }>Send</button>
      </div>
    </>}
    {!enableChat && <div>Adj meg usernevet a chateleshez!</div>}
  </div>)
}

export default ChatScreen;