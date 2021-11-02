export function getWeather(city) {
  // let weather = {
  // let weatherKey: "80334aad6f25b66d22605bc6cadd0e4b";
  // function () {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=80334aad6f25b66d22605bc6cadd0e4b`
  )
    .then((response) => response.json())
    .then((data) => {
      return displayWeather(data);
    });

  function displayWeather(data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp } = data.main;
    return { temp };
    // return (
    // `In ${name} it's currently ${temp} with ${description} there`
    // <span>In {name}, it's currently {temp} with {description}</span>
    // )
  }

  // return (displayWeather());
  // displayWeather();
  // }
  // }
}
