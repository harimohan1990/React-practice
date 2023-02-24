import React from 'react'

function Componentsandprops(props) {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
    }

    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={comment.author.avatarUrl}
            alt={comment.name}
          />
        </div>
      </div>
    );

    function formatDate(date) {
      return date.toLocaleDateString();
    }
}
export default Componentsandprops