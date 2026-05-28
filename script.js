const levels = [
    { answer: 'saturn', video: 'german.mp4' },
    { answer: 'germany', video: 'chip.mp4' },
    { answer: 'chip', video: '' } 
];



function check(event) {
    event.preventDefault();
    let score = document.getElementById('score');
    let level = document.getElementById('level'); 
    const inputValue = event.target.userAnswer.value;
    const video = document.getElementById('videoPlayer');
    const currentLevel = Number(level.value);
    console.log(currentLevellevels[currentLevel]);
    if (currentLevel < levels.length && inputValue == levels[currentLevel].answer) {
        alert("Answer correct");
        score.value = Number(score.value) + 1;
        level.value = Number(level.value) + 1; // Move to next level

        if (levels[currentLevel].video) {
            video.children[0].src = levels[currentLevel].video;
            video.load();
        }
    } else {
        score.value = Number(score.value) - 1;
        alert("Answer incorrect or wrong level!");
    }

    return false;
}
