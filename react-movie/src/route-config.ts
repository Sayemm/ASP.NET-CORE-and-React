import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/IndexActors";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import LandingPage from "./movies/LandingPage";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";
import IndexMovieTheaters from "./movietheaters/IndexMovieTheaters";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
    {path: '/genres', element: IndexGenres},
    {path: '/genres/create', element: CreateGenre},
    {path: '/genres/edit/:id', element: EditGenre},

    {path: '/actors', element: IndexActors},
    {path: '/actors/create', element: CreateActor},
    {path: '/actors/edit/:id', element: EditActor},

    {path: '/movietheaters', element: IndexMovieTheaters},
    {path: '/movietheaters/create', element: CreateMovieTheater},
    {path: '/movietheaters/edit/:id', element: EditMovieTheater},

    {path: '/movies/create', element: CreateMovie},
    {path: '/movies/edit/:id', element: EditMovie},
    {path: '/movies/filter', element: FilterMovies},

    {path: '/', element: LandingPage},
    {path: '*', element: RedirectToLandingPage}
]

export default routes;