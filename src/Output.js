import React, { useEffect, useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";
import "./Output.css";
import random from "utils.random";

function Output() {
  const [message, setMessage] = useState("");
  const { speak, cancel, supported } = useSpeechSynthesis();

  useEffect(() => {
    if (supported == false) {
      return "Browser does not support Web Speech API. Please download latest Chrome.";
    } else {
      speak({
        text: message,
        default: true,
        lang: "en-US",
        localService: true,
        name: "Microsoft Zira Desktop - English (United States)",
        voiceURI: "Microsoft Zira Desktop - English (United States)",
      });
    }
  }, [message]);

  // function say() {
  //   speak({ text: message });
  // }

  const commands = [
    // CONVO.s
    // NAMING in convo.
    {
      command: "My name is *",
      callback: (name) => {
        resetTranscript();
        // const word = ["Hi", `${name}`, `Hello ${name}`];
        setMessage(`Hi ${name}. How you land up here?`);
        // setMessage(random(word));
      },
    },
    {
      command: "I am *",
      callback: (name) => {
        resetTranscript();
        setMessage(`Hi ${name}. Nice name`);
      },
    },
    {
      command: "Hello",
      callback: () => {
        resetTranscript();
        const words = ["Hi", "Hello", "Bonjour"];
        setMessage(random(words));
      },
      matchInterim: true,
    },
    {
      command: "(What's) (What is) your name",
      callback: () => {
        resetTranscript();
        setMessage("My name's Aether");
      },
      matchInterim: true,
    },
    {
      command: "Who are you",
      callback: () => {
        resetTranscript();
        setMessage("I'm your voice assistant");
      },
      matchInterim: true,
    },
    // OTHERS in convo
    {
      command: "Ok",
      callback: () => {
        resetTranscript();
        setMessage("Need something else..");
      },
    },
    {
      command: "Good",
      callback: () => {
        resetTranscript();
        setMessage("Glad that you like it.");
      },
      matchInterim: true,
    },
    {
      command: "Thank you",
      callback: () => {
        resetTranscript();
        setMessage("My Pleasure");
      },
      matchInterim: true,
    },
    {
      // DATE AND TIME
      command: "What time is it",
      callback: () => {
        resetTranscript();
        setMessage(new Date().toLocaleTimeString());
      },
      matchInterim: true,
    },
    {
      command: "What is the date (today)",
      callback: () => {
        resetTranscript();
        setMessage(new Date().toLocaleDateString());
      },
      matchInterim: true,
    },
    {
      // TELLING THE DAY OF DATE
      command: "(What's) (What) (was) (will be) the day on *",
      callback: (date) => {
        resetTranscript();
        let thatDay, day;
        var options = { weekday: "long" };
        thatDay = new Date(`${date}`);
        day = new Intl.DateTimeFormat("en-US", options).format(thatDay);
        let timeline = thatDay < new Date() ? "was" : "will be";
        setMessage(`On ${date}, it ${timeline} ${day}`);
      },
      // matchInterim: true,
    },
    {
      //ALARM CLOCK
      command: "Set alarm for *:*a.m.",
      callback: (hour, minute) => {
        resetTranscript();
        let today = new Date();
        today.setHours(`${hour}`);
        today.setMinutes(`${minute}`);
        setMessage(`Setting alarm for ${today}`);

        var ring = new Audio(
          "https://imagesforwebsite.netlify.app/MusicPlaylist/1.mp3"
        );

        function ringBell() {
          ring.play();
        }

        function setAlarm() {
          // e.preventDefault();
          let alarmTime = new Date(`${today}`);
          let now = new Date();

          let timeToAlarm = alarmTime - now;
          if (timeToAlarm >= 0) {
            setTimeout(() => {
              ringBell();
            }, timeToAlarm);
          }
        }
        setAlarm();
      },
      // matchInterim: true,
    },
    {
      // MUSIC
      command: "Play music",
      callback: () => {
        resetTranscript();
        toPlayMusic();
        setMessage("Enjoy");
      },
    },
    {
      command: "Stop music",
      callback: () => {
        resetTranscript();
        toStopMusic();
        setMessage("Your Wish");
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.8,
    },
    {
      command: "Show (the) playlist",
      callback: () => {
        resetTranscript();

        setMessage(
          <ul>
            <li>Slow Hands by Niall Horan</li>
            <li>Mine by Taylor Swift</li>
            <li>Nit Nit by Jasleen Royal</li>
            <li>Ours by Taylor Swift</li>
            <li>Night Changes by One Direction</li>
            <li>History by One Direction</li>
            <li>One Thing by One Direction</li>
            <li>This Town by Niall Horan</li>
            <li>The Night We Met by Lord Huron</li>
            <li>Not Today by Imagine Dragons</li>
            <li>Bad Liar by Imagine Dragons</li>
            <li>All I Want by Kodaline</li>
            <li>Udd Gaye by Ritviz</li>
            <li>War by Jay Sean</li>
            <li>In The End by Linkin Park</li>
            <li>2002 by Anne-Marie</li>
            <li>Who Says by Selena Gomez & The Scene</li>
            <li>Party In The U.S.A. by Miley Cyrus</li>
          </ul>
        );
      },
    },

    {
      //GOOGLE, YOUTUBE, WIKI, SPOTIFY, GMAIL, G.ACCOUNT
      command: "Open google",
      callback: () => {
        resetTranscript();
        function openGoogle() {
          window.open("https://www.google.co.in/", "_blank");
        }
        openGoogle();
        setMessage("Go Google!");
      },
    },
    {
      command: "Open youtube",
      callback: () => {
        resetTranscript();
        function openYoutube() {
          window.open("https://www.youtube.com/", "_blank");
        }
        openYoutube();
        setMessage("Go Youtube!");
      },
    },
    {
      command: "Open wikipedia",
      callback: () => {
        resetTranscript();
        function openWikipedia() {
          window.open("https://www.wikipedia.org/", "_blank");
        }
        openWikipedia();
        setMessage("Go Wikipedia!");
      },
    },
    {
      command: "Open spotify",
      callback: () => {
        resetTranscript();
        function openWikipedia() {
          window.open("https://www.spotify.com/in/", "_blank");
        }
        openWikipedia();
        setMessage("Go Spotify!");
      },
    },
    {
      command: "Open Gmail",
      callback: () => {
        resetTranscript();
        function openGmail() {
          window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox");
        }
        openGmail();
        setMessage("Here you go !");
      },
    },
    {
      command: "(Open) (my) (the) Google Account",
      callback: () => {
        resetTranscript();
        function openGoogleAccount() {
          window.open("https://myaccount.google.com/?tab=kk");
        }
        openGoogleAccount();
        setMessage("ok");
      },
    },
    {
      // GOOGLING, YOUTUBING, WIKIKING (search)
      command: "Search * on google",
      callback: (gitem) => {
        resetTranscript();
        function toGoogle() {
          window.open(`http://google.com/search?q=${gitem}`, "_blank");
        }
        toGoogle();
        setMessage(`Okay. Googling ${gitem}`);
      },
    },
    {
      command: "Google *",
      callback: (gitem) => {
        resetTranscript();
        function toGoogle() {
          window.open(`http://google.com/search?q=${gitem}`, "_blank");
        }
        toGoogle();
        setMessage(`Okay. Googling ${gitem}`);
      },
    },
    {
      command: "Search * on youtube",
      callback: (yitem) => {
        resetTranscript();
        function toYoutube() {
          window.open(
            `https://www.youtube.com/results?search_query=${yitem}`,
            "_blank"
          );
        }
        toYoutube();
        setMessage(`${yitem}. Here you go.`);
      },
    },
    {
      command: "Search * on wikipedia",
      callback: (witem) => {
        resetTranscript();
        function toWiki() {
          window.open(`https://en.wikipedia.org/wiki/${witem}`, "_blank");
        }
        toWiki();
        setMessage(`Searching ${witem} on Wiki`);
      },
    },
    {
      command: "Some random knowledge on wikipedia",
      callback: () => {
        resetTranscript();
        function toWiki() {
          window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
        }
        toWiki();
        setMessage(`Okay`);
      },
    },
    {
      command: "Search * on wiki",
      callback: (witem) => {
        resetTranscript();
        function toWiki() {
          window.open(`https://en.wikipedia.org/wiki/${witem}`, "_blank");
        }
        toWiki();
        setMessage(`Searching ${witem} on Wiki`);
      },
    },
    // FOR UNSPLASH IMAGES
    {
      command: "Search for * images",
      callback: (image) => {
        resetTranscript();
        function toUnsplash() {
          window.open(`https://unsplash.com/s/photos/${image}`, "_blank");
        }
        toUnsplash();
        setMessage(`Images for ${image}`);
      },
    },
    {
      // CALCULATOR
      command: "Add * and *",
      callback: (numa, numb) => {
        resetTranscript();
        const num1 = parseInt(numa, 10);
        const num2 = parseInt(numb, 10);
        setMessage(`The answer is: ${num1 + num2}`);
      },
    },
    {
      command: "* + *",
      callback: (numa, numb) => {
        resetTranscript();
        const num1 = parseInt(numa, 10);
        const num2 = parseInt(numb, 10);
        setMessage(`The answer is: ${num1 + num2}`);
      },
    },
    {
      command: "* plus *",
      callback: (numa, numb) => {
        resetTranscript();
        const num1 = parseInt(numa, 10);
        const num2 = parseInt(numb, 10);
        setMessage(`The answer is: ${num1 + num2}`);
      },
    },
    {
      command: "* - *",
      callback: (numa, numb) => {
        resetTranscript();
        const num1 = parseInt(numa, 10);
        const num2 = parseInt(numb, 10);
        setMessage(`The answer is: ${num1 - num2}`);
      },
    },
    {
      command: "* minus *",
      callback: (numa, numb) => {
        resetTranscript();
        const num1 = parseInt(numa, 10);
        const num2 = parseInt(numb, 10);
        setMessage(`The answer is: ${num1 - num2}`);
      },
    },
    {
      command: "* / *",
      callback: (numa, numb) => {
        resetTranscript();
        const num1 = parseInt(numa, 10);
        const num2 = parseInt(numb, 10);
        setMessage(`The answer is: ${num1 / num2}`);
      },
    },
    {
      command: "* divided by *",
      callback: (numa, numb) => {
        resetTranscript();
        const num1 = parseInt(numa, 10);
        const num2 = parseInt(numb, 10);
        let divide = num1 / num2;
        setMessage(`The answer is: ${divide.toFixed(3)}`);
      },
    },
    {
      command: "* x *",
      callback: (numa, numb) => {
        resetTranscript();
        const num1 = parseInt(numa, 10);
        const num2 = parseInt(numb, 10);
        setMessage(`The answer is: ${num1 * num2}`);
      },
    },
    {
      command: "* X *",
      callback: (numa, numb) => {
        resetTranscript();
        const num1 = parseInt(numa, 10);
        const num2 = parseInt(numb, 10);

        setMessage(`The answer is: ${num1 * num2}`);
      },
    },
    {
      command: "* multiply by *",
      callback: (numa, numb) => {
        resetTranscript();
        const num1 = parseInt(numa, 10);
        const num2 = parseInt(numb, 10);
        setMessage(`The answer is: ${num1 * num2}`);
      },
    },
    {
      // CUBE & SQUARE ROOT, EXPONENTIAL, RANDOM NUMBER (shaould add LOGS with base e & 10 ?!)
      command: "Square root of *",
      callback: (num) => {
        resetTranscript();
        setMessage(`The answer is: ${Math.sqrt(num).toFixed(3)}`);
      },
    },
    {
      command: "Cube root of *",
      callback: (num) => {
        resetTranscript();
        setMessage(`The answer is: ${Math.cbrt(num).toFixed(3)}`);
      },
    },
    {
      command: "* raised to the power (of) *",
      callback: (x, y) => {
        resetTranscript();
        setMessage(`The answer is: ${Math.pow(x, y)}`);
      },
    },
    {
      command: "* raise to the power (of) *",
      callback: (x, y) => {
        resetTranscript();
        setMessage(`The answer is: ${Math.pow(x, y)}`);
      },
    },
    {
      command: "Tell me a random number",
      callback: () => {
        resetTranscript();
        setMessage(`${Math.random().toFixed(3)} is a nice number`);
      },
    },
    {
      // WEATHER
      command: "(What's the) (What is the)(Weather) (temperature) in *",
      callback: (city) => {
        resetTranscript();
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=80334aad6f25b66d22605bc6cadd0e4b`
        )
          .then((response) => response.json())
          .then((data) => {
            displayWeather(data);
          });

        function displayWeather(data) {
          const { name } = data;
          const { description } = data.weather[0];
          const { temp } = data.main;
          // console.log(name, description, temp);
          setMessage(
            `In ${name} it's currently ${temp}°C with ${description} there`
          );
        }
      },
    },
    // QUOTES AND JOKES
    {
      command: "Tell (me) a (random) quote",
      callback: () => {
        resetTranscript();
        fetch("https://api.quotable.io/random")
          .then((response) => response.json())
          .then((data) => {
            displayQuote(data);
          });

        function displayQuote(data) {
          const { content } = data;
          const { author } = data;
          setMessage(`The quote is by ${author}, ${content}`);
        }
      },
    },
    // COVID UPDATES AND VACCINES
    {
      command: "Coronavirus (cases) (updates) in *",
      callback: (country) => {
        resetTranscript();
        let countryCase = country.charAt(0).toUpperCase() + country.slice(1);
        fetch(
          `https://covid-api.mmediagroup.fr/v1/cases?country=${countryCase}`
        )
          .then((response) => response.json())
          .then((data) => {
            displayCovidCases(data);
          });
        function displayCovidCases(data) {
          const { confirmed } = data.All;
          const { recovered } = data.All;
          setMessage(
            `In ${countryCase}, Total cases: ${confirmed.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 2,
              }
            )} and Recovered Cases: ${recovered.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`
          );
        }
      },
    },
    {
      command: "Coronavirus (cases) (updates) in delhi",
      callback: () => {
        resetTranscript();
        fetch("https://covid-api.mmediagroup.fr/v1/cases?country=India")
          .then((response) => response.json())
          .then((data) => {
            displayCovidCases(data);
          });
        function displayCovidCases(data) {
          const { confirmed } = data.Delhi;
          const { recovered } = data.Delhi;
          setMessage(
            `In Delhi, Total cases: ${confirmed.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })} and Recovered Cases: ${recovered.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`
          );
        }
      },
    },
    {
      command: "(Vaccine) (Vaccines) (updates) in *",
      callback: (country) => {
        resetTranscript();
        let countryCase = country.charAt(0).toUpperCase() + country.slice(1);
        fetch(
          `https://covid-api.mmediagroup.fr/v1/vaccines?country=${countryCase}`
        )
          .then((response) => response.json())
          .then((data) => {
            displayCovidVaccines(data);
          });
        function displayCovidVaccines(data) {
          const { people_vaccinated } = data.All;
          setMessage(
            `In ${countryCase}, Total no. of people vaccinated: ${people_vaccinated.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 2,
              }
            )}`
          );
        }
      },
    },
    // SENDING MAIL
    {
      command: "Send (a) (mail) (email) with subject * and content *",
      callback: (subject, content) => {
        resetTranscript();
        function toMail() {
          window.open(
            `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=${subject}&body=${content}`,
            "_blank"
          );
        }
        toMail();
        setMessage(`${subject}. Here you go.`);
      },
    },
    {
      // CLEAR or STOP.
      command: "clear",
      callback: () => {
        resetTranscript();
        cancel();
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
    },
    // {
    //   // CLEAR or STOP.
    //   command: "stop",
    //   callback: () => {
    //     SpeechRecognition.abortListening();
    //   },
    //   matchInterim: true,
    // },
  ];

  // MUSIC FUNCTIONS DEFINED
  const audioPlayer = document.querySelector("audio");
  function toPlayMusic() {
    audioPlayer.play();
    audioPlayer.style.display = "block";
  }
  function toStopMusic() {
    audioPlayer.pause();
    audioPlayer.style.display = "none";
  }

  //MUSIC PLAYER

  var i = 1;
  var nextSong = "";
  function playMusic() {
    i++;
    nextSong = "/MusicPlaylist/" + i + ".mp3";
    // audioPlayer = document.getElementById("audio");
    audioPlayer.src = nextSong;
    audioPlayer.load();
    audioPlayer.play();
    if (i == 18) {
      // this is the end of the songs.
      i = 1;
    }
  }

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  return (
    <div className="output">
      <div className="output__output">
        {/* onChange={} */}
        <p className="output_lines">{transcript}</p>
        <p className="output_lines">{message}</p>
      </div>
      <audio
        className="audio"
        // src={"/MusicPlaylist/" + i + ".mp3"}
        src="/MusicPlaylist/1.mp3"
        controls="controls"
        // autoplay="autoplay"
        align=""
        onEnded={playMusic}
      ></audio>
    </div>
  );
}

export default Output;
