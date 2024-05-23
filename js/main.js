let searchInput = document.getElementById( "inputSearch" );

async function getWeather ( cityName )
{
  var response = await fetch( `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${ cityName }&days=3` );
  var weatherData = await response.json();
  var weatherForecastDay = weatherData.forecast.forecastday;
  console.log( weatherData );
  console.log( weatherForecastDay );
  displayWeatherToday( weatherData );
  // displayWeatherAnotherDays( weatherForecastDay );
}


searchInput.addEventListener( 'keyup', function ( e )
{
  console.log( e.target.value );
  getWeather( e.target.value );
} );

function displayWeatherToday ( weatherData )
{
  console.log( weatherData)
  console.log( weatherData.current.wind_dir)
  console.log( weatherData.forecast.forecastday[1].date)
  console.log( weatherData.forecast.forecastday[2].date)
  cols = '';
  var fullDateCurrent = new Date( weatherData.current.last_updated );
  var fullDateDay2 = new Date( weatherData.forecast.forecastday[ 1 ].date );
  var fullDateDay3 = new Date( weatherData.forecast.forecastday[ 2 ].date );
  cols += `
          <div class="col-md-4 forecast ">
            <div class="forecast_header">
              <div class="day">${ fullDateCurrent.toLocaleDateString( 'en-US', { weekday: "long" } ) }</div>
              <div class="date">${ fullDateCurrent.toLocaleDateString( 'en-US', { day: "numeric" } ) + fullDateCurrent.toLocaleDateString( 'en-US', { month: "short" } ) }</div>
            </div>
            <div class="forecast_content">
              <div class="location">${ weatherData.location.region}</div>
              <div class="degree">
                <div class="num">
                ${ weatherData.current.temp_c }
                  <sup>o</sup>
                  C
                </div>
                <div class="forecast_icon">
                  <img src="https:${ weatherData.current.condition.icon }" alt="" width="90">
                </div>
              </div>
              <div class="custom">${ weatherData.current.condition.text }</div>
              <span class="me-3"><img class="me-2" src="images/icon-umberella.png" alt="icon-umberella.png">${ weatherData.current.humidity }%</span>
              <span class="me-3"><img class="me-2" src="images/icon-wind.png" alt="icon-wind.png">${ weatherData.current.wind_kph }km/h</span>
              <span class="me-3"><img class="me-2" src="images/icon-compass.png" alt="icon-compass.png">${ weatherData.current.wind_dir }</span>
            </div>
          </div>
<div class="col-md-4 forecast">
              <div class="forecast_header">
              <div class="day">${ fullDateDay2.toLocaleDateString( 'en-US', { weekday: "long" } ) }</div>
                <div class="date">${ fullDateDay2.toLocaleDateString( 'en-US', { day: "numeric" } ) + fullDateDay2.toLocaleDateString( 'en-US', { month: "short" } ) }</div>
              </div>
              <div class="forecast_content">
                <div class="forecast_icon">
                  <img src="https:${ weatherData.forecast.forecastday[ 1 ].day.condition.icon }" alt="" width="48">
                </div>
                <div class="degree">${ weatherData.forecast.forecastday[ 1 ].day.maxtemp_c }<sup>o</sup>C</div>
                <small>${ weatherData.forecast.forecastday[ 1 ].day.mintemp_c }<sup>o</sup>C</small>
                <div class="custom">${ weatherData.forecast.forecastday[ 1 ].day.condition.text }</div>
              </div>
            </div>
            <div class="col-md-4 forecast">
              <div class="forecast_header">
              <div class="day">${ fullDateDay3.toLocaleDateString( 'en-US', { weekday: "long" } ) }</div>
                <div class="date">${ fullDateDay3.toLocaleDateString( 'en-US', { day: "numeric" } ) + fullDateDay3.toLocaleDateString( 'en-US', { month: "short" } ) }</div>
              </div>
              <div class="forecast_content">
                <div class="forecast_icon">
                  <img src="https:${ weatherData.forecast.forecastday[ 2 ].day.condition.icon }" alt="" width="48">
                </div>
                <div class="degree">${weatherData.forecast.forecastday[ 2 ].day.maxtemp_c }<sup>o</sup>C</div>
                <small>${ weatherData.forecast.forecastday[ 2 ].day.mintemp_c }<sup>o</sup>C</small>
                <div class="custom">${ weatherData.forecast.forecastday[ 2 ].day.condition.text }</div>
              </div>
            </div>
`;
  document.getElementById( 'show' ).innerHTML = cols;
}

// function displayWeatherAnotherDays ( weatherForecastDay )
// {
//   cols = '';
//   for ( var i = 0; i < weatherForecastDay.length; i++ )
//   {
//     var day = weatherForecastDay[ 1 ];
//     var days = weatherForecastDay[ i ];
//     console.log( day );
//     console.log( days );
//     // console.log( days.date )
//     var daysTimes = new Date( days.date );
//     console.log( daysTimes );
//     cols += `
//           <div class="col-md-4 forecast">
//               <div class="forecast_header">
//               <div class="day">${ daysTimes[1].toLocaleDateString( 'en-US', { weekday: "long" } ) }</div>
//                 <div class="date">${ daysTimes[1].toLocaleDateString( 'en-US', { day: "numeric" } ) + daysTimes[1].toLocaleDateString( 'en-US', { month: "short" } ) }</div>
//               </div>
//               <div class="forecast_content">
//                 <div class="forecast_icon">
//                   <img src="https:${ weatherForecastDay[ 1 ].day.condition.icon }" alt="" width="48">
//                 </div>
//                 <div class="degree">${ weatherForecastDay[ 1 ].day.maxtemp_c }<sup>o</sup>C</div>
//                 <small>${ weatherForecastDay[ 1 ].day.mintemp_c }<sup>o</sup></small>
//                 <div class="custom">${ weatherForecastDay[ 1 ].day.condition.text }</div>
//               </div>
//             </div>
//           `;

//   }
//   document.getElementById( 'show' ).innerHTML = cols;
// }

getWeather( 'istanbul' );
