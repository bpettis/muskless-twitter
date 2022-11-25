let head = document.getElementById("twitter-head");



function addTweet(form) {
    let username = form.username.value;
    username ||= "twitter-user183529";
    let name = form.name.value;
    name ||= "Just another Twitter-er";
    let tweet = form.tweet.value; 
    if (tweet === '') {
        alert('You didn\'t enter a tweet!');
        return;
    }

    if (username == 'elonmusk') {
        alert('@elonmusk is not allowed to post to Muskless Twitter');
        return;
    }



    let article = document.createElement("article");
    article.innerHTML = '<div class="profile-picture"><img src="images/profiles/twitter-avi-gender-balanced-figure.png" alt="" /></div><div class="tweet">    <div class="tweet-metadata">        <div class="username">' + name + ' <span>@' + username + '</span></div><div class="timestamp"><time>now</time></div></div>    <div class="tweet-body">        <p>' + tweet + '</p>    </div>    <div class="metrics">        <div class="retweets"><span>0</span> Retweets</div>        <div class="likes"><span>0</span> Likes</div>    </div></div>';

    head.after(article);
    form.reset();
    toggleForm();
};

function toggleForm() {
    console.log('toggleForm');
    let x = document.getElementById("tweet-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }    
}

document.getElementById("close-button-svg").addEventListener("click", toggleForm);
document.getElementById("tweet-button").addEventListener("click", toggleForm);