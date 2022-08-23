import { cleanTime } from "../../utils/cleanTime.js";
import handlePlayPauseUI from "./handlePlayPauseUI.js";
import handleProgressBarStyle from "./handleProgressBarStyle.js";

const fullTime = document.querySelector(".full-time");

const handlePlayMusic = (audio)=>{
    audio.play().then(() => {
        handleProgressBarStyle(audio);
        fullTime.innerHTML = cleanTime(audio.duration);
        handlePlayPauseUI(audio);

      });
};
export default handlePlayMusic;