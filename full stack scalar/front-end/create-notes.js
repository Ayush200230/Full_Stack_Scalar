const createNotes = async () => {
  const notesText = document.getElementById("note-text").value;
  const authorText = document.getElementById("author-text").value;

  const response = await axios({
    url: "http://localhost:4300/",
    method: "POST",
    data: {
      notes: notesText,
      author: authorText,
    },
  });

  if (response.data === true) {
    alert("Note successfully saved!");
  } else {
    alert("Something wrong happened");
  }
};
