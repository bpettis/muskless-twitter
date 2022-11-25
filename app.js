let head = document.getElementById("twitter-head");



function addTweet(form) {
    let username = form.username.value;
    username ||= "twitter-user183529";
    let name = form.name.value;
    name ||= "Just another Twitter-er";
    let tweet = form.tweet.value; 
    if (tweet === '') {
        alert('You didn\'t enter a tweet!');
    }



    let article = document.createElement("article");
    article.innerHTML = '<div class="profile-picture"><img src="images/profiles/twitter-avi-gender-balanced-figure.png" alt="" /></div><div class="tweet">    <div class="tweet-metadata">        <div class="username">' + name + ' <span>@' + username + '</span></div><div class="timestamp"><time>now</time></div></div>    <div class="tweet-body">        <p>' + tweet + '</p>    </div>    <div class="metrics">        <div class="retweets"><span>0</span> Retweets</div>        <div class="likes"><span>0</span> Likes</div>    </div></div>';

    head.after(article);
};