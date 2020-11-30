setInterval(() => {
    fetch("/data").then(res => res.json()).then(data => {
        document.querySelector(".image").src = data.image;
        document.querySelector(".name").innerText = data.name;
        document.querySelector(".username").innerText = `@${data.username}`;
        document.querySelector(".message").innerText = data.message;
    });
}, 1000);