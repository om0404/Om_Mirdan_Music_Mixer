let theButtons = document.querySelectorAll("#buttonHolder img"), 
    theHeading = document.querySelector("#headLine h1"),
    iconsBoard = document.querySelector(".drop-board"),
    musicPieces = document.querySelectorAll(".dj-icons img"),
    dropZones = document.querySelectorAll(".drop-zone"),
    piecesBoard = document.querySelector(".dj-icons"),
    pianoAudio = new Audio('music/piano.mp3'),
    guitarAudio = new Audio('music/guitar.mp3'),
    cdAudio = new Audio('music/cd_player.mp3'),
    diskAudio = new Audio('music/dj_disk.mp3'),
    drumAudio = new Audio('music/drum.mp3'),
    micAudio = new Audio('music/mic.mp3'),
    draggedPiece; 

 
    
    let volumeControl = document.getElementById('volumeControl');
    
    volumeControl.addEventListener('input', function() {
      let volume = parseFloat(this.value) / 100;
    
      pianoAudio.volume = volume;
      guitarAudio.volume = volume;
      cdAudio.volume = volume;
      diskAudio.volume = volume;
      drumAudio.volume = volume;
      micAudio.volume = volume;
    });



    let playButton = document.getElementById('playButton');
    




playButton.addEventListener('click', function() {
    if (!pianoAudio.paused) {
        pianoAudio.play();
    } else if (!guitarAudio.paused) {
        guitarAudio.play();
    } else if (!drumAudio.paused) {
        drumAudio.play();
    } else if (!diskAudio.paused) {
        diskAudio.play();
    } else if (!micAudio.paused) {
        micAudio.play();
    } else if (!cdAudio.paused) {
        cdAudio.play();
    }
});
    
    let pauseButton = document.getElementById('pauseButton');

    pauseButton.addEventListener('click', function() {
        pianoAudio.pause();
        guitarAudio.pause();
        drumAudio.pause();
        diskAudio.pause();
        micAudio.pause();
        cdAudio.pause();
    });
function changeBGImage() {
    dropZones.forEach(zone => {
        while (zone.firstChild) {
            zone.removeChild(zone.firstChild);
        }
    });

    musicPieces.forEach(piece => {
        piece.classList.remove('dropped');
        piecesBoard.appendChild(piece);
    });

    iconsBoard.style.backgroundImage = `url('images/backGround${this.id}.jpg')`;
}

function handleStartDrag() {
    console.log('started dragging this piece:', this);
    draggedPiece = this;
}

function handleDragOver(e) { 
    e.preventDefault();
    console.log('dragged over me');
}

function handleDrop(e) {
    e.preventDefault();
    console.log('dropped something on me');

    if (this.children.length > 0) {
        return;
    }

    this.appendChild(draggedPiece);

    // Check if the dropped piece is the piano icon
    if (draggedPiece.src.includes('piano_icon.svg')) {
        // Play the audio file
        pianoAudio.currentTime = 0; // rewind to start
        pianoAudio.play();
    }

    // Check if the dropped piece is the guitar icon
    if (draggedPiece.src.includes('guitar_icon.svg')) {
        // Play the audio file
        guitarAudio.currentTime = 0; // rewind to start
        guitarAudio.play();
    }

    // Check if the dropped piece is the drum icon
    if (draggedPiece.src.includes('drum_icon.svg')) {
        // Play the audio file
        drumAudio.currentTime = 0; // rewind to start
        drumAudio.play();
    }
    if (draggedPiece.src.includes('disk_icon.svg')) {
        // Play the audio file
        drumAudio.currentTime = 0; // rewind to start
        diskAudio.play();
    }
        if (draggedPiece.src.includes('microphone_icon.svg')) {
            // Play the audio file
            micAudio.currentTime = 0; // rewind to start
            micAudio.play();
        }
        if (draggedPiece.src.includes('phonograph_icon.svg')) {
            // Play the audio file
            cdAudio.currentTime = 0; // rewind to start
            cdAudio.play();
        }
        
    
}

theButtons.forEach(button => button.addEventListener("click", changeBGImage));

musicPieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

dropZones.forEach(zone =>zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

let resetButton = document.getElementById('rewindButton');
resetButton.addEventListener('click', function() {
    location.reload();
});
