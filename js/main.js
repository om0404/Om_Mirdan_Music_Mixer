let theButtons = document.querySelectorAll("#buttonHolder img"), 
	theHeading = document.querySelector("#headLine h1"),

	iconsBoard = document.querySelector(".drop-board"),
	musicPieces = document.querySelectorAll(".dj-icons img"),
	dropZones = document.querySelectorAll(".drop-zone"),
    piecesBoard = document.querySelector(".dj-icons"),	

    draggedPiece; 




    theButtons.forEach(button => button.addEventListener("click", changeBGImage));

musicPieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

dropZones.forEach(zone =>zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

tempLink.addEventListener('click', blockDefaultBehaviour);