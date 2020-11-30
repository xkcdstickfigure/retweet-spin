setInterval(() => {
    fetch("/data").then(res => res.json()).then(data => {
        document.querySelector(".image").src = data.image;
        document.querySelector(".name").innerText = data.name;
        document.querySelector(".username").innerText = `@${data.username}`;
    });
}, 1000);