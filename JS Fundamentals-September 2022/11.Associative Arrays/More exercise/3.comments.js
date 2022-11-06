function commentsCount(input) {

  let dataBase = { userList: [], articleList: [], comments: {} };

  for (let line of input) {
    if (line.split(' ').length === 2) {
      let [command, item] = line.split(' ');

      if (command === 'user') {
        if (!dataBase.userList.includes(item)) {
          dataBase.userList.push(item);
        }
      } else if (command === 'article') {
        if (!dataBase.articleList.includes(item)) {
          dataBase.articleList.push(item);
        }
      }
    } else {
      let [username, article, title, content] = line
        .replace(' posts on ', '&')
        .replace(': ', '&')
        .replace(', ', '&')
        .split('&');

      if (dataBase.userList.includes(username) && dataBase.articleList.includes(article)) {
        if (!dataBase.comments.hasOwnProperty(article)) {
          dataBase.comments[article] = [{
            [username]: `--- From user ${username}: ${title} - ${content}`
          }];
        } else {
          dataBase.comments[article].push({ [username]: `--- From user ${username}: ${title} - ${content}` });
        }
      }
    }
  }

  let sortedComments = Object.entries(dataBase.comments).sort((a, b) => b[1].length - a[1].length);

  for (let [name, comments] of sortedComments) {
    console.log(`Comments on ${name}`);

    for (let commentItem of comments.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))) {
      let [user, comment] = Object.entries(commentItem)[0];
      console.log(comment);
    }

  }
}

commentsCount(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])




// Comments
// Write a function that stores information about users and their comments on a website.You have to store the users, the comments as an object with title and content, and the article that the comment is about.The user can only comment, when he is on the list of users and the article is in the list of articles.The input comes as an array of strings.The strings will be in the format:
// "user {username}" – add the user to the list of users
// "article {article name}" – add the article to the article list
// "{username} posts on {article name}: {comment title}, {comment content}" – save the info

// At the end sort the articles by a count of comments and print the users with their comments ordered by usernames in ascending.

//   Output
// Print the result in the following format:
// "Comments on {article1 name}
// --- From user { username1 }: {comment title } - { comment content }
// --- From user { username2 }: …
// Comments on {article2 name }
// …"

