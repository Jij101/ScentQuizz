function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Example usage:
saveDataToLocalStorage('quizResults', quizResults);

  Retrieving Data from Local Storage

function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Example usage:
const quizResults = getDataFromLocalStorage('quizResults');
if (quizResults) {
    // Restore the quiz results into your application
}

  Updating Local Storage on Changes

function updateQuizResults(newResults) {
    quizResults = newResults;
    saveDataToLocalStorage('quizResults', quizResults);
}

// Example usage:
updateQuizResults(updatedQuizResults);

  Full Implementation

  Here is a more complete example of how you might integrate this into your application:

let quizResults = getDataFromLocalStorage('quizResults') || [];

function startQuiz() {
    // Start the quiz logic here
    // ...

    // Update the results after quiz completion
    updateQuizResults(newResults);
}

function updateQuizResults(newResults) {
    quizResults = newResults;
    saveDataToLocalStorage('quizResults', quizResults);
}

function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Example usage:
document.getElementById('startQuizButton').addEventListener('click', startQuiz);

window.addEventListener('load', () => {
    // Restore quiz results if any
    if (quizResults.length > 0) {
        displayQuizResults(quizResults);
    }
});