const albumData = [
    {
      artist: "Adele",
      title: "25",
      length: "00:47:31"
    },
    {
      artist: "Ed Sheeran",
      title: "÷ (Divide)",
      length: "00:43:57"
    },
    // További albumok...
  ];
  
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  const sortCriteria = {
    column: "number",
    order: "ascending"
  };
  
  function compareRows(row1, row2) {
    if (sortCriteria.order === "ascending") {
      if (row1[sortCriteria.column] < row2[sortCriteria.column]) {
        return -1;
      } else if (row1[sortCriteria.column] > row2[sortCriteria.column]) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (row1[sortCriteria.column] > row2[sortCriteria.column]) {
        return -1;
      } else if (row1[sortCriteria.column] < row2[sortCriteria.column]) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  
  function sortRows() {
    const rows = [...tbody.rows].sort(compareRows);
    tbody.innerHTML = "";
    for (const row of rows) {
      tbody.appendChild(row);
    }
  }
  
  function displayAlbum(album) {
    const row = document.createElement("tr");
    const numberCell = document.createElement("td");
    const titleCell = document.createElement("td");
    const artistCell = document.createElement("td");
    const lengthCell = document.createElement("td");
  
    numberCell.textContent = album.number;
    titleCell.textContent = album.title;
    artistCell.textContent = album.artist;
    lengthCell.textContent = album.length;
  
    row.appendChild(numberCell);
    row.appendChild(titleCell);
    row.appendChild(artistCell);
    row.appendChild(lengthCell);
    tbody.appendChild(row);
  }
  
  function displaySongs(album) {
    const albumSongs = album.songs;
    for (const song of albumSongs) {
      const songData = {
        number: song.number,
        title: song.title,
        artist: album.artist,
        length: song.length
      };
      displayAlbum(songData);
    }
  }
  
  function handleAlbumSelection(event) {
    tbody.innerHTML = "";
    const selectedAlbum = event.target.value;
    for (const album of albumData) {
      if (selectedAlbum === album.artist || selectedAlbum === album.title) {
        displaySongs(album);
        break;
      }
    }
    sortRows();
  }
  
  function handleColumnClick(){}
  