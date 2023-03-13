
let theButtons = document.querySelectorAll("#buttonHolder img"), 
	theHeading = document.querySelector("#headLine h1"),

	iconsBoard = document.querySelector(".drop-board"),
	musicPieces = document.querySelectorAll(".dj-icons img"),
	dropZones = document.querySelectorAll(".drop-zone"),
    piecesBoard = document.querySelector(".dj-icons"),	

    draggedPiece; 


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
    this.appendChild(draggedPiece);}






theButtons.forEach(button => button.addEventListener("click", changeBGImage));

musicPieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

dropZones.forEach(zone =>zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

tempLink.addEventListener('click', blockDefaultBehaviour);