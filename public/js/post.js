var postID = [];

const submitComment = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();  
    const post_id = parseInt(postID);
    if (content && post_id ) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  const commentPrompt = async (event) => {
    if (event.target.hasAttribute('data-id')){
        postID = event.target.getAttribute('data-id');
    }; 
    event.preventDefault();
    const btn = document.querySelector("#comment-btn");
    btn.setAttribute("class", "btn btn-primary hidden");
    let addItemHere = document.querySelector('#start-here');
    let formBox = document.createElement("div");
    formBox.setAttribute("class", "");
    let formTitle = document.createElement("h3");
    formTitle.textContent = 'Create New Comment:';
    let form = document.createElement("form");
    form.setAttribute("class", "form");
    let divForm = document.createElement("div");
    divForm.setAttribute("class", "form-group");
    let inputForm = document.createElement("input");
    inputForm.setAttribute("class", "form-input");
    inputForm.setAttribute("type", "text");
    inputForm.setAttribute("id", "comment-content");
    inputForm.setAttribute("name", "comment-content");
    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("class","btn btn-primary");
    submitBtn.setAttribute("id","submit-btn");
    submitBtn.textContent = 'Submit';


    addItemHere.appendChild(formBox);
    formBox.appendChild(formTitle);
    formBox.appendChild(form);
    form.appendChild(divForm);
    divForm.appendChild(inputForm);
    formBox.appendChild(submitBtn);
    document
    .querySelector('#submit-btn')
    .addEventListener('click', submitComment);
  };
  
  document
    .querySelector('#start-here')
    .addEventListener('submit', submitComment);
  
  document
    .querySelector('#comment-btn')
    .addEventListener('click', commentPrompt);
  