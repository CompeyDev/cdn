	var discord_id = "893762371770802227";

    function updateStats() {
                    $.getJSON("https://api.lanyard.rest/v1/users/" + discord_id, (data) => {
                        data = data.data;
                        if (data.listening_to_spotify) {
                            $("#spotify").html(`Listening to <a class="noAStyle" target="_blank" href="https://spotify.devcomp.tk"><b>${data.spotify.song}</b> \n by <i>${data.spotify.artist}</i></a>`);
                        } else {
                            $("#spotify").html("Not listening to anything.")
                        }
            })
    }
    updateStats();
    setInterval(updateStats, 30000);
