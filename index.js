const list = document.getElementById("usersList");

fetch("https://reqres.in/api/users")
   .then((response) => response.json())
   .then((data) => data.data)
   .then((users) => getUsersData(users))
   .catch((error) => console.log(error));

fetch("https://reqres.in/api/users?page=2")
   .then((response) => response.json())
   .then((data) => data.data)
   .then((users) => getUsersData(users))
   .catch((error) => console.log(error));

const getUsersData = (users) => {
   users.forEach((user) => {
      console.log(user);
      makeCard(user);
   });
};

const makeCard = (user) => {
   const userDiv = document.createElement("div");
   const userName = document.createElement("p");
   const userImg = document.createElement("img");

   appendUserToCard(user, userDiv, userName, userImg);
};

const appendUserToCard = (user, userDiv, userName, userImg) => {
   userImg.setAttribute("src", user.avatar);
   userImg.classList.add("col");
   userName.innerHTML = `${user.first_name} ${user.last_name}`;
   userDiv.append(userImg, userName);
   appendCardToList(userDiv);
};

const appendCardToList = (userDiv) => {
   list.append(userDiv);
};
