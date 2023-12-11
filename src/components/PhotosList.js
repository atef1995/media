import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";

function PhotosList({ album }) {
    const res = useFetchPhotosQuery(album);
    const [] = use
    console.log(res);
}

export default PhotosList;