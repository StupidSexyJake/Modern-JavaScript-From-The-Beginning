class UI {
    constructor() {
        this.el_location = document.getElementById("w-location");
        this.el_desc = document.getElementById("w-desc");
        this.el_string = document.getElementById("w-string");
        this.el_details = document.getElementById("w-details");
        this.el_icon = document.getElementById("w-icon");
        this.el_humidity = document.getElementById("w-humidity");
        this.el_sunrise = document.getElementById("w-sunrise");
        this.el_sunset = document.getElementById("w-sunset");
        this.el_wind = document.getElementById("w-wind");
    }
    getCardinal(angle) {
        const directions = 8;
        const degree = 360 / directions;
        angle = angle + degree/2;
        if (angle >= 0 * degree && angle < 1 * degree)
            return "N";
        if (angle >= 1 * degree && angle < 2 * degree)
            return "NE";
        if (angle >= 2 * degree && angle < 3 * degree)
            return "E";
        if (angle >= 3 * degree && angle < 4 * degree)
            return "SE";
        if (angle >= 4 * degree && angle < 5 * degree)
            return "S";
        if (angle >= 5 * degree && angle < 6 * degree)
            return "SW";
        if (angle >= 6 * degree && angle < 7 * degree)
            return "W";
        if (angle >= 7 * degree && angle < 8 * degree)
            return "NW";
        return "N";
    }
    paint(weather) {
        const sunrise = new Date(weather.sys.sunrise * 1000);
        const sunriseHours = sunrise.getHours();
        const sunriseMinutes = (sunrise.getMinutes() < 10 ? "0" : "") + sunrise.getMinutes();
        const sunset = new Date(weather.sys.sunset * 1000);
        const sunsetHours = sunset.getHours();
        const sunsetMinutes = (sunset.getMinutes() < 10 ? "0" : "") + sunset.getMinutes();
        const windDirection = this.getCardinal(weather.wind.deg);        

        this.el_location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.el_desc.textContent = weather.weather[0].description;
        this.el_string.textContent = weather.main.temp;
        this.el_icon.setAttribute("src", `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.el_humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.el_sunrise.textContent = `Sunrise: ${sunriseHours}:${sunriseMinutes}`;
        this.el_sunset.textContent = `Sunset: ${sunsetHours}:${sunsetMinutes}`;
        this.el_wind.textContent = `Wind: ${weather.wind.speed}m/s ${windDirection}`;
    }
}