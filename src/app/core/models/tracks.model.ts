import {
    ArtisModel
} from "./artist.model";
export interface TRackModels {
    name: string;
    album: string; 
    cover: string; 
     url: string; 
    _id: string | number; 
    artist?: ArtisModel;
}

