import React, { useRef, useLayoutEffect } from 'react';
import useStayScrolled from 'react-stay-scrolled';

import Message from './Message';

const Messages = ({ messages = [] }) => {
  const listRef = useRef();
  const { stayScrolled/* , scrollBottom */ } = useStayScrolled(listRef);

  // Typically you will want to use stayScrolled or scrollBottom inside
  // useLayoutEffect, because it measures and changes DOM attributes (scrollTop) directly
  useLayoutEffect(() => {
    stayScrolled();
  }, [messages.length, stayScrolled]);

  return (
    <ul
      ref={listRef}
      className="overflow-auto pt-0 pl-3 pr-2 position-relative cb-messages-list"
    >
      {/* eslint-disable-next-line react/no-array-index-key */}
      {messages.map(({ userName, message }, i) => <Message userName={userName} message={message} key={i} />)}
    </ul>
  );
};

export default Messages;
