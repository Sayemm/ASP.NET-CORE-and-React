using MoviesAPI.Entities;

namespace MoviesAPI.Services
{
    public class InMemoryRepository: IRepository
    {
        private List<Genre> _genres;
        public InMemoryRepository()
        {
            _genres = new List<Genre>()
            {
                new Genre() {Id = 1, Name = "Comedy"},
                new Genre() {Id = 2, Name = "Action"}
            };
        }

        public async Task<List<Genre>> GetAllGenres() //In future this method will return a Task -> List<Genre>
        {
            await Task.Delay(3000); //Web server will handle any request in the meantime and after 3s it will come back here and continue the execution.
            return _genres;
        }

        public Genre GetGenreById(int Id)
        {
            return _genres.FirstOrDefault(x => x.Id == Id);
        }
    }
}
