function tellStory([name, mood, activity]) {
    if (!name || !mood || !activity) {
        return "Please provide a name, mood, and activity.";
    }

    const story = `${name} was feeling very ${mood} today. So, he decided to ${activity}. It turned out to be an amazing day!`;

    return story;
}

const story = tellStory(['Vladimir', 'happy', 'go for a walk in the park']);
console.log(story);