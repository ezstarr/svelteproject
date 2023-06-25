<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let reply = data.reply
    let name ="world";


    //const setupTextarea = document.getElementById('setup-textarea')
    let setupTextarea
    // const setupInputContainer = document.getElementById('setup-input-container')
    // const movieBossText = document.getElementById('movie-boss-text')

    // document.getElementById("send-btn").addEventListener("click", () => {
    //     if (setupTextarea.value) {
    //         const userInput = setupTextarea.value
    //         setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`
    //         movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`
    //         fetchBotReply(userInput)
    //     }
    // })



</script>

<head>
    <title>Movie Pitch</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700&family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
    />
    <link rel="stylesheet" href="index.css" />
</head>

<body>
    <header>
        <img src="./images/logo-movie.png" alt="MoviePitch" />
        <a href="/"><span>Movie</span>Pitch</a>
    </header>
    <main>
        <!-- The Setup -->
        <section id="setup-container">
            <div class="setup-inner">
    
                <img src="/images/birb-badge.png" alt="round cartoon bird character"/>
                <div class="speech-bubble-ai" id="speech-bubble-ai">
                    <p id="movie-boss-text">
                        Give me a one-sentence concept and I'll give you an
                        eye-catching title, a synopsis the studios will love, a
                        movie poster... AND choose the cast! {reply}
                    </p>
                </div>
            </div>
            <div
                class="setup-inner setup-input-container"
                id="setup-input-container"
            >
                <textarea bind:this={setupTextarea}
                    id="setup-textarea"
                    placeholder="An evil genius wants to take over the world using AI."
                />
                <button class="send-btn" id="send-btn" aria-label="send">
                    <img src="images/send-btn-icon.png" alt="send" />
                </button>
            </div>
        </section>
        <!-- The Output -->
        <section class="output-container" id="output-container">
            <div id="output-img-container" class="output-img-container">
            <h1 id="output-title" alt="output title" aria-level="2" >"output title"</h1>
            <h2 id="output-stars" alt="output stars" aria-level="1" >"output stars"</h2>
            <p id="output-text">output text </p>
        </div>
        </section>
    </main>
    <footer>&copy; 2023 MoviePitch All rights reserved</footer>
    <script type="module" src="index.js"></script>
</body>

<style>
    :root {
        --white: #ffffff;
        --light: whitesmoke;
        --light-grey: #e8e8e8;
        --pink: #ff176b;
        --medium-dark: #777;
        --dark: #242526;
        --border-rad-lg: 15px;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        font-size: 16px;
    }

    body {
        font-family: "Poppins";
        background-size: cover;
        background-repeat: repeat-y;
        background-image: url("images/moviepitchbg-dark.jpg");
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* =================
      Typography 
     ================= */

    h1 {
        font-family: "Playfair Display SC", serif;
        text-align: center;
    }

    h2 {
        font-size: 1.3em;
    }

    p {
        line-height: 1.35em;
    }

    /* =================
      Sections 
     ================= */

    header {
        background-color: var(--dark);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.3em;
    }

    header > img {
        height: 26px;
    }

    header > a {
        color: var(--light);
        font-size: 1.5em;
        text-decoration: none;
        padding: 1em 0;
    }

    header span {
        font-weight: 700;
    }

    main {
        padding: 0 1em;
    }

    section {
        margin: 0 auto;
        background-color: var(--light);
        border-radius: var(--border-rad-lg);
        padding: 0.25em 1em;
        box-shadow: 0px 1px 18px 3px var(--dark);
        max-width: 420px;
    }

    /* =================
      Setup 
     ================= */

    .setup-inner {
        display: flex;
        justify-content: space-around;
        padding: 1.5em 0.5em;
        min-height: 234px;
    }

    .setup-inner > img {
        width: 40%;
        filter: drop-shadow(3px 2px 3px var(--medium-dark));
        align-self: center;
    }

    .setup-input-container {
        min-height: 74px;
    }

    .speech-bubble-ai {
        max-width: 55%;
        min-height: 124px;
        border-radius: var(--border-rad-lg);
        position: relative;
        margin: 0;
        border: 3px solid var(--medium-dark);
        background-color: var(--white);
        align-self: flex-start;
        display: flex;
        align-items: center;
    }

    .speech-bubble-ai:before {
        content: "";
        position: absolute;
        border-left: 9px solid transparent;
        border-right: 9px solid var(--medium-dark);
        border-top: 9px solid var(--medium-dark);
        border-bottom: 9px solid transparent;
        left: -21px;
        top: 64px;
    }

    .speech-bubble-ai:after {
        content: "";
        position: absolute;
        border-left: 7px solid transparent;
        border-right: 7px solid var(--white);
        border-top: 7px solid var(--white);
        border-bottom: 7px solid transparent;
        left: -11px;
        top: 68px;
    }

    .speech-bubble-ai > p {
        padding: 0 1.3em;
        color: var(--dark);
        font-size: 85%;
    }

    textarea {
        background-color: var(--light-grey);
        padding: 0.8em;
        border: none;
        border-top-right-radius: 0;
        border-top-left-radius: var(--border-rad-lg);
        border-bottom-right-radius: 0;
        border-bottom-left-radius: var(--border-rad-lg);
        width: 100%;
        resize: none;
        min-height: 40px;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    textarea::placeholder {
        color: var(--medium-dark);
        font-size: 88%;
        opacity: 0.8;
    }

    /* larger mobiles+ */

    @media (min-width: 380px) {
        .setup-input-container {
            padding-top: 0;
        }

        .speech-bubble-ai:before {
            top: 92px;
        }

        .speech-bubble-ai:after {
            top: 96px;
        }

        .speech-bubble-ai > p {
            font-size: 100%;
        }

        textarea::placeholder {
            font-size: 100%;
            opacity: 0.8;
        }
    }

    /* =================
      Buttons & SVG 
     ================= */

    button {
        border: none;
        background: var(--pink);
        cursor: pointer;
    }

    button:hover {
        background-color: var(--dark);
    }

    .send-btn {
        border-top-right-radius: var(--border-rad-lg);
        border-bottom-right-radius: var(--border-rad-lg);
        min-width: 50px;
    }

    .send-btn > img {
        width: 1.6em;
        vertical-align: middle;
    }

    .view-pitch-btn {
        color: var(--light);
        border-radius: var(--border-rad-lg);
        padding: 1em;
        margin: 0.4em auto;
        display: block;
        font-size: 1.2em;
    }

    .view-pitch-btn:hover {
        box-shadow: 1px 1px 5px 1px var(--medium-dark);
    }

    img.loading {
        max-width: 40px;
        filter: none;
    }

    /* =================
      Output 
     ================= */

    .output-container {
        display: none;
        flex-direction: column;
        margin: 1em auto;
        color: var(--dark);
        padding: 1em;
    }

    .output-img-container > img {
        max-width: 100%;
        border-radius: var(--border-rad-lg);
        box-shadow: 1px 1px 5px 1px var(--dark);
    }

    /* =================
      Footer 
     ================= */

    footer {
        background-color: var(--dark);
        color: var(--light);
        padding: 0.8em;
        font-size: 0.7em;
        text-align: center;
    }
</style>
