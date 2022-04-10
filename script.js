data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const changeData = (event) => {
  let menuItems = document.getElementsByClassName("menu");

  let duration = event.target.innerText.toLowerCase();

  for (let item of menuItems) {
    item.classList.remove("status");
  }
  event.target.classList.add("status");

  let work_current = document.getElementById("work-current");
  let work_last = document.getElementById("work-last");
  let play_current = document.getElementById("play-current");
  let play_last = document.getElementById("play-last");
  let exercise_current = document.getElementById("exercise-current");
  let excercise_last = document.getElementById("exercise-last");
  let study_current = document.getElementById("study-current");
  let study_last = document.getElementById("study-last");
  let social_current = document.getElementById("social-current");
  let social_last = document.getElementById("social-last");
  let self_care__current = document.getElementById("self-care-current");
  let self_care_last = document.getElementById("self-care-last");

  for (let item of data) {
    if (item.title === "Work") {
      work_current.innerText = item.timeframes[duration].current;
      work_last.innerText = item.timeframes[duration].previous;
    }
    if (item.title === "Play") {
      play_current.innerText = item.timeframes[duration].current;

      play_last.innerText = item.timeframes[duration].previous;
    }
    if (item.title === "Exercise") {
      exercise_current.innerText = item.timeframes[duration].current;

      excercise_last.innerText = item.timeframes[duration].previous;
    }
    if (item.title === "Study") {
      study_current.innerText = item.timeframes[duration].current;

      study_last.innerText = item.timeframes[duration].previous;
    }
    if (item.title === "Social") {
      social_current.innerText = item.timeframes[duration].current;

      social_last.innerText = item.timeframes[duration].previous;
    }
    if (item.title === "Self Care") {
      self_care__current.innerText = item.timeframes[duration].current;

      self_care_last.innerText = item.timeframes[duration].previous;
    }
  }
};
