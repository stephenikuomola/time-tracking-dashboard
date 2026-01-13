// Import JSON data for activities
import data from '../data.json';

const previousLabels = {
  daily: 'Yesterday',
  monthly: 'Last Month',
  weekly: 'Last Week'
};

const EMPTY_ARRAY_LENGTH = 0;
const INCREMENT_HOURS_BY = 1;
const interval = 4000; // 4 seconds

const activities = /**@type {NodeListOf<HTMLParagraphElement>} */ (
  document.querySelectorAll('.activities-card_wrapper_nav > p')
);

const timePeriodInputs = /**@type {NodeListOf<HTMLInputElement>} */ (
  document.querySelectorAll('input[name="time-period"]')
);

const activitiesCard = /**@type {NodeListOf<HTMLDivElement>} */ (
  document.querySelectorAll('.activities-card_wrapper')
);

window.addEventListener('load', () => {
  renderTimePeriodAndActivities();
});

/**
 * This function animates the current hours number.
 * @param {HTMLParagraphElement} currentHoursElement - The current hours element.
 * @param {number} current - The current hours number.
 * @returns {void}
 */
function animateCurrentHours(currentHoursElement, current) {
  let startHours = 0;
  const endHours = current;
  const duration = Math.floor(interval / endHours);
  const counter = setInterval(function () {
    startHours += INCREMENT_HOURS_BY;
    currentHoursElement.textContent = `${startHours}hrs`;
    if (startHours === endHours) {
      clearInterval(counter);
    }

    if (startHours > endHours) {
      currentHoursElement.textContent = `${endHours}hrs`;
      clearInterval(counter);
    }
  }, duration);
}

/**
 * This function animates the previous hours number.
 * @param {HTMLParagraphElement} previousHoursElement - The previous hours element.
 * @param {number} previous - The previous hours number as a string.
 * @param {string} previousLabel - The label for the previous hours.
 * @returns {void}
 */
function animatePreviousHours(previousHoursElement, previous, previousLabel) {
  let startHours = 0;
  const endHours = previous;
  const duration = Math.floor(interval / endHours);
  const counter = setInterval(function () {
    startHours += INCREMENT_HOURS_BY;
    previousHoursElement.innerHTML = `<span class="previous-text">${previousLabel} - </span> ${startHours}hrs`;
    if (startHours === endHours) {
      clearInterval(counter);
    }

    if (startHours > endHours) {
      previousHoursElement.innerHTML = `<span class="previous-text">${previousLabel} - </span> ${endHours}hrs`;
      clearInterval(counter);
    }
  }, duration);
}

/**
 * Handles the change event for time period inputs.
 * @param {Event} evtObj - The change event object.
 * @returns {void}
 */
function handleTimePeriodChange(evtObj) {
  // Ensure the event target is an HTMLInputElement
  if (!(evtObj.target instanceof HTMLInputElement)) return;

  // Only proceed if the input is checked
  if (!evtObj.target.checked) return;
  const period = evtObj.target.value;
  renderTimePeriodAndActivities(period);
}
/**
 * This function renders the time period and activities titles
 * from the imported JSON data to the respective HTML elements.
 * @param {string} period - The time period to render (default is 'weekly').
 * @returns {void}
 */
function renderTimePeriodAndActivities(period = 'weekly') {
  try {
    const validPeriods = ['daily', 'weekly', 'monthly'];

    if (!Array.isArray(data) || data.length === EMPTY_ARRAY_LENGTH) {
      throw new Error(`Data is missing or empty`);
    }

    if (!validPeriods.includes(period)) {
      throw new Error(`${period} is an invalid period`);
    }
    const dataValues = data;

    const validPeriod = /** @type {'daily' | 'weekly' | 'monthly'} */ (period);

    dataValues.forEach(function (dataValue, index) {
      // render the activities title
      activities[index].textContent = dataValue.title;

      // We want to obtain the current hours, the previous hours and the previous label
      const previousLabel = previousLabels[validPeriod];
      const { current, previous } = dataValue.timeframes[validPeriod];

      // Get the current hours, previous hours, and previous label elements
      const activityCard = activitiesCard[index];
      const currentHoursElement = /**@type {HTMLParagraphElement} */ (
        activityCard.querySelector('.current')
      );
      const previousHoursElement = /**@type {HTMLParagraphElement}*/ (
        activityCard.querySelector('.previous')
      );

      animateCurrentHours(currentHoursElement, current);
      animatePreviousHours(previousHoursElement, previous, previousLabel);
    });
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
  }
}

/* Listen for the time period input changes */
timePeriodInputs.forEach(function (input) {
  input.addEventListener('change', handleTimePeriodChange);
});
