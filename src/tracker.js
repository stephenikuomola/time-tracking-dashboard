// Import JSON data for activities
import data from '../data.json';

const previousLabels = {
  daily: 'Yesterday',
  monthly: 'Last Month',
  weekly: 'Last Week'
};
console.log(previousLabels);

const EMPTY_ARRAY_LENGTH = 0;

const activities = /**@type {NodeListOf<HTMLParagraphElement>} */ (
  document.querySelectorAll('.activities-card_wrapper_nav > p')
);

const timePeriodInputs = /**@type {NodeListOf<HTMLInputElement>} */ (
  document.querySelectorAll('input[name="time-period"]')
);
console.log(timePeriodInputs);

const activitiesCard = /**@type {NodeListOf<HTMLDivElement>} */ (
  document.querySelectorAll('.activities-card_wrapper')
);
console.log(activitiesCard);

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

      // Render the current hours and previous hours with labels
      currentHoursElement.textContent = `${current}hrs`;
      previousHoursElement.innerHTML = `<span class="previous-text">${previousLabel} - </span> 
        ${previous}hrs
      `;
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.log(` You have an issue as ${message}`);
  }
}

renderTimePeriodAndActivities();
