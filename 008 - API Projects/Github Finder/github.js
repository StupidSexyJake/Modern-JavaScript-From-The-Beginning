class Github {
    constructor() {
        this.client_id = "e32fee747205e67b0811";
        this.client_secret = "81b1e914746c6e69b7217c1b0367218e8ce06f3f";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}