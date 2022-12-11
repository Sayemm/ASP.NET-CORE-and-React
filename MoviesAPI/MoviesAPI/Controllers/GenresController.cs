using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Entities;
using MoviesAPI.Services;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController: ControllerBase
    {
        private readonly IRepository _repository;
        private readonly ILogger _logger;

        public GenresController(IRepository repository, ILogger<GenresController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]                // domain/api/genres
        [HttpGet("list")]        // domain/api/genres/list
        [HttpGet("/allgenres")]  // domain/allgenres
        [ResponseCache(Duration = 60)]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<List<Genre>>> Get()
        {
            _logger.LogInformation("Getting all the genres");
            return  await _repository.GetAllGenres();
        }

        [HttpGet("{Id:int}")]
        public ActionResult<Genre> Get(int Id, [FromHeader] string name)
        {
            _logger.LogDebug("Get by Id method is executing.....");
            var genre = _repository.GetGenreById(Id);
            
            if(genre == null)
            {
                _logger.LogWarning($"Genre with Id {Id} not found");
                return NotFound();
            }

            return genre;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            _repository.AddGenre(genre);

            return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genre genre)
        {
            return NoContent();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();
        }
    }
}
