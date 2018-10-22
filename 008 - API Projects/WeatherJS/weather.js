class Weather {
    constructor(city, state) {
        this.apiKey = "5415225cbdbf8d0e2aea453645bde088";
        this.city = city;
        this.country = country;
    }
    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&APPID=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }
    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}