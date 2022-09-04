import React from 'react';

function newsCard(props) {
  return (
  <div className='news-main'>
      <div class="card">
  <h5 class="card-header">{props.author}</h5>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc}</p>
  </div>
</div>
  </div>
  );
}

export default newsCard;
