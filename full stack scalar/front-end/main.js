const fetchNotes = async () => {
  const response = await axios({
    url: "http://localhost:4300/",
    method: "GET",
  });
  const notesList = response.data;

  const noteListTag = document.getElementById("view-note-list");
  for (let i = 0; i < notesList.length; i++) {
    const tag = `
    <li class="view-note-block">
      <div>${notesList[i].notes}</div>
      <div class="view-note-author">${notesList[i].author}</div>
    </li>
    `;

    noteListTag.innerHTML += tag;
  }
};

fetchNotes();
