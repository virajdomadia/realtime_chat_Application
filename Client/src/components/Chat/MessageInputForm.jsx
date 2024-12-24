import React from "react";
const MessageInputForm = ({
  selectedUserId,
  newMessage,
  setNewMessage,
  sendMessage,
}) => {
  return (
    <>
      {!!selectedUserId && (
        <form onSubmit={sendMessage} className="relative m-4 w-full">
          <input
            type="search"
            id="search-dropdown"
            className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-500 text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-primary"
            placeholder="Your Message"
            value={newMessage}
            onChange={(ev) => setNewMessage(ev.target.value)}
            required
          />
          <button
            type="submit"
            className="absolute end-0 aspect-square h-10 font-medium text-white bg-primary rounded-l-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12L6 12z"
              />
            </svg>
          </button>
        </form>
      )}
    </>
  );
};
export default MessageInputForm;
