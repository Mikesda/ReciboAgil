// var video = document.querySelector('video');

// navigator.mediaDevices.getUserMedia({video:{width:720, aspectRatio:21/9, height:300}})
// .then(stream => {
//     video.srcObject = stream;
//     video.play();
// })
// .catch(error => {
//     console.log(error);
// })

// document.querySelector('button').addEventListener('click', () => {
//     var canvas = document.querySelector('canvas');
//     canvas.height = video.videoHeight;
//     canvas.width = video.videoWidth;
//     var context = canvas.getContext('2d');
//     context.drawImage(video, 0, 0);
//     var link = document.createElement('a');
//     link.download = 'foto.png';
//     link.href = canvas.toDataURL();
//     link.textContent = 'Clique para baixar a imagem';
//     document.body.appendChild(link);
// });

var video = document.querySelector('video');

navigator.mediaDevices.getUserMedia({video:{width:720, aspectRatio:21/9, height:300}})
.then(stream => {
    video.srcObject = stream;
    video.play();
})
.catch(error => {
    console.log(error);
})

document.querySelector('button').addEventListener('click', () => {
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);
    var link = document.createElement('a');
    link.download = 'foto.png';
    link.href = canvas.toDataURL();
    link.textContent = 'Clique para baixar a imagem';
    document.body.appendChild(link);
});