import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService={
    getAll:(): IRes<IGenre[]> =>apiService.get(urls.genres.base)
}