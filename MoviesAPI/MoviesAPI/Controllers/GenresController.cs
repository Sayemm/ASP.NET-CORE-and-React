using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Entities;
using MoviesAPI.Services;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    public class GenresController: ControllerBase
    {
        private readonly IRepository _repository;

        public GenresController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]                // domain/api/genres
        [HttpGet("list")]        // domain/api/genres/list
        [HttpGet("/allgenres")]  // domain/allgenres
        public List<Genre> Get()
        {
            return _repository.GetAllGenres();
        }

        [HttpGet("{Id:int}")]
        public Genre Get(int Id)
        {
            var genre = _repository.GetGenreById(Id);
            
            if(genre == null)
            {
                //return NotFound();
            }

            return genre;
        }

        [HttpPost]
        public void Post()
        {

        }

        [HttpPut]
        public void Put()
        {

        }

        [HttpDelete]
        public void Delete()
        {
            Console.WriteLine("Hello");
        }
    }
}
