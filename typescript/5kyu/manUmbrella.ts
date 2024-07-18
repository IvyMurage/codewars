export function minUmbrellas(weather: string[]): number {


const weatherTime = weather.map((weatherPattern, index) => index % 2 === 0 ?
            {weather: weatherPattern, time: 'morning' } :{weather: weatherPattern, time: 'afternoon' } ).filter((weather) => (weather.weather === 'rainy' || weather.weather === 'thunderstorm'))
        new Set(...weatherTime.map(weather => weather.weather))
return 1

}

