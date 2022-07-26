const main = document.getElementById("main-content-blog");
const blogTitle = document.getElementById("blogtitle");
const howDo = document.getElementById("how-does-it-work");
const description = document.getElementById("floatingTextarea2");
const formPic = document.getElementById("formFile");
const formSubmit = document.getElementById("submitbutton");
const savedLBlog = localStorage.getItem("keyOfBlog");
const parsedSavedLCBlog = JSON.parse(savedLBlog) || [];
let savedBlog = [...parsedSavedLCBlog];
const createBlogeList=(title,disc,doing)=>{
  const unListItem = document.createElement("ul");
  unListItem.className = "bg-img2";

  const listItem = document.createElement("li");
  const listItemTitle = document.createElement("h3");
  listItemTitle.innerHTML = title;
  const listItemDo = document.createElement("p");
  listItemDo.innerHTML = doing;
  const listItemdesc = document.createElement("p");
  listItemdesc.innerHTML = disc;
  listItem.style.width = "50%";
  const likeContent = document.createElement("div");
  const likeNumber = document.createElement("span");
  likeNumber.innerHTML = "1";
  const likeIcon = document.createElement("a");
  likeIcon.style.textDecoration = "none";
  likeIcon.style.color = "black";
  likeIcon.href = "https://google.com";
  likeIcon.target = "_blanck";
  likeIcon.innerHTML = ".";
  likeIcon.className = "img-icon";
  const listItemPic = document.createElement("img");

  listItem.appendChild(listItemTitle);
  listItem.appendChild(listItemDo);
  listItem.appendChild(listItemdesc);
  listItem.appendChild(listItemPic);
  likeContent.appendChild(likeNumber);
  likeContent.appendChild(likeIcon);
  listItem.appendChild(likeContent);
  unListItem.appendChild(listItem);
  main.appendChild(unListItem);
  console.log(main);
}
savedBlog.forEach((blog)=> {createBlogeList(blog.title,blog.desc,blog.doing)});
const creatBlogForm = (event) => {
  event.preventDefault();
  const nonValue = () => alert("please type Title and Description");
  if (!blogTitle.value) return nonValue();

  const values = {
    title: blogTitle.value,
    doing: howDo.value,
    desc: description.value,
    image: formPic.value,
  };
  savedBlog.push(values);
  localStorage.setItem("keyOfBlog", JSON.stringify(savedBlog));
  console.log(savedBlog);

  const unListItem = document.createElement("ul");
  unListItem.className = "bg-img2";

  const listItem = document.createElement("li");
  const listItemTitle = document.createElement("h3");
  listItemTitle.innerHTML = values.title;
  const listItemDo = document.createElement("p");
  listItemDo.innerHTML = values.doing;
  const listItemdesc = document.createElement("p");
  listItemdesc.innerHTML = values.desc;
  listItem.style.width = "50%";
  const likeContent = document.createElement("div");
  const likeNumber = document.createElement("span");
  likeNumber.innerHTML = "1";
  const likeIcon = document.createElement("a");
  likeIcon.style.textDecoration = "none";
  likeIcon.style.color = "black";
  likeIcon.href = "https://google.com";
  likeIcon.target = "_blanck";
  likeIcon.innerHTML = ".";
  likeIcon.className = "img-icon";
  const listItemPic = document.createElement("img");

  listItem.appendChild(listItemTitle);
  listItem.appendChild(listItemDo);
  listItem.appendChild(listItemdesc);
  listItem.appendChild(listItemPic);
  likeContent.appendChild(likeNumber);
  likeContent.appendChild(likeIcon);
  listItem.appendChild(likeContent);
  unListItem.appendChild(listItem);
  main.appendChild(unListItem);
  console.log(main);
};

formSubmit.addEventListener("click", creatBlogForm);
