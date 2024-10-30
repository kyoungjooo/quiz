const posts = [
  {
    id: 1,
    title: "JavaScript Basics",
    likes: 10,
    comments: 5,
    author: "Alice",
  },
  { id: 2, title: "Learning React", likes: 50, comments: 15, author: "Bob" },
  {
    id: 3,
    title: "Advanced Node.js",
    likes: 20,
    comments: 8,
    author: "Charlie",
  },
  {
    id: 4,
    title: "CSS Tips and Tricks",
    likes: 5,
    comments: 2,
    author: "Alice",
  },
  {
    id: 5,
    title: "Understanding Vue.js",
    likes: 30,
    comments: 10,
    author: "Dave",
  },
  {
    id: 6,
    title: "Async Programming in JS",
    likes: 25,
    comments: 12,
    author: "Eve",
  },
  {
    id: 7,
    title: "Python for Beginners",
    likes: 15,
    comments: 5,
    author: "Alice",
  },
  { id: 8, title: "Mastering Django", likes: 45, comments: 20, author: "Bob" },
  {
    id: 9,
    title: "React Hooks Deep Dive",
    likes: 35,
    comments: 18,
    author: "Charlie",
  },
  {
    id: 10,
    title: "Getting Started with TypeScript",
    likes: 12,
    comments: 4,
    author: "Eve",
  },
  {
    id: 11,
    title: "Building REST APIs with Express",
    likes: 28,
    comments: 7,
    author: "Dave",
  },
  {
    id: 12,
    title: "Effective Debugging in JavaScript",
    likes: 40,
    comments: 12,
    author: "Alice",
  },
  {
    id: 13,
    title: "Introduction to Machine Learning",
    likes: 60,
    comments: 25,
    author: "Bob",
  },
  {
    id: 14,
    title: "Functional Programming in JS",
    likes: 22,
    comments: 9,
    author: "Charlie",
  },
  { id: 15, title: "GraphQL Basics", likes: 18, comments: 6, author: "Dave" },
  {
    id: 16,
    title: "UI/UX Design Principles",
    likes: 50,
    comments: 22,
    author: "Eve",
  },
  {
    id: 17,
    title: "Web Security Essentials",
    likes: 30,
    comments: 14,
    author: "Alice",
  },
  {
    id: 18,
    title: "Data Structures in JavaScript",
    likes: 17,
    comments: 5,
    author: "Charlie",
  },
  {
    id: 19,
    title: "HTML5 and Accessibility",
    likes: 23,
    comments: 3,
    author: "Bob",
  },
  {
    id: 20,
    title: "Intro to WebSockets",
    likes: 21,
    comments: 8,
    author: "Eve",
  },
];

//모든 포스트의 제목(title)만을 담고 있는 배열을 반환하세요.
const title = posts.map((post) => post.title);
//console.log(title);

//좋아요 20개 이상 필터링
const like = posts.filter((post) => post.likes > 20);
//console.log(like);

//좋아요 20개 이상 필터링
posts.sort((a, b) => b.likes - a.likes);
//console.log(posts);

//댓글 수가 많은 포스트 찾기
const result = posts.some((post) => post.comments >= 10);
//console.log(result);

//모든 포스트의 좋아요 합계
const total = posts.reduce((acc, cur) => acc + cur.likes, 0);
//console.log(total);

//작가 이름 대문자로 변환
const updateAuthor = posts.map((post) => ({
  ...post,
  author: post.author.toUpperCase(),
}));
//console.log(updateAuthor);

//포스트 제목에 특정 단어가 포함된 포스트 필터링
const filterTitle = posts.filter((post) => post.title.includes("JavaScript"));
//console.log(filterTitle);

//좋아요와 댓글 수로 인기순 정렬
posts.sort((a, b) => {
  a.add = a.likes + a.comments;
  b.add = b.likes + b.comments;
  return b.add - a.add;
});
//console.log(posts);

//작성자별 포스트 그룹화
const group = posts.reduce((acc, cur) => {
  //author 기준으로 포스트를 그룹화하여 객체 형태로 반환하세요.
  //author 이름으로 기존의 키가 없으면 author 이름으로 키를 생성하고 현재의 post를 value에 추가한다.
  //현재 post.author 키가 같으면 기존 객체에 현재 객체를 추가한다.
  !acc[cur.author] ? (acc[cur.author] = [cur]) : acc[cur.author].push(cur);
  return acc;
}, {});
console.log(group);

//모든 포스트 제목 연결
const link = posts.map((post) => {
  return post.title;
});
//console.log(link.join(","));
