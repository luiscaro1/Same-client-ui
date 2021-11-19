import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const EmojiKeyboard = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
      <Picker onEmojiClick={onEmojiClick} />
  );
};

export default EmojiKeyboard;